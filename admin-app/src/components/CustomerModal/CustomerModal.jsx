import React, { useState, useEffect } from "react";
import ErrorPopup from "../ErrorPopup/ErrorPopup";

function CustomerModal({ customer, onClose, onSave }) {
  const [errorPopup, setErrorPopup] = useState(""); // chứa nội dung popup lỗi

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    orderValue: "",
    orderDate: "",
    status: "",
    image: "",
  });

  useEffect(() => {
    if (customer) {
      const [day, month, year] = customer.orderDate.split("/");
      const formattedDate = `${year}-${month}-${day}`;
      setFormData({
        ...customer,
        orderDate: formattedDate,
      });
    }
  }, [customer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          image: reader.result, // Base64 string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async (e) => {
    e?.preventDefault?.(); // Ngăn form reload nếu có e được truyền vào

    const { name, company, orderValue, orderDate, status } = formData;
    if (!name || !company || !orderValue || !orderDate || !status) {
      setErrorPopup("Please fill in all required fields before saving!");
      return;
    }

    const [year, month, day] = formData.orderDate.split("-");
    const formattedOrderDate = `${day}/${month}/${year}`;

    const newData = {
      ...formData,
      orderDate: formattedOrderDate,
    };

    try {
      let response;
      if (customer?.id) {
        response = await fetch(
          `http://localhost:3000/customers/${customer.id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newData),
          }
        );
      } else {
        response = await fetch(`http://localhost:3000/customers`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newData),
        });
      }

      if (!response.ok) throw new Error("Failed");

      const result = await response.json();
      onSave(result);
      onClose();
    } catch (err) {
      console.error("Error saving customer:", err);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-xl w-[400px] shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold mb-4">
          {customer ? "Edit Customer" : "Add Customer"}
        </h2>

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
            Image:
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full border px-2 py-1 rounded"
            />
          </label>

          {formData.image && (
            <img
              src={formData.image}
              alt="Preview"
              className="w-24 h-24 object-cover rounded-full mx-auto mt-2"
            />
          )}

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
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="border px-2 py-1 w-full rounded"
            >
              <option value="">-- Select status --</option>
              <option value="New">New</option>
              <option value="In-progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
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
            type="button"
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
        {errorPopup && (
          <ErrorPopup message={errorPopup} onClose={() => setErrorPopup("")} />
        )}
      </div>
    </div>
  );
}

export default CustomerModal;
