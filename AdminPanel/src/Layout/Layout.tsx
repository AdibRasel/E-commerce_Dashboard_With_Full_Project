import React, { useState } from 'react';
import Config from '../../Config.json';
import { Link } from 'react-router-dom';
import LongLogo from "../Assets/Logo/LongLogo.png"
import { FaBell } from "react-icons/fa6";
import { TbHelpSquareFilled } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import { MdDashboard } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { SiGooglepubsub } from "react-icons/si";
import { TbBrandSvelte } from "react-icons/tb";
import { VscGroupByRefType } from "react-icons/vsc";
import { TbLogin2 } from "react-icons/tb";
import { HiDocumentReport } from "react-icons/hi";
import { ImOffice } from "react-icons/im";
import { BiSolidOffer } from "react-icons/bi";
import { TfiLayoutSliderAlt } from "react-icons/tfi";
import { MdNotificationsActive } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdReviews } from "react-icons/md"


import { TbWorldBolt } from "react-icons/tb";
import { FaBars, FaTimes } from 'react-icons/fa';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  const [isOpen, setIsOpen] = useState(true);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>


      {/* ========================== Header Start ========================= */}
      <div className=" row align-items-center mx-0 gx-0 p-2 Header">



        {/* Slide Bar Trogol Button */}
        <div className="col-md-2 text-white">


          <div className="d-flex justify-content-between">
            <div className="">
              <Link to="/">
                <img src={LongLogo} style={{ height: "40px", }} alt="" />
              </Link>
            </div>
            <div className="">
              <span className="ToggleButton" onClick={toggleDrawer}>
                {isOpen ? <FaTimes /> : <FaBars />}
              </span>
            </div>
          </div>



          <div className={`sidebar-drawer text-start ${isOpen ? 'open' : ''}`}>


            <ul className="list-group list-group-flush">
              <Link to="/dashboard" className="text-decoration-none text-dark">
                <li className="list-group-item SideBarMenuItem">
                  <MdDashboard className="me-2" /> Dashboard
                </li>
              </Link>
              <Link to="/orders" className="text-decoration-none text-dark">
                <li className="list-group-item SideBarMenuItem">
                  <TbLogin2 className="me-2" /> Orders
                </li>
              </Link>
              <Link to="/report" className="text-decoration-none text-dark">
                <li className="list-group-item SideBarMenuItem">
                  <HiDocumentReport className="me-2" /> Report
                </li>
              </Link>
              <Link to="/office-assistant" className="text-decoration-none text-dark">
                <li className="list-group-item SideBarMenuItem">
                  <ImOffice className="me-2" /> Office Assistant
                </li>
              </Link>
            </ul>

            <hr className="my-1" />

            <ul className="list-group list-group-flush">
              <Link to="/product" className="text-decoration-none text-dark">
                <li className="list-group-item SideBarMenuItem">
                  <MdOutlineProductionQuantityLimits className="me-2" /> Product
                </li>
              </Link>
              <Link to="/product" className="text-decoration-none text-dark">
                <li className="list-group-item SideBarMenuItem">
                  <MdReviews className="me-2" /> Review
                </li>
              </Link>
              <Link to="/category" className="text-decoration-none text-dark">
                <li className="list-group-item SideBarMenuItem">
                  <MdCategory className="me-2" /> Category
                </li>
              </Link>
              <Link to="/sub-category" className="text-decoration-none text-dark">
                <li className="list-group-item SideBarMenuItem">
                  <SiGooglepubsub className="me-2" /> Sub Category
                </li>
              </Link>
              <Link to="/brands" className="text-decoration-none text-dark">
                <li className="list-group-item SideBarMenuItem">
                  <TbBrandSvelte className="me-2" /> Brands
                </li>
              </Link>
              <Link to="/variants" className="text-decoration-none text-dark">
                <li className="list-group-item SideBarMenuItem">
                  <VscGroupByRefType className="me-2" /> Variants
                </li>
              </Link>
              <Link to="/coupons" className="text-decoration-none text-dark">
                <li className="list-group-item SideBarMenuItem">
                  <BiSolidOffer className="me-2" /> Coupons
                </li>
              </Link>
              <Link to="/slider" className="text-decoration-none text-dark">
                <li className="list-group-item SideBarMenuItem">
                  <TfiLayoutSliderAlt className="me-2" /> Slider
                </li>
              </Link>
              <Link to="/notifications" className="text-decoration-none text-dark">
                <li className="list-group-item SideBarMenuItem">
                  <MdNotificationsActive className="me-2" /> Notifications
                </li>
              </Link>
              <Link to="/logout" className="text-decoration-none text-dark">
                <li className="list-group-item SideBarMenuItem">
                  <RiLogoutCircleLine className="me-2" /> Logout
                </li>
              </Link>
            </ul>
          </div>




        </div>







        {/* User Icon And Other side  */}
        <div className="col-md-10 UserIconSide">
          <div className="d-flex  justify-content-between align-items-center">
            <div className="HeaderLogo"> </div>

            <div className="HeaderIcon d-flex align-items-center gap-1">
              <Link to="/" className="position-relative">
                <FaBell size={20} />
                <span className="NotificationAlart">12</span>
              </Link>

              <Link to="/" className="position-relative">
                <MdReviews size={20} />
                <span className="NotificationAlart">10</span>
              </Link>

              <Link to="/" className='position-relative'>
                <TbWorldBolt size={20} />
                <span className="NotificationAlart">154</span>
              </Link>

              <Link to="/">
                <TbHelpSquareFilled size={20} />
              </Link>

              <Dropdown>
                <Dropdown.Toggle
                  as="div"
                  id=""
                  style={{ cursor: 'pointer' }}
                  className="d-inline"
                >
                  <FaRegUserCircle size={24} />
                </Dropdown.Toggle>

                <Dropdown.Menu className='p-2'>
                  <Dropdown.Item>
                    <Link to="/">
                      <h6 className='m-0 HeaderUserTitle'>Profile</h6>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/">
                      <h6 className='m-0 HeaderUserTitle'>Settings</h6>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/">
                      <h6 className='m-0 HeaderUserTitle'>Logout</h6>
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>














          </div>
        </div>
      </div>
      {/* ========================== Header End ========================= */}








      {/* ========================== Main Content Start ========================= */}
      <div className={`TrogolContent ${isOpen ? 'TrogolContentOpen' : ''}`}>
        <div className="MainContent" style={{ paddingTop: "50px" }}>
          <div style={{ padding: "10px" }}>
            {children}
          </div>
        </div>
      </div>
      {/* ========================== Main Content End ========================= */}





    </>
  );
};

export default Layout;
