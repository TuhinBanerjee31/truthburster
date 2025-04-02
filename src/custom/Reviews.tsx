import { useState, useEffect } from "react";
import { Star, ThumbsUp, ChevronDown, MessageCircle } from "lucide-react";
import { dataType, Review } from "../public";

type CompanyProps = {
  data: dataType;
};

const Reviews = ({ data }: CompanyProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    setReviews(data.reviews);
  }, []);

  const [selectedRating, setSelectedRating] = useState(0);
  const [sortBy, setSortBy] = useState<"newest" | "highest" | "lowest">(
    "newest"
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleReviews, setVisibleReviews] = useState(2);

  const renderStars = (rating: number, interactive = false) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        } ${interactive ? "cursor-pointer" : ""}`}
        onClick={() => interactive && setSelectedRating(index + 1)}
      />
    ));
  };

  const toggleHelpful = (reviewId: string) => {
    setReviews(
      reviews.map((review) => {
        if (review.id === reviewId) {
          return {
            ...review,
            helpful: review.isHelpful ? review.helpful - 1 : review.helpful + 1,
            isHelpful: !review.isHelpful,
          };
        }
        return review;
      })
    );
  };

  const toggleComments = (reviewId: string) => {
    setReviews(
      reviews.map((review) => {
        if (review.id === reviewId) {
          return {
            ...review,
            showComments: !review.showComments,
          };
        }
        return review;
      })
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const sortReviews = (reviews: Review[]) => {
    const sortedReviews = [...reviews];
    switch (sortBy) {
      case "newest":
        return sortedReviews.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
      case "highest":
        return sortedReviews.sort((a, b) => b.rating - a.rating);
      case "lowest":
        return sortedReviews.sort((a, b) => a.rating - b.rating);
      default:
        return sortedReviews;
    }
  };

  const filteredReviews = sortReviews(reviews)
    .filter(
      (review) =>
        review.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        review.author.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, visibleReviews);

  return (
    <div className="min-h-screen bg-[rgb(253,251,246)] px-4 sm:px-6 font-Rubik py-10">
      <div className="max-w-screen-lg mx-auto bg-white rounded-lg shadow w-full">
        <div className="p-4 sm:p-6">
          <h2 className="text-base sm:text-lg font-semibold mb-4">
            How would you rate {data.title}?
          </h2>

          {/* Rating Selection */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {renderStars(selectedRating, true)}
          </div>

          {/* Reviews Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <h3 className="text-base sm:text-lg font-semibold">
              Reviews ({reviews.length})
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search reviews..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-auto px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                className="w-full sm:w-auto px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value as "newest" | "highest" | "lowest")
                }
              >
                <option value="newest">Newest</option>
                <option value="highest">Highest Rated</option>
                <option value="lowest">Lowest Rated</option>
              </select>
            </div>
          </div>

          {/* Reviews List */}
          <div className="grid gap-6">
            {filteredReviews.map((review) => (
              <div key={review.id} className="border-b border-gray-100 pb-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">
                        {review.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold">{review.author}</div>
                      <div className="flex items-center gap-2">
                        <div className="flex">{renderStars(review.rating)}</div>
                        <span className="text-gray-500 text-sm">
                          {formatDate(review.date)}
                        </span>
                        {review.verified && (
                          <span className="text-green-600 text-sm">
                            ✓ Verified
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical className="w-5 h-5" />
                  </button> */}
                </div>

                <p className="mt-3 text-gray-700">{review.content}</p>

                <div className="mt-4 flex flex-wrap gap-4">
                  <button
                    onClick={() => toggleComments(review.id)}
                    className="flex items-center gap-2 px-3 py-2 w-full sm:w-auto border border-gray-200 rounded-lg text-sm hover:bg-gray-50"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Comments ({review.comments.length})</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        review.showComments ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <button
                    onClick={() => toggleHelpful(review.id)}
                    className={`flex items-center gap-2 text-sm w-full sm:w-auto ${
                      review.isHelpful ? "text-blue-600" : "text-gray-500"
                    } hover:text-blue-700`}
                  >
                    <ThumbsUp
                      className={`w-4 h-4 ${
                        review.isHelpful ? "fill-current" : ""
                      }`}
                    />
                    <span>Helpful ({review.helpful})</span>
                  </button>
                </div>

                {/* Comments Section */}
                {review.showComments && (
                  <div className="mt-4 pl-6">
                    {review.comments.map((comment) => (
                      <div
                        key={comment.id}
                        className="bg-gray-50 rounded-lg p-4 mb-2"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div className="font-semibold text-sm">
                            {comment.author}
                          </div>
                          <span className="text-gray-500 text-xs">
                            {formatDate(comment.date)}
                          </span>
                        </div>
                        <p className="text-sm text-gray-700">
                          {comment.content}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {visibleReviews < reviews.length && (
            <button
              onClick={() => setVisibleReviews((prev) => prev + 2)}
              className="mt-6 text-blue-600 font-medium hover:text-blue-700 w-full sm:w-auto"
            >
              View More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
