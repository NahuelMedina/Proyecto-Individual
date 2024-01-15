import axios from "axios";
import {
  FILTER_BY_TEAM,
  GET_DRIVERS,
  GET_TEAMS,
  FILTERS,
  PAGINATE,
} from "./action-types";

export const postDriver = (state) => {
  return async (dispatch) => {
    try {
      await axios.post("http://localhost:3001/drivers", state);
    } catch (error) {
      console.log(error);
    }
  };
};
export const getDrivers = (state) => {
  return async (dispatch) => {
    try {
      const { data } = await axios("http://localhost:3001/drivers");
      dispatch({
        type: GET_DRIVERS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getTeams = (state) => {
  return async (dispatch) => {
    try {
      const { data } = await axios("http://localhost:3001/teams");
      dispatch({
        type: GET_TEAMS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const filterByTeam = (team) => {
  return (dispatch) => {
    try {
      dispatch({
        type: FILTER_BY_TEAM,
        payload: team,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const page = (direction) => {
  return (dispatch) => {
    dispatch({
      type: PAGINATE,
      payload: direction,
    });
  };
};

export const filters = (order) => {
  return (dispatch) => {
    dispatch({
      type: FILTERS,
      payload: order,
    });
  };
};
