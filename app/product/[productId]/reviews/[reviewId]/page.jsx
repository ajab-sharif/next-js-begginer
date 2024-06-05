import { notFound } from "next/navigation";

function ReviewDetail({ params }) {
  if (params.reviewId > 1000) {
    notFound();
  }
  return (
    <div>
      review {params.reviewId} for product {params.productId}
    </div>
  );
}

export default ReviewDetail;
