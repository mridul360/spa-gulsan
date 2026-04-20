import React from "react";
import Container from "../Components/Layout/Container";

// Pricing data
const pricingData = [
  {
    category: "Dry Massage Services",
    services: [
      { duration: "60 Minutes", price: "BDT 6000" },
      { duration: "90 Minutes", price: "BDT 8000" },
      { duration: "120 Minutes", price: "BDT 11000" },
    ],
  },
  {
    category: "Oil Massage Services",
    services: [
      { duration: "60 Minutes", price: "BDT 6000" },
      { duration: "90 Minutes", price: "BDT 8000" },
      { duration: "120 Minutes", price: "BDT 11000" },
    ],
  },
  {
    category: "Hot Oil Massage Services",
    services: [
      { duration: "60 Minutes", price: "BDT 6000" },
      { duration: "90 Minutes", price: "BDT 8500" },
      { duration: "120 Minutes", price: "BDT 12000" },
    ],
  },
  {
    category: "Deep Tissue Massage",
    services: [
      { duration: "60 Minutes", price: "BDT 6000" },
      { duration: "90 Minutes", price: "BDT 8500" },
      { duration: "120 Minutes", price: "BDT 10500" },
    ],
  },
  {
    category: "Nuru Massage Services",
    services: [
      { duration: "60 Minutes", price: "BDT 8500" },
      { duration: "90 Minutes", price: "BDT 10000" },
      { duration: "120 Minutes", price: "BDT 15000" },
    ],
  },
  {
    category: "Body To Body Massage",
    services: [
      { duration: "60 Minutes", price: "BDT 8500" },
      { duration: "90 Minutes", price: "BDT 12500" },
      { duration: "120 Minutes", price: "BDT 16000" },
    ],
  },
  {
    category: "Two Girls Massage",
    services: [
      { duration: "60 Minutes", price: "BDT 15000" },
      { duration: "90 Minutes", price: "BDT 20000" },
      { duration: "120 Minutes", price: "BDT 25000" },
    ],
  },
  {
    category: "Body Scrub Massage",
    services: [
      { duration: "60 Minutes", price: "BDT 15000" },
      { duration: "90 Minutes", price: "BDT 20000" },
      { duration: "120 Minutes", price: "BDT 25000" },
    ],
  },
];

function Price() {
  const primaryColor = "#4A6741";

  // Smooth scroll function
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div id="price" className="font-sans text-gray-800">
      
      {/* Hero Section */}
      <div
        className="py-20 text-white text-center"
        style={{ backgroundColor: primaryColor }}
      >
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Pricing
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Transparent, affordable luxury — choose the treatment that fits your needs.
          </p>
        </Container>
      </div>

      {/* Pricing Grid */}
      <div className="py-20 bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {pricingData.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                {/* Category Header */}
                <div
                  className="px-6 py-4"
                  style={{ backgroundColor: primaryColor, color: "white" }}
                >
                  <h2 className="text-2xl font-bold">{item.category}</h2>
                </div>

                {/* Services */}
                <div className="p-6">
                  {item.services.map((service, sidx) => (
                    <div
                      key={sidx}
                      className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0"
                    >
                      <span className="text-gray-700 font-medium">
                        {service.duration}
                      </span>
                      <span
                        className="font-bold text-lg"
                        style={{ color: primaryColor }}
                      >
                        {service.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-12 text-center text-gray-500 text-sm">
            <p>* All prices are inclusive of taxes and service charges.</p>
            <p className="mt-1">
              Please contact us for special packages and loyalty discounts.
            </p>
          </div>

          {/* CTA Button (FIXED) */}
          <div className="text-center mt-10">
            <button
              onClick={() => handleScroll("booking")}
              className="text-white font-semibold px-8 py-3 rounded-full transition hover:opacity-90"
              style={{ backgroundColor: primaryColor }}
            >
              Book Your Session Now
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Price;