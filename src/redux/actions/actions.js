import {
  GET_TABLE_DATA,
  SET_TABLE_DATA,
  DELETE_TABLE_DATA,
  EDIT_TABLE_DATA,
} from "./actionTypes";

export const getTableData = (payload) => {
  return {
    type: GET_TABLE_DATA,
    payload,
  };
};

export const storeTabelData = (data) => {
  return {
    type: SET_TABLE_DATA,
    payload: data,
  };
};

export const deleteTableData = (id) => {
  return {
    type: DELETE_TABLE_DATA,
    payload: id,
  };
};

export const editTableData = (data) => {
  return {
    type: EDIT_TABLE_DATA,
    payload: data,
  };
};
