import { TypeAction } from "../../types";

export function listGamesReducer(
  state: string = "loading",
  action: TypeAction
) {
  switch (action.type) {
    case "GET_LIST_GAMES":
      return action.peyload;
    case "LOADING":
      return "loading";
    default:
      return state;
  }
}
