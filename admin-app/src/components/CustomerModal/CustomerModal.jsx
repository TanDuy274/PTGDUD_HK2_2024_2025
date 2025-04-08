import React, { useState, useEffect } from "react";

function CustomerModal({ customer, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    orderValue: "",
    orderDate: "",
    status: "",
  });

  useEffect(() => {
    if (customer) {
      setFormData(customer);
    }
  }, [customer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    const [year, month, day] = formData.orderDate.split("-");
    const formattedOrderDate = `${day}/${month}/${year}`;

    const newData = {
      ...formData,
      orderDate: formattedOrderDate,
    };

    try {
      let response;

      if (customer?.id) {
        // Chỉnh sửa
        response = await fetch(
          `http://localhost:3000/customers/${customer.id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newData),
          }
        );
      } else {
        // Thêm mới
        response = await fetch(`http://localhost:3000/customers`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newData),
        });
      }

      if (!response.ok) throw new Error("Failed");

      const result = await response.json();
      onSave(result); // trả lại dữ liệu cho component cha
      onClose();
    } catch (err) {
      console.error("Error saving customer:", err);
      alert("Lỗi khi lưu dữ liệu");
    }
  };

  useEffect(() => {
    if (customer) {
      const [day, month, year] = customer.orderDate.split("/");
      const formattedDate = `${year}-${month}-${day}`; // đổi thành yyyy-mm-dd

      setFormData({
        ...customer,
        orderDate: formattedDate,
      });
    }
  }, [customer]);

  if (!customer) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-xl w-[400px] shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold mb-4">Edit Customer</h2>
        <div className="flex flex-col gap-2">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border px-2 py-1 w-full rounded"
            />
          </label>
          <label>
            Company:
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="border px-2 py-1 w-full rounded"
            />
          </label>
          <label>
            Order Value:
            <input
              type="number"
              name="orderValue"
              value={formData.orderValue}
              onChange={handleChange}
              className="border px-2 py-1 w-full rounded"
            />
          </label>
          <label>
            Order Date:
            <input
              type="date"
              name="orderDate"
              value={formData.orderDate}
              onChange={handleChange}
              className="border px-2 py-1 w-full rounded"
            />
          </label>
          <label>
            Status:
            <input
              type="text"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="border px-2 py-1 w-full rounded"
            />
          </label>
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={onClose}
            className="bg-red-600 px-4 py-2 rounded hover:bg-red-500 text-white"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomerModal;
