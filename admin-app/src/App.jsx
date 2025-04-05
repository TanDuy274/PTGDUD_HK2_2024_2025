import { useEffect, useState } from "react";
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
      {Array.isArray(overviewData) &&
        overviewData.map((item) => <OverviewItem key={item.id} {...item} />)}
    </>
  );
}

export default App;
