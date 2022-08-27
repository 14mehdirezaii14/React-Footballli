import { all, put, takeLatest } from "redux-saga/effects";
import { Axios } from "../components/api/axiosConfig";
let moment = require("moment-jalaali");

function* sagaSetDates() {
  let list: string[] = [];
  for (let n = 0; n <= 7; n++) {
    yield moment.loadPersian();
    const day = moment().add(n, "days").format("jD jMMMM ");
    if (!list.includes(day)) {
      yield list.push(day);
    }
  }
  yield put({ type: "GET_DATES", peyload: list });
}

function* watchSagaSetDates() {
  yield takeLatest("SET_DATES", sagaSetDates);
}

//

function* getListGames() {
  let data: any = [];
  yield Axios.get("/fixtures", { params: { date: "2020-02-06" } })
    .then((res) => {
      data = res.data.response;
    })
    .catch((err) => {
      console.log(err.message);
    });
  yield put({ type: "GET_LIST_GAMES", peyload: data });
}

function* watchGetData() {
  yield takeLatest("WATCH_GET_LIST_GAMES", getListGames);
}

export function* rootSaga() {
  yield all([watchSagaSetDates(), watchGetData()]);
}
