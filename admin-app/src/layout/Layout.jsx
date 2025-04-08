import React, { useEffect, useState } from "react";
import Menu from "../components/Menu/Menu";
import Overview from "../components/Overview/Overview";
import CustomerTable from "../components/CustomerTable/CustomerTable";
import Header from "../components/Header/Header";
// import "./Layout.css";

function Layout() {
  const OVERVIEW_URL = "http://localhost:3000/overview";
  const CUSTOMERS_URL = "http://localhost:3000/customers";

  const [overviewData, setOverviewData] = useState(null);
  const [customersData, setCustomersData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [overviewRes, customersRes] = await Promise.all([
          fetch(OVERVIEW_URL),
          fetch(CUSTOMERS_URL),
        ]);

        const overviewJson = await overviewRes.json();
        const customersJson = await customersRes.json();

        await new Promise((resolve) => setTimeout(resolve, 1500));

        setOverviewData(overviewJson);
        setCustomersData(customersJson);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex m-[20px] mt-[0px] mr-[0px]">
      <div className="menu border-r-[1px] border-[#ececed] pr-[20px] pt-[20px]">
        <Menu />
      </div>
      <div className="container">
        <div className="header border-b-[1px] border-[#ececed]">
          <Header />
        </div>

        <div className="content p-3">
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
              <p className="mt-2 text-gray-600">Loading data...</p>
            </div>
          ) : (
            <>
              <div className="overview-lable flex items-center">
                <img
                  src="../../../src/assets/images/Squares four 1.png"
                  alt=""
                />
                <p className="ml-[10px] font-bold text-[20px] my-[16px]">
                  Overview
                </p>
              </div>
              <Overview overviewData={overviewData} />
              <div className="flex items-center  justify-between">
                <div className="table-lable flex items-center mt-[20px]">
                  <img
                    src="../../../src/assets/images/File text 1.png"
                    alt=""
                  />
                  <p className="ml-[10px] font-bold text-[20px] my-[16px] ">
                    Datailed report
                  </p>
                </div>
                <div className="flex mt-[20px] gap-4">
                  <button className="flex items-center border border-[#f34b87] rounded-[6px] px-[10px] py-[6px]  cursor-pointer">
                    <span className="text-[#f34b87] font-bold mr-[10px]">
                      +
                    </span>
                    Add
                  </button>
                  <button className="flex items-center border border-[#f34b87] rounded-[6px] px-[10px] py-[6px]  cursor-pointer">
                    <img
                      src="../../../src/assets/images/Download.png"
                      alt=""
                      className=" mr-[10px]"
                    />
                    Import
                  </button>
                  <button className="flex items-center border border-[#f34b87] rounded-[6px] px-[10px] py-[6px]  cursor-pointer">
                    <img
                      src="../../../src/assets/images/Move up.png"
                      alt=""
                      className=" mr-[10px]"
                    />
                    Export
                  </button>
                </div>
              </div>
              <CustomerTable customers={customersData} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Layout;
