import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  PieChart, Pie, Cell, Tooltip, Legend,
  BarChart, Bar, XAxis, YAxis, CartesianGrid
} from 'recharts';
import Chatbot from './components/chatbot';
import './App.css'; // ✅ Import your CSS file

const cards = [
    { count: '+264', label: 'Total Tickets' },
    { count: '110', label: 'Resolve' },
    { count: '175', label: 'Responded' },
    { count: '59', label: 'Pending' },
  ];
  
  const pieData = [
    { name: 'Email', value: 400 },
    { name: 'Chat', value: 300 },
    { name: 'Messenger', value: 200 },
    { name: 'Whatsapp', value: 100 },
  ];
  
  const barData = [
    { name: 'Monday', tickets: 400 },
    { name: 'Tuesday', tickets: 300 },
    { name: 'Wednesday', tickets: 500 },
    { name: 'Thursday', tickets: 200 },
    { name: 'Friday', tickets: 278 },
  ];
  
  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff6b6b'];
  

const TicketStats = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 5;

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await axios.get(`http://localhost:3002/users/search`, {
              params: { q: searchTerm, page, limit }
            });
            setUsers(response.data.users);
            setTotalPages(response.data.totalPages);
          } catch (error) {
            console.error('Error fetching users:', error);
          }
        };
      
        fetchUsers();
      }, [searchTerm, page]);
      
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="ticket-stats-container">
      <div className="ticket-stats-grid">
        <div className="ticket-stats-cards">
          {cards.map((card, idx) => (
            <div key={idx} className="ticket-stats-card">
              <h5>{card.label}</h5>
              <h6>{card.count}</h6>
            </div>
          ))}
        </div>

        <div className="ticket-stats-chart">
          <h6 className="text-center">Tickets by Channel</h6>
          <PieChart width={300} height={250}>
            <Pie data={pieData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value" label>
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>

        <div className="ticket-stats-chart">
          <h6 className="text-center">Tickets by Day</h6>
          <BarChart width={300} height={250} data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="tickets" fill="#8884d8" />
          </BarChart>
        </div>
      </div>

      <div className="user-list-container">
      <div className="row header">
      <div className="col-md-8">
      <h3>User List</h3>
      </div>
      <div className="col-md-4 d-flex justify-content-center">
    <form className="ticket-search" role="search">
    <input
  className="form-control"
  type="search"
  placeholder="Search"
  aria-label="Search"
  value={searchTerm}
  onChange={handleSearchChange}
/>
    </form>
  </div>
      </div>

        <table className="table table-striped table-hover table-bordered mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? users.map((user, index) => (
              <tr key={user.id}>
                <td>{(page - 1) * limit + index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => setUsers(users.filter(u => u.id !== user.id))}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            )) : <tr><td colSpan="5" className="text-center">No users found</td></tr>}
          </tbody>
        </table>

        <div className="pagination-controls">
          <div>Page {page} of {totalPages}</div>
          <nav>
            <ul className="pagination mb-0">
              <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => handlePageChange(page - 1)}>Previous</button>
              </li>

              {[...Array(totalPages)].map((_, i) => (
                <li key={i} className={`page-item ${page === i + 1 ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => handlePageChange(i + 1)}>{i + 1}</button>
                </li>
              ))}

              <li className={`page-item ${page === totalPages ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => handlePageChange(page + 1)}>Next</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <Chatbot />
    </div>
  );
};

export default TicketStats;
