import { tableData } from "../../constData/data";
import { IconLine, IconMedium } from "../../utils/icons/IconComponent";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import "./table.css";
const Table = () => {
  return (
    <div className="table">
      <div className="tableHeaderText">
        <div>
          <p className="tableName">All customers</p>
          <p className="tableSubName">Active Members</p>
        </div>
        <div className="inputWrap">
          <div className="icon">
            <IconMedium type="search" />
          </div>
          <input type="text" name="" id="" className="search" placeholder="Search" />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Company</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Country</th>
            <th style={{ textAlign: "center" }}>Status</th>
          </tr>
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "rgb(238, 238, 238)",
              position: "absolute",
              left: "0",
              marginTop: "14px",
            }}></div>
        </thead>
        {/* <IconLine type="line" className="line" /> */}
        <tbody>
          {tableData.map((item) => (
            <tr key={item.id}>
              <td>
                <span>{item.name}</span>
              </td>
              <td>
                <span>{item.company}</span>
              </td>
              <td>
                <span>{item.number}</span>
              </td>
              <td>
                <span>{item.email}</span>
              </td>
              <td>
                <span>{item.country} </span>
              </td>
              <td className="status">
                {item.status ? (
                  <div className="active">
                    <span>Active</span>
                  </div>
                ) : (
                  <div className="inactive">
                    <span>Inactive</span>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="tableFooter">
        <p className="helpTexter">Showing data 1 to 8 of 256K entries</p>
        <Stack spacing={2}>
          <Pagination count={40} variant="outlined" shape="rounded" boundaryCount={1} />
        </Stack>
      </div>
    </div>
  );
};
export default Table;
