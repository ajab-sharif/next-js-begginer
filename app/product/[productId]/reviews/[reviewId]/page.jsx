function ReviewDetail({ params }) {
  return (
    <div>
      review {params.reviewId} for product {params.productId}
    </div>
  );
}

export default ReviewDetail;
