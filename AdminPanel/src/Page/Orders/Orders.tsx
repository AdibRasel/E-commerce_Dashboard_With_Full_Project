import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { FiRefreshCw } from "react-icons/fi";
import DateAndTime from "../../Components/DateAndTime/DateAndTime";
import { FaEye } from 'react-icons/fa';


const Orders = () => {

  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleReload = () => {
    if (isRefreshing) return; // prevent multiple clicks
    setIsRefreshing(true);

    // Simulate refresh logic (like re-fetching data)
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000); // 1 second animation
  };

  const orders = [
    {
      title: 'Wireless Headphones',
      products: [
        'https://cdn.moglix.com/p/rooElu6NzdZnb-large.jpg',
        'https://m.media-amazon.com/images/I/61GtRDZdhVL.jpg',
        'https://assets.nikshanonline.com/wp-content/uploads/2023/10/Mobile-Accessories.png',

      ],
      qty: 2,
      userName: 'Rasel Hossain',
      userNumber: '01934544352',
      paymentStatus: 'Paid',
      orderStatus: 'Pending',
      date: 'May 1, 2025',
      total: '$120',
      badgeClassPayment: 'bg-success',
      badgeClassOrder: 'bg-warning',
    },
    {
      title: 'Smart Watch Combo',
      products: [
        'https://cdn.moglix.com/p/rooElu6NzdZnb-large.jpg',
        'https://assets.nikshanonline.com/wp-content/uploads/2023/10/Mobile-Accessories.png',
        'https://m.media-amazon.com/images/I/61GtRDZdhVL.jpg',

      ],
      qty: 2,
      userName: 'Jannatul Marye',
      userNumber: '01780000000',
      paymentStatus: 'Paid',
      orderStatus: 'Processing',
      date: 'May 5, 2025',
      total: '$250',
      badgeClassPayment: 'bg-success',
      badgeClassOrder: 'bg-primary',
    },
    {
      title: 'Bluetooth Speaker',
      products: [
        'https://assets.nikshanonline.com/wp-content/uploads/2023/10/Mobile-Accessories.png',
        'https://cdn.moglix.com/p/rooElu6NzdZnb-large.jpg',
        'https://m.media-amazon.com/images/I/61GtRDZdhVL.jpg',

      ],
      qty: 2,
      userName: 'Durjoy Ahmed',
      userNumber: '01999999999',
      paymentStatus: 'Cash On Delivery',
      orderStatus: 'Delivered',
      date: 'May 10, 2025',
      total: '$75',
      badgeClassPayment: 'bg-secondary',
      badgeClassOrder: 'bg-success',
    },
  ];

  const [modalImage, setModalImage] = useState<string | null>(null);
  return (

    <>

      {/* ==================== Breadcrumb (Sub Menu Map) Start ====================== */}
      <div className="d-flex  justify-content-between">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to={"/Orders"}> Orders</Link> </li>
            <li className="breadcrumb-item active" aria-current="page">New Orders</li>
          </ol>
        </nav>
        <div className="TodayDate">
          <DateAndTime />
        </div>
      </div>
      {/* ==================== Breadcrumb (Sub Menu Map) End ====================== */}



      {/* ==================== Main Content Start ====================== */}
      <div className="card">


        {/* ==================== Orders Menu Start ====================== */}
        <nav className="nav SubMenu px-2 py-2">
          <div className="container-fluid">
            <div className="d-flex flex-wrap justify-content-between align-items-center">

              {/* Left Side Menu Items */}
              <div className="SubmenuLeft d-flex flex-wrap gap-2">
                <Link className="nav-link SubMenuItem active" to={"/Orders"}>
                  New Orders <span className="badgeBox">10</span>
                </Link>
                <Link className="nav-link SubMenuItem" to={"/OrdersPending"}>
                  Pending <span className="badgeBox">10</span>
                </Link>
                <Link className="nav-link SubMenuItem" to={"/OrdersProcessing"}>
                  Processing <span className="badgeBox">10</span>
                </Link>
                <Link className="nav-link SubMenuItem" to={"/OrdersDelivered"}>
                  Delivered <span className="badgeBox">10</span>
                </Link>
              </div>

              {/* Right Side Reload Icon */}
              <div className="SubmenuRight mt-2 mt-sm-0">
                <button className="reload-btn" onClick={handleReload}>
                  <FiRefreshCw className={isRefreshing ? "spin-icon" : ""} size={20} />
                </button>
              </div>

            </div>
          </div>
        </nav>
        {/* ==================== Orders Menu Start ====================== */}






        <>
          <div className="card-body">
            <h5 className="card-title">Manage Order</h5>

            <div className="table-responsive">
              <table className="table table-bordered table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Product Title</th>
                    <th>Product Images</th>
                    <th>User Name</th>
                    <th>User Number</th>
                    <th>Payment Status</th>
                    <th>Order Status</th>
                    <th>Date</th>
                    <th>Qty</th> {/* ✅ New Column */}
                    <th>Total</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, idx) => (
                    <tr key={idx}>
                      <td>{order.title}</td>
                      <td>
                        <div className="d-flex flex-wrap gap-2">
                          {order.products.map((img, imgIdx) => (
                            <img
                              key={imgIdx}
                              src={img}
                              alt={`Product ${imgIdx + 1}`}
                              className="img-fluid"
                              style={{
                                width: 40,
                                height: 40,
                                objectFit: 'cover',
                                borderRadius: '5px',
                                cursor: 'pointer',
                              }}
                              onClick={() => setModalImage(img)}
                            />
                          ))}
                        </div>
                      </td>
                      <td>{order.userName}</td>
                      <td>{order.userNumber}</td>
                      <td>
                        <span className={`badge ${order.badgeClassPayment}`}>
                          {order.paymentStatus}
                        </span>
                      </td>
                      <td>
                        <span className={`badge ${order.badgeClassOrder}`}>
                          {order.orderStatus}
                        </span>
                      </td>
                      <td>{order.date}</td>
                      <td>{order.qty}</td> {/* ✅ Show Quantity */}
                      <td>{order.total}</td>
                      <td>
                        <button
                          className="ActionButton d-flex align-items-center gap-1"
                          onClick={() => alert(`Viewing ${order.title}`)}
                        >
                          <FaEye />
                          See
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          </div>

          {/* Modal for full-size image */}
          {modalImage && (
            <div
              onClick={() => setModalImage(null)}
              style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(0,0,0,0.7)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1050,
                cursor: 'pointer',
              }}
            >
              <img
                src={modalImage}
                alt="Large view"
                style={{
                  maxWidth: '90%',
                  maxHeight: '90%',
                  borderRadius: '10px',
                  boxShadow: '0 0 20px rgba(255,255,255,0.5)',
                }}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}
        </>




      </div>
      {/* ==================== Main Content Edn ====================== */}

    </>
  )
}

export default Orders
