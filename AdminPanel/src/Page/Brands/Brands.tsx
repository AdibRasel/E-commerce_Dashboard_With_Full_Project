import React from 'react'
import { Link } from 'react-router-dom'
import DateAndTime from '../../Components/DateAndTime/DateAndTime'

const Brands = () => {
    return (
        <>
            {/* ==================== Breadcrumb (Sub Menu Map) Start ====================== */}
            <div className="d-flex  justify-content-between">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={"/Brands"}> Brands</Link> </li>
                        <li className="breadcrumb-item active" aria-current="page">Brands</li>
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

export default Brands
