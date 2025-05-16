import { useState } from "react";
import { Link } from "react-router-dom";


import { BsStack, BsFillCalendar2WeekFill } from "react-icons/bs";
// import { BsFillCalendar2WeekFill  } from "react-icons/hi";

import { FaShoppingCart, FaClock, FaCog, FaTruck } from "react-icons/fa";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import DateAndTime from "../../Components/DateAndTime/DateAndTime";


function Dashboard() {


  // গত মাসের প্রোডাক্ট অর্ডারের ডেটা
  const productOrderData = [
    { date: "May 1", orders: 20 },
    { date: "May 5", orders: 40 },
    { date: "May 10", orders: 70 },
    { date: "May 15", orders: 50 },
    { date: "May 20", orders: 90 },
    { date: "May 25", orders: 110 },
    { date: "May 30", orders: 130 },
  ];

  // গত 7 দিনের ভিজিটর ডেটা
  const visitorData = [
    { date: "May 1", visitors: 100 },
    { date: "May 2", visitors: 150 },
    { date: "May 3", visitors: 120 },
    { date: "May 4", visitors: 180 },
    { date: "May 5", visitors: 160 },
    { date: "May 6", visitors: 220 },
    { date: "May 7", visitors: 200 },
  ];

  return <>

    {/* ==================== Breadcrumb (Sub Menu Map) Start ====================== */}
    <div className="d-flex justify-content-between">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to={"/Dashboard"}> Dashboard</Link> </li>
          <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
        </ol>
      </nav>
        <div className="TodayDate">
          <DateAndTime />
        </div>
    </div>
    {/* ==================== Breadcrumb (Sub Menu Map) End ====================== */}





    {/* ==================== Today Overview Start ====================== */}
    <div className="row mx-0 gx-4 gy-4">
      <div className="col-md-3 TodayOverview1">
        <Link to="/Orders">
        <div className="card text-center">
          <div className="card-body">
            <BsStack className="mb-2" style={{ fontSize: "30px" }} />
            <h5 className="card-title">Today Orders</h5>
            <p className="card-text">100</p>
          </div>
        </div>
        </Link>
      </div>
      <div className="col-md-3 TodayOverview2">
        <Link to="/Orders">
          <div className="card text-center">
            <div className="card-body">
              <BsStack className="mb-2" style={{ fontSize: "30px" }} />
              <h5 className="card-title">Yesterday's order</h5>
              <p className="card-text">50</p>
            </div>
          </div>
        </Link>

      </div>
      <div className="col-md-3 TodayOverview3">
        <Link to="/Report">
        <div className="card text-center">
          <div className="card-body">
            <BsFillCalendar2WeekFill className="mb-2" style={{ fontSize: "30px" }} />
            <h5 className="card-title">Last Month's Sales</h5>
            <p className="card-text">5000/-</p>
          </div>
        </div>
        </Link>
      </div>
      <div className="col-md-3 TodayOverview4">
        <Link to="/Expenses">
        <div className="card text-center">
          <div className="card-body">
            <BsFillCalendar2WeekFill className="mb-2" style={{ fontSize: "30px" }} />
            <h5 className="card-title">Last Month's Expenses </h5>
            <p className="card-text">200/-</p>
          </div>
        </div>
        </Link>
      </div>
    </div>
    {/* ==================== Today Overview Edn ====================== */}










    {/* ==================== Order Overview Start ====================== */}
    <div className="row mx-0 gx-4 gy-4 mt-2">

      {/* Total Orders */}
      <div className="col-md-6">
        <div className="d-flex align-items-center p-3 shadow rounded bg-white">
          <div className="me-4">
            <FaShoppingCart size={40} color="#213448" />
          </div>
          <div>
            <h5 className="mb-1">Total Orders</h5>
            <h3 className="fw-bold">999</h3>
          </div>
        </div>
      </div>

      {/* Orders Pending */}
      <div className="col-md-6">
        <div className="d-flex align-items-center p-3 shadow rounded bg-white">
          <div className="me-4">
            <FaClock size={40} color="#059669" />
          </div>
          <div>
            <h5 className="mb-1">Orders Pending</h5>
            <h3 className="fw-bold">315</h3>
          </div>
        </div>
      </div>

      {/* Orders Processing */}
      <div className="col-md-6">
        <div className="d-flex align-items-center p-3 shadow rounded bg-white">
          <div className="me-4">
            <FaCog size={40} color="#314DA7" />
          </div>
          <div>
            <h5 className="mb-1">Orders Processing</h5>
            <h3 className="fw-bold">137</h3>
          </div>
        </div>
      </div>

      {/* Orders Delivered */}
      <div className="col-md-6">
        <div className="d-flex align-items-center p-3 shadow rounded bg-white">
          <div className="me-4">
            <FaTruck size={40} color="#0891B2" />
          </div>
          <div>
            <h5 className="mb-1">Orders Delivered</h5>
            <h3 className="fw-bold">--</h3>
          </div>
        </div>
      </div>

    </div>
    {/* ==================== Order Overview Edn ====================== */}






    {/* ========================= Visitor Overview Start ========================= */}
    <div className="row mx-0 gx-4 gy-4 mt-4">
      {/* Product Order Chart */}
      <div className="col-md-6 mb-4">
        <div className="card p-3 shadow-sm">
          <h5 className="text-center mb-3">📦 Last Month Product Orders</h5>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={productOrderData}>
              <CartesianGrid stroke="#e0e0e0" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="orders"
                stroke="#ff5733"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Visitor Chart */}
      <div id="VisitorOverview" className="col-md-6 mb-4">
        <div className="card p-3 shadow-sm">
          <h5 className="text-center mb-3">👥 Visitor Overview</h5>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={visitorData}>
              <CartesianGrid stroke="#e0e0e0" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="visitors"
                stroke="#007bff"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
    {/* ========================= Visitor Overview End ========================= */}







  </>
}

export default Dashboard;
