import "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.min.css";
import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
      {/* <Header /> */}
    </>
  );
}

export default App;
