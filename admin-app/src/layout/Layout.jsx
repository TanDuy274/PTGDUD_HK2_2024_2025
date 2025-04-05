import React from "react";
// import "./Layout.css";

function Layout() {
  return (
    <div className="flex border-5 border-blue-400">
      <div className="menu border-r-5 w-[500px] border-blue-400 flex flex-col items-center">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        <img src="../../src/assets/react.svg" alt="" height="300px" />
      </div>
      <div className="container">
        <div className="header border-b-5 border-blue-400">
          <h2 className="text-center">My Header</h2>
        </div>
        <div className="overview flex border-b-5 border-blue-400 justify-around">
          <div className="overview-item">
            <p>item</p>
            <img src="../../src/assets/react.svg" alt="" />
          </div>
          <div className="overview-item">
            <p>item</p>
            <img src="../../src/assets/react.svg" alt="image" />
          </div>
          <div className="overview-item">
            <p>item</p>
            <img src="../../src/assets/react.svg" alt="image" />
          </div>
          <div className="overview-item">
            <p>item</p>
            <img src="../../src/assets/react.svg" alt="image" />
          </div>
        </div>
        <div className="content p-3">
          <table className="border-1  w-full text-center">
            <tr>
              <th className="border-1">Column 1</th>
              <th className="border-1">Column 2</th>
              <th className="border-1">Column 3</th>
              <th className="border-1">Column 4</th>
              <th className="border-1">Column 5</th>
            </tr>
            <tr>
              <td className="border-1">Row 1, Col 1</td>
              <td className="border-1">Row 1, Col 2</td>
              <td className="border-1">Row 1, Col 3</td>
              <td className="border-1">Row 1, Col 4</td>
              <td className="border-1">Row 1, Col 5</td>
            </tr>
            <tr>
              <td className="border-1">Row 2, Col 1</td>
              <td className="border-1">Row 2, Col 2</td>
              <td className="border-1">Row 2, Col 3</td>
              <td className="border-1">Row 2, Col 4</td>
              <td className="border-1">Row 2, Col 5</td>
            </tr>
            <tr>
              <td className="border-1">Row 3, Col 1</td>
              <td className="border-1">Row 3, Col 2</td>
              <td className="border-1">Row 3, Col 3</td>
              <td className="border-1">Row 3, Col 4</td>
              <td className="border-1">Row 3, Col 5</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Layout;
