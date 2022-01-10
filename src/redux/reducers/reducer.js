/* eslint-disable no-mixed-spaces-and-tabs */
import { setLocalStorage } from "../../helperfunctions";
import {
  DELETE_TABLE_DATA,
  EDIT_TABLE_DATA,
  GET_TABLE_DATA,
  SET_TABLE_DATA,
} from "../actions/actionTypes";

const INITIAL_VALUE = {
  data: [],
};

const tableReducer = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case GET_TABLE_DATA:
      return {
        ...state,
      };
    case DELETE_TABLE_DATA: {
      const modifiedData = state.data.filter((item) => {
        return item.id !== action.payload;
      });
      //to store updated array
      setLocalStorage("users", JSON.stringify(modifiedData));
      return {
        ...state,
        data: modifiedData,
      };
    }
    case SET_TABLE_DATA:
      return {
        ...state,
        data: action.payload,
      };

    case EDIT_TABLE_DATA: {
      const editableDataIdx = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      let editedData = state.data;
      if (editableDataIdx >= 0) {
        editedData[editableDataIdx] = action.payload;
      }
      setLocalStorage("users", JSON.stringify(editedData));
      return {
        ...state,
        data: editedData,
      };
    }
    default:
      return state;
  }
};

export default tableReducer;
