import "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.min.css";
import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import Layout from "./layout/Layout";

function App() {
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
