import React from 'react'
import Container from '../Components/Layout/Container'
import reviewspa from "../assets/reviewspa.jpeg";

const reviewsData = [
  {
    id: 1,
    name: "Sarah Ahmed",
    location: "Gulshan, Dhaka",
    rating: 5,
    text: "Absolutely amazing experience! The ambiance is so calming and the therapists are highly skilled. I tried the hot oil massage and left feeling completely rejuvenated. Highly recommend Silken Touch Spa!",
    date: "March 2025",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    name: "Rafiqul Islam",
    location: "Baridhara, Dhaka",
    rating: 5,
    text: "One of the best spas in Gulshan. Professional staff, clean environment, and authentic treatments. The deep tissue massage really helped with my back pain.",
    date: "February 2025",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
 
]

const StarRating = ({ rating, color }) => (
  <div className="flex gap-1 text-base md:text-xl" style={{ color }}>
    {[...Array(5)].map((_, i) => (
      <span key={i}>
        {i < rating ? "★" : "☆"}
      </span>
    ))}
  </div>
)

function Reviews() {
  const primaryColor = "#43464E"

  return (
    <div id="review" className="font-sans text-gray-800">

      {/* Hero Section */}
      <div
        className="py-14 md:py-20 text-white text-center px-4 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${reviewspa})`,
          backgroundColor: primaryColor 
        }}
      >
        <Container>
          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base md:text-xl max-w-2xl mx-auto">
            Real experiences from our valued guests — your wellness journey inspires us.
          </p>
        </Container>
      </div>

      <div className="py-12 md:py-20 bg-[#D5BADB] px-4 md:px-0">
        <Container>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">

          {reviewsData.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 md:p-6 border border-gray-100"
            >

              {/* USER INFO */}
              <div className="flex items-center gap-3 md:gap-4 mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-bold text-base md:text-lg text-gray-800">
                    {review.name}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500">
                    {review.location}
                  </p>
                </div>
              </div>

              {/* RATING */}
              <div className="flex justify-between items-center mb-3">
                <StarRating rating={review.rating} color={primaryColor} />
                <span className="text-xs md:text-sm text-gray-400">
                  {review.date}
                </span>
              </div>

              {/* TEXT */}
              <p className="text-gray-700 text-sm md:text-base leading-relaxed italic">
                "{review.text}"
              </p>

              {/* BADGE */}
              <div className="mt-4 text-xs md:text-sm flex items-center gap-2" style={{ color: primaryColor }}>
                ✓ Verified Customer
              </div>

            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-10 md:mt-12">
          <p className="text-gray-500 text-xs md:text-sm">
            Share your experience and help others discover tranquility.
          </p>
        </div>

      </Container>
      </div>
    </div>
  )
}

export default Reviews