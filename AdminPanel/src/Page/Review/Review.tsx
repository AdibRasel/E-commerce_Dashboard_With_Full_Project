import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DateAndTime from '../../Components/DateAndTime/DateAndTime';
import Pagination from '../../Components/Pagination/Pagination';
// import EditReviewModal from './EditReviewModal';
import { FaStar } from 'react-icons/fa';
import { Button, Table } from 'react-bootstrap';
import EditReview from './EditReview';

interface ReviewItem {
  id: number;
  productName: string;
  ProductID: string;
  productImage: string;
  review: string;
  rating: number;
  userName: string;
  date: string;
}

const dummyData: ReviewItem[] = [
  {
    id: 1,
    productName: 'Smart Watch',
    ProductID: 'adx5d48r9we5df41c2s',
    productImage: 'https://images-cdn.ubuy.co.in/653dca4638b3b6351c03b03e-smart-watch-for-android-and-iphone.jpg',
    review: 'Good quality and battery backup.',
    rating: 1,
    userName: 'Rasel',
    date: '2025-05-18',
  },
  {
    id: 2,
    productName: 'Bluetooth Speaker',
    ProductID: 'adx5d48r9we5df41c2s',
    productImage: 'https://images-cdn.ubuy.co.in/637d4285cd08060bb45cb0f3-bluetooth-pa-speaker-system-with.jpg',
    review: 'Loud and clear sound.',
    rating: 5,
    userName: 'Hossain',
    date: '2025-05-17',
  },
  {
    id: 3,
    productName: 'Wireless Mouse',
    ProductID: 'adx5d48r9we5df41c2s',
    productImage: 'https://m.media-amazon.com/images/I/61Mk3YqYHpL.jpg',
    review: 'Smooth and ergonomic.',
    rating: 3,
    userName: 'Jannat',
    date: '2025-05-16',
  },
  // আরও ডামি রিভিউ চাইলে এখানে যুক্ত করুন
];

const Review = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>(dummyData);
  const [paginationCurrentPage, setPaginationCurrentPage] = useState(1);
  const [paginationItemsPerPage, setPaginationItemsPerPage] = useState(5);
  const [showModal, setShowModal] = useState(false);
  const [selectedReview, setSelectedReview] = useState<ReviewItem | null>(null);

  const startIndex = (paginationCurrentPage - 1) * paginationItemsPerPage;
  const currentItems = reviews.slice(startIndex, startIndex + paginationItemsPerPage);

  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this review?');
    if (confirmDelete) {
      setReviews(reviews.filter((review) => review.id !== id));
    }
  };

  const handleEditClick = (review: ReviewItem) => {
    setSelectedReview(review);
    setShowModal(true);
  };

  const handleReviewUpdated = (updated: { id: number; review: string; rating: number }) => {
    setReviews((prev) =>
      prev.map((r) => (r.id === updated.id ? { ...r, review: updated.review, rating: updated.rating } : r))
    );
  };

  return (
    <>
      {/* Breadcrumb and Date */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/Review">Review</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Review
            </li>
          </ol>
        </nav>
        <div className="TodayDate">
          <DateAndTime />
        </div>
      </div>

      {/* Review Table */}
      <div className="table-responsive">
        <Table bordered hover>
          <thead style={{ backgroundColor: 'var(--ColorOne)', color: 'white' }}>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Product ID</th>
              <th>Review</th>
              <th>Rating</th>
              <th>User</th>
              <th>Date</th>
              <th style={{ textAlign: 'center' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((review) => (
              <tr key={review.id}>
                <td>
                  <img src={review.productImage} alt="product" width={60} />
                </td>
                <td>{review.productName}</td>
                <td>{review.ProductID}</td>
                <td>{review.review}</td>
                <td>
                  {[...Array(review.rating)].map((_, idx) => (
                    <FaStar key={idx} style={{ color: 'gold' }} />
                  ))}
                </td>
                <td>{review.userName}</td>
                <td>{review.date}</td>
                <td className="text-center">
                  <Button
                    size="sm"
                    className="me-2"
                    style={{ backgroundColor: 'var(--ColorTwo)', border: 'none' }}
                    onClick={() => handleEditClick(review)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => handleDelete(review.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Pagination */}
      <Pagination
        totalItems={reviews.length}
        itemsPerPage={paginationItemsPerPage}
        currentPage={paginationCurrentPage}
        onPageChange={setPaginationCurrentPage}
        onItemsPerPageChange={setPaginationItemsPerPage}
      />

      {/* Edit Modal */}
      {selectedReview && (
        <EditReview
          show={showModal}
          onClose={() => setShowModal(false)}
          initialReview={selectedReview}
          onReviewUpdated={handleReviewUpdated}
        />
      )}
    </>
  );
};

export default Review;
