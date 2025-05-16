import React from 'react'
import { Link } from 'react-router-dom'

const Report = () => {
    return (
        <>
            {/* ==================== Breadcrumb (Sub Menu Map) Start ====================== */}
            <div className="d-flex  justify-content-between">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={"/Report"}> Report</Link> </li>
                        <li className="breadcrumb-item active" aria-current="page">Report</li>
                    </ol>
                </nav>
                <div className="TodayDate">
                    <span className="text-end">Today: {new Date().toLocaleDateString()}</span> &nbsp; || &nbsp;
                    <span className="text-end">Time: {new Date().toLocaleTimeString()}</span>
                </div>
            </div>
            {/* ==================== Breadcrumb (Sub Menu Map) End ====================== */}






        </>
    )
}

export default Report
