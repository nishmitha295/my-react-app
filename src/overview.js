import React from "react";
import Chatbot from "./components/chatbot";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { RadialBarChart, RadialBar, Legend } from 'recharts';
import './App.css';

// Chart Data
const areaData = [
  { day: 'Mon', time: 400 },
  { day: 'Tue', time: 300 },
  { day: 'Wed', time: 800 },
  { day: 'Thu', time: 200 },
  { day: 'Fri', time: 700 },
  { day: 'Sat', time: 600 },
  { day: 'Sun', time: 500 },
];

const radialData = [
  { name: 'Email', value: 400, fill: '#3b82f6' },
  { name: 'Chat', value: 300, fill: '#10b981' },
  { name: 'Messenger', value: 200, fill: '#f59e0b' },
  { name: 'Whatsapp', value: 150, fill: '#ef4444' },
  { name: 'Form', value: 100, fill: '#38bdf8' },
];

const Dashboard = () => (
  <div>
    <div className="row-container">
    <div class="container-card">
      <div className="card-row"><h5>Created Tickets</h5>
    <div className="dropdown">
          <a className="media-action lead" href="#" data-bs-toggle="dropdown">
            <i className="bi bi-three-dots-vertical"></i>
          </a>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else</a></li>
          </ul>
        </div>
        </div>
    <div className="card-row2">
											<h2 class="fw-500">23,100 <small class="fs-12 text-danger"><h6>- 5.3% </h6><i class="fa-solid fa-caret-up"></i></small> </h2>
											<p class="m-0 max-w-300 text-fade">Compare to last month</p>
										</div></div>
                    <div class="container-card">
      <div className="card-row"><h5>Unsolved Tickets</h5>
    <div className="dropdown">
          <a className="media-action lead" href="#" data-bs-toggle="dropdown">
            <i className="bi bi-three-dots-vertical"></i>
          </a>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else</a></li>
          </ul>
        </div>
        </div>
    <div className="card-row2">
											<h2 class="fw-500">3,154<small class="fs-12 text-success"><h6>+3%</h6><i class="fa-solid fa-caret-up"></i></small> </h2>
											<p class="m-0 max-w-300 text-fade">Compare to last month</p>
										</div></div>
                    <div class="container-card">
      <div className="card-row"><h5>Solved Tickets</h5>
    <div className="dropdown">
          <a className="media-action lead" href="#" data-bs-toggle="dropdown">
            <i className="bi bi-three-dots-vertical"></i>
          </a>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else</a></li>
          </ul>
        </div>
        </div>
    <div className="card-row2">
											<h2 class="fw-500">15,458<small class="fs-12 text-success"><h6>+ 5.3% </h6><i class="fa-solid fa-caret-up"></i></small> </h2>
											<p class="m-0 max-w-300 text-fade">Compare to last month</p>
										</div></div>
                    <div class="container-card">
      <div className="card-row"><h5>Average First Time Reply</h5>
    <div className="dropdown">
          <a className="media-action lead" href="#" data-bs-toggle="dropdown">
            <i className="bi bi-three-dots-vertical"></i>
          </a>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else</a></li>
          </ul>
        </div>
        </div>
    <div className="card-row2">
											<h2 class="fw-500">10:50 min<small class="fs-12 text-success"><h6>+5.3% </h6><i class="fa-solid fa-caret-up"></i></small> </h2>
											<p class="m-0 max-w-300 text-fade">Compare to last month</p>
										</div></div>
                    </div>
                    <div className="row">
  <div className="col-8">
    <div className="card chart-card p-4">
      <div className="box-header pb-0 no-border">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <h4 className="fw-bold fs-20 m-0">Ticket Reply Time</h4>
          </div>
          <div className="dropdown">
            <button
              className="btn btn-secondary btn-outline btn-md dropdown-toggle fw-bold"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Last Month
            </button>
            <div className="dropdown-menu dropdown-menu-end">
              <a className="dropdown-item" href="#">Last Week</a>
              <a className="dropdown-item" href="#">Last Year</a>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h5 className="m-0 text-primary">1,256</h5>
        </div>
      </div>
      <AreaChart
        width={700}
        height={250}
        data={areaData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorTime" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="day" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="time"
          stroke="#3b82f6"
          fillOpacity={1}
          fill="url(#colorTime)"
        />
      </AreaChart>
    </div>
  </div>


      <div className="col-4">
        <div className="card radial-chart-card p-3">
          <div className="card-title"><h5>Support Channel Stats</h5>
          <div className="dropdown">
            <button
              className="btn btn-secondary btn-outline btn-md dropdown-toggle fw-bold"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Last Month
            </button>
            <div className="dropdown-menu dropdown-menu-end">
              <a className="dropdown-item" href="#">Last Week</a>
              <a className="dropdown-item" href="#">Last Year</a>
            </div>
          </div>
          </div>
          <RadialBarChart width={300} height={300} cx="50%" cy="50%" innerRadius="50%" outerRadius="100%" data={radialData} startAngle={180} endAngle={0}>
            <RadialBar minAngle={15} background clockWise dataKey="value" />
            <Legend iconSize={10} layout="horizontal" verticalAlign="bottom" align="center" />
          </RadialBarChart>
        </div>
      </div>
    </div>
    <Chatbot />
  </div>

);

export default Dashboard;