import { Navigate, Route, Routes } from "react-router";
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
