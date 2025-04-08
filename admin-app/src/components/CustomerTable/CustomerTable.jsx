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
      columnDefs: [
        { orderable: false, targets: "_all" },
        { className: "dt-center", targets: 5 },
      ],
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
            <th className="text-center">STATUS</th>
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
              <td className="text-center">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium
                    ${
                      customer.status === "New"
                        ? "bg-blue-100 text-blue-600"
                        : customer.status === "In-progress"
                        ? "bg-yellow-100 text-yellow-700"
                        : customer.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-500"
                    }
                  `}
                >
                  {customer.status.charAt(0).toUpperCase() +
                    customer.status.slice(1)}
                </span>
              </td>
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
