import React from 'react'
import Container from '../Components/Layout/Container'

// Sample review data – replace with actual reviews from your customers
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
    text: "One of the best spas in Gulshan. Professional staff, clean environment, and authentic treatments. The deep tissue massage really helped with my back pain. Will definitely come back.",
    date: "February 2025",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Tahmina Khan",
    location: "Banani, Dhaka",
    rating: 4,
    text: "Lovely spa with great service. The body scrub and facial were wonderful. Only small issue was the waiting time, but overall a fantastic experience. The staff is very friendly.",
    date: "January 2025",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 4,
    name: "Michael D'Souza",
    location: "Gulshan-2, Dhaka",
    rating: 5,
    text: "I've been to many spas around the world, and Silken Touch stands out for its attention to detail and genuine care. The two girls massage package was incredible. Pure bliss!",
    date: "December 2024",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  }
]

// Star rating component
const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-xl">
          {i < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  )
}

function Reviews() {
  const primaryColor = "#4A6741"

  return (
    <div id='review' className="py-20 bg-gray-50">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 mx-auto mt-4 mb-6" style={{ backgroundColor: primaryColor }}></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Real experiences from our valued guests — your wellness journey inspires us.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {reviewsData.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border border-gray-100"
            >
              {/* Review Header */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>

              {/* Rating & Date */}
              <div className="flex justify-between items-center mb-3">
                <StarRating rating={review.rating} />
                <span className="text-sm text-gray-400">{review.date}</span>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed italic">
                "{review.text}"
              </p>

              {/* Verified Badge (optional) */}
              <div className="mt-4 flex items-center gap-2">
                <span className="text-green-600 text-sm">✓ Verified Customer</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm mt-3">
            Share your experience and help others discover tranquility.
          </p>
        </div>
      </Container>
    </div>
  )
}

export default Reviews
