import { all, put, takeLatest } from "redux-saga/effects";
import { Axios } from "../components/api/axiosConfig";
import { getToday } from "../components/getToday";
let moment = require("moment-jalaali");

// Two ways to sort the list
// let newList: any = [];
// Cleaning data Leagues and teams
// function* arrangeTheLeagueList(list: any) {
//   yield list.map((item: any) => {
//     if (newList.find((i: any) => i.nameLeague === item.league.name)) {
//       return;
//     }
//     newList.push({
//       nameLeague: item.league.name,
//       ligImage: item.league.logo,
//       matches: [],
//     });
//   });
// }

// function* arrangeTheTeamsList(list: any) {
//   yield list.map((item: any) => {
//     newList.filter((newItem: any) => {
//       if (newItem.nameLeague === item.league.name) {
//         newItem.matches.push(item.teams);
//       }
//     });
//   });
// }

let listLeagues: any = {};
function* arrangeTheTeamsList(list: any) {
  yield list.map((item: any) => {
    if (listLeagues[item.league.name]) {
      listLeagues[item.league.name].matches.push(item.teams);
    } else {
      listLeagues[item.league.name] = {
        nameLeague: item.league.name,
        leagueImage: item.league.logo,
        matches: [item.teams],
      };
    }
  });
}

// 

function* sagaSetDates() {
  const today = getToday();
  const tomorrow = moment().add(1, "days").format("YYYY-M-D");
  let list: any = [
    { nameDay: "امروز", date: today, active: true },
    { nameDay: "فردا", date: tomorrow, active: false },
  ];
  for (let n = 2; n <= 7; n++) {
    yield moment.loadPersian();
    const nameDay = moment().add(n, "days").format("jD jMMMM ");
    const date = moment().add(n, "days").format("YYYY-M-D");
    if (!list.includes(nameDay)) {
      yield list.push({ nameDay, date, active: false });
    }
  }
  yield put({ type: "GET_DATES", peyload: list });
}

function* watchSagaSetDates() {
  yield takeLatest("SET_DATES", sagaSetDates);
}

//

function* getListGames(action: any) {
  let data: any = [];
  yield Axios.get("/fixtures", { params: { date: action.peyload } })
    .then((res) => {
      console.log(res)
      data = res.data.response;
    })
    .catch((err) => {
      console.log(err.message);
    });
  // yield arrangeTheLeagueList(data);
  // yield arrangeTheTeamsList(data);
  yield arrangeTheTeamsList(data);
  yield put({ type: "GET_LIST_GAMES", peyload: listLeagues });
}

function* watchGetListGames() {
  yield takeLatest("WATCH_GET_LIST_GAMES", getListGames);
}

export function* rootSaga() {
  yield all([watchSagaSetDates(), watchGetListGames()]);
}
