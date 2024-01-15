import {
  FILTERS,
  FILTER_BY_TEAM,
  GET_DRIVERS,
  GET_TEAMS,
  PAGINATE,
} from "../Actions/action-types";

let initialState = {
  allTeams: [],
  allDrivers: [],
  allDriversBackUp: [],
  currentPage: 0,
};

const rootReducer = (state = initialState, { type, payload }) => {
  const ITEMS_PAGES = 9;

  switch (type) {
    case GET_DRIVERS:
      return {
        ...state,
        allDrivers: [...payload].splice(0, ITEMS_PAGES),
        allDriversBackUp: payload,
      };

    case GET_TEAMS:
      return {
        ...state,
        allTeams: payload,
      };

    case FILTER_BY_TEAM:
      return {
        ...state,
        allDrivers: [...state.allDriversBackUp].filter(
          (d) => d.teams === payload
        ),
      };
    case PAGINATE:
      const nextPage = state.currentPage + 1;
      const prevPage = state.currentPage - 1;
      const firstIndex =
        payload === "next" ? nextPage * ITEMS_PAGES : prevPage * ITEMS_PAGES;

      if (payload === "next" && firstIndex >= state.allDriversBackUp.length)
        return state;
      else if (payload === "prev" && prevPage < 0) return state;

      return {
        ...state,
        allDrivers: [...state.allDriversBackUp].splice(firstIndex, ITEMS_PAGES),
        currentPage: payload === "next" ? nextPage : prevPage,
      };

    case FILTERS:
      switch (payload) {
        case "AZ":
          let asc = [...state.allDriversBackUp].sort((current, next) => {
            if (current.name.forename) {
              if (current.name.forename > next.name.forename) return 1;
              if (current.name.forename < next.name.forename) return -1;
              return 0;
            } else {
              if (current.name > next.name) return 1;
              if (current.name < next.name) return -1;
              return 0;
            }
          });
          return {
            ...state,
            allDrivers: [...asc].splice(0, ITEMS_PAGES),
            allDriversBackUp: asc,
            currentPage: 0,
          };
        case "ZA":
        default:
          return state;
      }

    default:
      return state;
  }
};

export default rootReducer;
