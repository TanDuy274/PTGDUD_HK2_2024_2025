import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import OverviewItem from "./components/OverviewItem/OverviewItem";

function App() {
  const OVERVIEW_URL = "http://localhost:3000/overview";
  const [overviewData, setOverviewData] = useState();

  useEffect(() => {
    fetch(OVERVIEW_URL)
      .then((response) => response.json())
      .then((data) => {
        setOverviewData(data), console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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
