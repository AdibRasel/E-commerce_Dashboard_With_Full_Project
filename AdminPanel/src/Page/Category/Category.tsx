import React from 'react'
import { Link } from 'react-router-dom'
import DateAndTime from '../../Components/DateAndTime/DateAndTime'

const Category = () => {
    return (
        <>
            {/* ==================== Breadcrumb (Sub Menu Map) Start ====================== */}
            <div className="d-flex  justify-content-between">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={"/Category"}> Category</Link> </li>
                        <li className="breadcrumb-item active" aria-current="page">Category</li>
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

export default Category
