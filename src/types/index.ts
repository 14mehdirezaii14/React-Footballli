import { ReactChild, ReactChildren } from "react";
export type MatchesType = {
  away: { id: number; name: string; logo: string; winner: null };
  home: { id: number; name: string; logo: string; winner: null };
  timeGame: string;
};

export type CardLeaguesType = {
  leagueImage: string;
  matches: MatchesType[];
  nameLeague: string;
};

export interface ListDatesType {
  nameDay: string;
  date: string;
}

export interface ListLeagues {
  [key: string]: CardLeaguesType;
}

export interface AuxProps {
  children: ReactChild | ReactChildren;
}

export interface SelectorType {
  dateReducer: ListDatesType | string;
  listGamesReducer: ListLeagues | string;
}

export type TypeAction = {
  type: string;
  peyload?: string[] | string;
};

// export interface ResponseDataGames {
//   fixture: {
//     date: string;
//     id: number;
//     periods: {
//       first: number;
//       second: number;
//     };
//     referee: any;
//     status: {
//       elapsed: number;
//       long: string;
//       short: string;
//     };
//     timestamp: number;
//     timezone: string;
//     venue: {
//       city: string;
//       id: any;
//       name: string;
//     };
//   };
//   goals: {
//     away: number;
//     home: number;
//   };
//   league: {
//     country: string;
//     flag: string;
//     id: number;
//     logo: string;
//     name: string;
//     round: string;
//     season: number;
//   };
//   score: {
//     extratime: { home: number | null; away: number | null };
//     fulltime: { home: number | null; away: number | null };
//     halftime: { home: number | null; away: number | null };
//     penalty: { home: number | null; away: number | null };
//   };
//   teams: {
//     away: {
//       id: number;
//       name: string;
//       logo: string;
//       winner: boolean | null;
//     };
//     home: {
//       id: number;
//       name: string;
//       logo: string;
//       winner: boolean | null;
//     };
//   };
// }
