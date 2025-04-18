import axios from "axios";

// Fetch all orders
const fetchOrders = async () => {
  try {
    const response = await axios.get("http://localhost:3001/orders");
    console.log("Orders API Response:", response.data);
    return response.data || [];
  } catch (error) {
    console.error("Error fetching orders:", error);
    return [];
  }
};

// Fetch order details by ID
const fetchOrderDetailsById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3001/orders/${id}`);
    console.log("Order Details Response:", response.data);
    return response.data || [];
  } catch (error) {
    console.error("Error fetching order details:", error);
    return [];
  }
};

export { fetchOrders, fetchOrderDetailsById };
