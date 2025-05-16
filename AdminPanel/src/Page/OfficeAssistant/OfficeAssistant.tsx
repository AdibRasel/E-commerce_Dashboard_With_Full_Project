import React from 'react'
import { Link } from 'react-router-dom'
import DateAndTime from '../../Components/DateAndTime/DateAndTime'

const OfficeAssistant = () => {
    return (
        <>
            {/* ==================== Breadcrumb (Sub Menu Map) Start ====================== */}
            <div className="d-flex  justify-content-between">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={"/OfficeAssistant"}> Office Assistant</Link> </li>
                        <li className="breadcrumb-item active" aria-current="page">Office Assistant</li>
                    </ol>
                </nav>
         <div className="TodayDate">
          <DateAndTime />
        </div>
            </div>
            {/* ==================== Breadcrumb (Sub Menu Map) End ====================== */}






        </>
    )
}

export default OfficeAssistant
