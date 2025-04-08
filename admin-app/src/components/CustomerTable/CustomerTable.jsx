import { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.min.css";
import CustomerModal from "../CustomerModal/CustomerModal";

function CustomerTable({ customers }) {
  const tableRef = useRef();
  const [editingCustomer, setEditingCustomer] = useState(null);

  useEffect(() => {
    const table = $(tableRef.current).DataTable({
      destroy: true,
      columnDefs: [{ orderable: false, targets: "_all" }],
    });

    $("#select-all").on("click", function () {
      const isChecked = $(this).is(":checked");
      $('tbody input[type="checkbox"]', tableRef.current).prop(
        "checked",
        isChecked
      );
    });

    return () => {
      table.destroy();
    };
  }, [customers]);

  const handleSave = (updatedCustomer) => {
    console.log("Saved customer:", updatedCustomer);
    // Gọi API hoặc cập nhật state cha ở đây nếu muốn
  };

  return (
    <>
      <table ref={tableRef} className="display" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>
              <input type="checkbox" id="select-all" />
            </th>
            <th>NAME</th>
            <th>COMPANY</th>
            <th>ORDER VALUE</th>
            <th>ORDER DATE</th>
            <th>STATUS</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <img
                    src={customer.image}
                    alt={customer.name}
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                    }}
                  />
                  <span>{customer.name}</span>
                </div>
              </td>
              <td>{customer.company}</td>
              <td>${customer.orderValue}</td>
              <td>{customer.orderDate}</td>
              <td>{customer.status}</td>
              <td>
                <img
                  src="../../../src/assets/images/create.png"
                  alt="edit"
                  onClick={() => setEditingCustomer(customer)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingCustomer && (
        <CustomerModal
          customer={editingCustomer}
          onClose={() => setEditingCustomer(null)}
          onSave={handleSave}
        />
      )}
    </>
  );
}

export default CustomerTable;
