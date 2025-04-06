import { useEffect, useRef, useState } from "react";
import "./App.css";
import OverviewItem from "./components/OverviewItem/OverviewItem";
import $ from "jquery";
import "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.min.css";

function App() {
  const OVERVIEW_URL = "http://localhost:3000/overview";
  const [overviewData, setOverviewData] = useState();
  const tableRef = useRef();

  useEffect(() => {
    fetch(OVERVIEW_URL)
      .then((response) => response.json())
      .then((data) => {
        setOverviewData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    if (tableRef.current) {
      $(tableRef.current).DataTable(); // Khởi tạo DataTable
    }
  }, []);

  const tableData = [
    [
      "Tiger Nixon",
      "System Architect",
      "Edinburgh",
      "5421",
      "2011-04-25",
      "$320,800",
    ],
    [
      "Garrett Winters",
      "Accountant",
      "Tokyo",
      "8422",
      "2011-07-25",
      "$170,750",
    ],
    [
      "Ashton Cox",
      "Junior Technical Author",
      "San Francisco",
      "1562",
      "2009-01-12",
      "$86,000",
    ],
    [
      "Cedric Kelly",
      "Senior Javascript Developer",
      "Edinburgh",
      "6224",
      "2012-03-29",
      "$433,060",
    ],
  ];

  return (
    <>
      {/* {Array.isArray(overviewData) &&
        overviewData.map((item) => <OverviewItem key={item.id} {...item} />)} */}

      <table ref={tableRef} className="display" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Extn.</th>
            <th>Start date</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              {row.map((cell, i) => (
                <td key={i}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
