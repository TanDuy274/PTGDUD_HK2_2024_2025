// Layout.jsx
import React, { useEffect, useState } from "react";
import Menu from "../components/Menu/Menu";
import Overview from "../components/Overview/Overview";
import CustomerTable from "../components/CustomerTable/CustomerTable";
import Header from "../components/Header/Header";
import CustomerModal from "../components/CustomerModal/CustomerModal";

function Layout() {
  const OVERVIEW_URL = "http://localhost:3000/overview";
  const CUSTOMERS_URL = "http://localhost:3000/customers";

  const [overviewData, setOverviewData] = useState(null);
  const [customersData, setCustomersData] = useState(null);
  const [loadingOverview, setLoadingOverview] = useState(true);
  const [loadingCustomers, setLoadingCustomers] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  // Fetch Overview only once on mount
  useEffect(() => {
    const fetchOverview = async () => {
      try {
        setLoadingOverview(true);
        const res = await fetch(OVERVIEW_URL);
        const json = await res.json();

        await new Promise((resolve) => setTimeout(resolve, 1500));

        setOverviewData(json);
        setLoadingOverview(false);
      } catch (error) {
        console.error("Error fetching overview:", error);
        setLoadingOverview(false);
      }
    };
    fetchOverview();
  }, []);

  // Fetch Customers
  useEffect(() => {
    reloadCustomers();
  }, []);

  const reloadCustomers = async () => {
    try {
      setLoadingCustomers(true);
      const res = await fetch(CUSTOMERS_URL);
      const json = await res.json();

      await new Promise((resolve) => setTimeout(resolve, 1500));

      setCustomersData(json);
      setLoadingCustomers(false);
    } catch (error) {
      console.error("Error fetching customers:", error);
      setLoadingCustomers(false);
    }
  };

  const handleAddCustomer = () => {
    setSelectedCustomer(null);
    setIsModalOpen(true);
  };

  const handleSaveCustomer = () => {
    reloadCustomers();
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex m-[20px] mt-[0px] mr-[0px]">
        <div className="menu border-r-[1px] border-[#ececed] pr-[20px] pt-[20px]">
          <Menu />
        </div>
        <div className="container">
          <div className="header border-b-[1px] border-[#ececed]">
            <Header />
          </div>

          <div className="content p-3">
            <div className="overview-lable flex items-center">
              <img src="../../../src/assets/images/Squares four 1.png" alt="" />
              <p className="ml-[10px] font-bold text-[20px] my-[16px]">
                Overview
              </p>
            </div>
            {loadingOverview ? (
              <div className="text-center py-4">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
                <p className="text-gray-600 mt-2">Loading overview...</p>
              </div>
            ) : (
              <Overview overviewData={overviewData} />
            )}

            <div className="flex items-center justify-between">
              <div className="table-lable flex items-center mt-[20px]">
                <img src="../../../src/assets/images/File text 1.png" alt="" />
                <p className="ml-[10px] font-bold text-[20px] my-[16px]">
                  Datailed report
                </p>
              </div>
              <div className="flex mt-[20px] gap-4">
                <button
                  type="button"
                  className="flex items-center border border-[#f34b87] rounded-[6px] px-[10px] py-[6px] cursor-pointer"
                  onClick={handleAddCustomer}
                >
                  <span className="text-[#f34b87] font-bold mr-[10px]">+</span>
                  Add
                </button>
                <button
                  type="button"
                  className="flex items-center border border-[#f34b87] rounded-[6px] px-[10px] py-[6px] cursor-pointer"
                >
                  <img
                    src="../../../src/assets/images/Download.png"
                    alt=""
                    className="mr-[10px]"
                  />
                  Import
                </button>
                <button
                  type="button"
                  className="flex items-center border border-[#f34b87] rounded-[6px] px-[10px] py-[6px] cursor-pointer"
                >
                  <img
                    src="../../../src/assets/images/Move up.png"
                    alt=""
                    className="mr-[10px]"
                  />
                  Export
                </button>
              </div>
            </div>

            {loadingCustomers ? (
              <div className="text-center py-4">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-pink-500 mx-auto"></div>
                <p className="text-gray-600 mt-2">Loading customer data...</p>
              </div>
            ) : (
              <CustomerTable customers={customersData} />
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <CustomerModal
          customer={selectedCustomer}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveCustomer}
        />
      )}
    </>
  );
}

export default Layout;
