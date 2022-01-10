import React, { useState } from "react";
import { deleteTableData, editTableData } from "../redux/actions/actions";
import { useDispatch } from "react-redux";
const Row = ({ editData }) => {
  const dispatch = useDispatch();
  const [editRowData, setEditRowData] = useState(editData);
  const [editMode, setEditMode] = useState(false);

  const updateData = (e) => {
    setEditRowData({ ...editRowData, [e.target.name]: e.target.value });
  };
  const renderTabelRows = () => {
    return Object.keys(editData).map((item, index) => {
      return (
        <td key={index}>
          {editMode ? (
            <input
              name={item}
              onChange={updateData}
              value={editRowData[item]}
            />
          ) : item.includes("avatar") ? (
            <img className="image" src={editRowData[item]} alt="user_image" />
          ) : (
            editRowData[item]
          )}
        </td>
      );
    });
  };
  return (
    <>
      {renderTabelRows()}
      <td>
        <div className="row-edit">
          {editMode ? (
            <button
              className="btn btn-success m-1 p-2"
              onClick={() => {
                setEditMode(!editMode);
                dispatch(editTableData(editRowData));
              }}
            >
              Save
            </button>
          ) : (
            <button
              className="btn btn-primary m-1 p-2"
              onClick={() => {
                setEditMode(!editMode);
                setEditRowData(editRowData);
              }}
            >
              Edit
            </button>
          )}
          <button
            className="btn btn-danger m-1 p-2"
            onClick={() => dispatch(deleteTableData(editData.id))}
          >
            Delete
          </button>
        </div>
      </td>
    </>
  );
};

export default Row;
