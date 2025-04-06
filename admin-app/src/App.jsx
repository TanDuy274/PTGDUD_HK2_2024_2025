import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import OverviewItem from "./components/OverviewItem/OverviewItem";
import $ from "jquery";
import "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.min.css";

function App() {
  const OVERVIEW_URL = "http://localhost:3000/overview";
  const CUSTOMERS_URL = "http://localhost:3000/customers";

  const [overviewData, setOverviewData] = useState(null);
  const [customersData, setCustomersData] = useState(null);
  const [loading, setLoading] = useState(true);
  const tableRef = useRef();

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

  useEffect(() => {
    if (!loading && tableRef.current) {
      $(tableRef.current).DataTable({
        columnDefs: [
          { orderable: false, targets: [0, -1, -2] }, // Disable sort for checkbox & last column
        ],
      });

      // Check / uncheck all rows when head checkbox is toggled
      $("#select-all").on("click", function () {
        const isChecked = $(this).is(":checked");
        $('tbody input[type="checkbox"]', tableRef.current).prop(
          "checked",
          isChecked
        );
      });
    }
  }, [loading]);

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-2 text-gray-600">Đang tải dữ liệu...</p>
      </div>
    );
  }

  const tableData = customersData.map((customer) => {
    // eslint-disable-next-line no-unused-vars
    const { id, name, image, company, orderValue, orderDate, status } =
      customer;
    return {
      name,
      image,
      company,
      orderValue,
      orderDate,
      status,
    };
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Layout />} />
        <Route path="/projects" element={<Layout />} />
        <Route path="/teams" element={<Layout />} />
        <Route path="/analytics" element={<Layout />} />
        <Route path="/messages" element={<Layout />} />
        <Route path="/integrations" element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;
