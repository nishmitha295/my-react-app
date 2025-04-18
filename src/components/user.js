import axios from "axios";

const fetchUsers = async () => {
  try {
    const response = await axios.get("http://localhost:3002/users");
    console.log("Users API Response:", response.data);
    return response.data || [];
  } catch (error) {
    console.error("Error fetching users:", error);
    return null; // Return null to indicate an error
  }
};

const fetchUserDetailsById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3002/users/${id}`);
    console.log("User Details Response:", response.data);
    return response.data || null; // Return null if no data
  } catch (error) {
    console.error("Error fetching users:", error);
    return null; // Return null for error handling
  }
};



export { fetchUsers, fetchUserDetailsById };
