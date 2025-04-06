import "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.min.css";
import { useEffect, useState } from "react";
import "./App.css";
import CustomerTable from "./components/CustomerTable/CustomerTable";
import Overview from "./components/Overview/Overview";

function App() {
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

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-2 text-gray-600">Đang tải dữ liệu...</p>
      </div>
    );
  }

  return (
    <>
      <Overview overviewData={overviewData} />

      <CustomerTable customers={customersData} />
    </>
  );
}

export default App;
