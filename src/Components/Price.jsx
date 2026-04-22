import React from "react";
import Container from "../Components/Layout/Container";

const pricingData = [
  {
    category: "Dry Massage Services",
    services: [
      { duration: "60 Minutes Happy Ending", price: "BDT 6000" },
      { duration: "90 Minutes Happy Ending", price: "BDT 8000" },
      { duration: "120 Minutes Happy Ending", price: "BDT 11000" },
    ],
  },
  {
    category: "Oil Massage Services",
    services: [
      { duration: "60 Minutes Happy Ending", price: "BDT 6000" },
      { duration: "90 Minutes Happy Ending", price: "BDT 8000" },
      { duration: "120 Minutes Happy Ending", price: "BDT 11000" },
    ],
  },
  {
    category: "Hot Oil Massage Services",
    services: [
      { duration: "60 Minutes Happy Ending", price: "BDT 6000" },
      { duration: "90 Minutes Happy Ending", price: "BDT 8500" },
      { duration: "120 Minutes Happy Ending", price: "BDT 12000" },
    ],
  },
  {
    category: "Deep Tissue Massage",
    services: [
      { duration: "60 Minutes Happy Ending", price: "BDT 6000" },
      { duration: "90 Minutes Happy Ending", price: "BDT 8500" },
      { duration: "120 Minutes Happy Ending", price: "BDT 10500" },
    ],
  },
  {
    category: "Nuru Massage Services",
    services: [
      { duration: "60 Minutes Happy Ending", price: "BDT 8500" },
      { duration: "90 Minutes Happy Ending", price: "BDT 10000" },
      { duration: "120 Minutes Happy Ending", price: "BDT 15000" },
    ],
  },
  {
    category: "Body To Body Massage",
    services: [
      { duration: "60 Minutes Happy Ending", price: "BDT 8500" },
      { duration: "90 Minutes Happy Ending", price: "BDT 12500" },
      { duration: "120 Minutes Happy Ending", price: "BDT 16000" },
    ],
  },
  {
    category: "Two Girls Massage",
    services: [
      { duration: "60 Minutes Happy Ending", price: "BDT 15000" },
      { duration: "90 Minutes Happy Ending", price: "BDT 20000" },
      { duration: "120 Minutes Happy Ending", price: "BDT 25000" },
    ],
  },
  {
    category: "Body Scrub Massage",
    services: [
      { duration: "60 Minutes Happy Ending", price: "BDT 15000" },
      { duration: "90 Minutes Happy Ending", price: "BDT 20000" },
      { duration: "120 Minutes Happy Ending", price: "BDT 25000" },
    ],
  },
];

function Price() {
  const primaryColor = "#43464E";

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div id="price" className="font-sans text-gray-800">

      {/* Hero */}
      <div
        className="py-14 md:py-20 text-white text-center px-4"
        style={{ backgroundColor: "#43464E" }}
      >
        <Container>
          <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">
            Our Pricing
          </h1>
          <p className="text-base md:text-xl max-w-2xl mx-auto">
            Transparent, affordable luxury — choose the treatment that fits your needs.
          </p>
        </Container>
      </div>

      {/* Pricing */}
      <div className="py-12 md:py-20 bg-[#D5BADB] px-4 md:px-0">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

            {pricingData.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F0F8FF] rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <div
                  className="px-5 md:px-6 py-4"
                  style={{ backgroundColor: primaryColor, color: "white" }}
                >
                  <h2 className="text-lg md:text-2xl font-bold">
                    {item.category}
                  </h2>
                </div>

                <div className="p-4 md:p-6">
                  {item.services.map((service, sidx) => (
                    <div
                      key={sidx}
                      className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0"
                    >
                      <span className="text-gray-700 text-sm md:text-base font-medium">
                        {service.duration}
                      </span>
                      <span
                        className="font-bold text-base md:text-lg"
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
          <div className="mt-10 md:mt-12 text-center text-stone-600 text-xs md:text-sm px-2">
            <p>* All prices are inclusive of taxes and service charges.</p>
            <p className="mt-1">
              Please contact us for special packages and loyalty discounts.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-8 md:mt-10">
            <button
              onClick={() => handleScroll("booking")}
              className="text-white font-semibold px-6 md:px-8 py-3 rounded-full transition hover:opacity-90 w-full sm:w-auto"
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