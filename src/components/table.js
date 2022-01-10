/* eslint-disable react/jsx-key */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocalStorage } from "../helperfunctions";
import { getTableData, storeTabelData } from "../redux/actions/actions";
import Row from "./row";

const CustomTable = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.table.data);
  const tableHeaders = [
    "SrNo.",
    "Email",
    "First Name",
    "Last Name",
    "Image",
    "Actions",
  ];
  useEffect(() => {
    const localDataStorage = JSON.parse(getLocalStorage("users"));
    if (localDataStorage && localDataStorage.length) {
      dispatch(storeTabelData(localDataStorage));
    } else {
      dispatch(getTableData());
    }
  }, []);

  if (!userData.length) {
    return <h1>NO USERS FOUND</h1>;
  }
  return (
    <table className="table table-dark table-hover table-responsive-sm custom-table">
      <thead>
        <tr>
          {tableHeaders.map((title, id) => (
            <th scope="col" key={id}>
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {userData &&
          userData.length &&
          userData.map((rowData) => (
            <tr key={rowData.id}>
              <Row editData={rowData} />
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default CustomTable;
