import React, { useState } from "react"
import Container from "../Components/Layout/Container"

const allPackages = [
  { category: "Dry Massage",         duration: "60 Min",  price: 6000  },
  { category: "Dry Massage",         duration: "90 Min",  price: 8000  },
  { category: "Dry Massage",         duration: "120 Min", price: 11000 },
  { category: "Oil Massage",         duration: "60 Min",  price: 6000  },
  { category: "Oil Massage",         duration: "90 Min",  price: 8000  },
  { category: "Oil Massage",         duration: "120 Min", price: 11000 },
  { category: "Hot Oil Massage",     duration: "60 Min",  price: 6000  },
  { category: "Hot Oil Massage",     duration: "90 Min",  price: 8500  },
  { category: "Hot Oil Massage",     duration: "120 Min", price: 12000 },
  { category: "Deep Tissue Massage", duration: "60 Min",  price: 6000  },
  { category: "Deep Tissue Massage", duration: "90 Min",  price: 8500  },
  { category: "Deep Tissue Massage", duration: "120 Min", price: 10500 },
  { category: "Nuru Massage",        duration: "60 Min",  price: 8500  },
  { category: "Nuru Massage",        duration: "90 Min",  price: 10000 },
  { category: "Nuru Massage",        duration: "120 Min", price: 15000 },
  { category: "Body To Body Massage",duration: "60 Min",  price: 8500  },
  { category: "Body To Body Massage",duration: "90 Min",  price: 12500 },
  { category: "Body To Body Massage",duration: "120 Min", price: 16000 },
  { category: "Two Girls Massage",   duration: "60 Min",  price: 15000 },
  { category: "Two Girls Massage",   duration: "90 Min",  price: 20000 },
  { category: "Two Girls Massage",   duration: "120 Min", price: 25000 },
  { category: "Body Scrub Massage",  duration: "60 Min",  price: 15000 },
  { category: "Body Scrub Massage",  duration: "90 Min",  price: 20000 },
  { category: "Body Scrub Massage",  duration: "120 Min", price: 25000 },
]

const groupedPackages = allPackages.reduce((acc, pkg) => {
  if (!acc[pkg.category]) acc[pkg.category] = []
  acc[pkg.category].push(pkg)
  return acc
}, {})

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
  "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM"
]

const primaryColor = "#43464E"

function Book() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState({
    package: null,
    date: "",
    time: "",
    name: "",
    phone: "",
    notes: ""
  })

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value })
  const next = () => setStep(s => s + 1)
  const back = () => setStep(s => s - 1)

  const isStep1Valid = !!data.package
  const isStep2Valid = data.date && data.time
  const isStep3Valid = data.name && data.phone

  const handleSubmit = () => {
    const message = `
*New Booking — Zenvy Spa Gulshan*

💆 Package   : ${data.package.category}
⏱ Duration   : ${data.package.duration}
💰 Total Bill : BDT ${data.package.price.toLocaleString()}

📅 Date  : ${data.date}
🕐 Time  : ${data.time}
👤 Name  : ${data.name}
📞 Phone : ${data.phone}
📝 Notes : ${data.notes || "N/A"}
    `
    window.open(`https://wa.me/8801863905937?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <div id="booking" className="py-12 md:py-20 bg-[#D4BADA]">
      <Container>

        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-[#43464E] font-semibold text-sm tracking-[0.2em] uppercase">
            Gulshan Wellness Hub
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#2d2d2d] mt-2">
            Book Your Session
          </h1>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Simple 4-step booking process
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between max-w-2xl mx-auto mb-10">
          {["Service", "Schedule", "Details", "Confirm"].map((label, i) => (
            <div key={i} className="flex-1 text-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mx-auto
                  ${step > i + 1 ? "text-white" :
                    step === i + 1 ? "text-white" : "bg-[#D5BADB] text-[#43464E]/60"}`}
                style={{ backgroundColor: step >= i + 1 ? primaryColor : "" }}
              >
                {step > i + 1 ? "✓" : i + 1}
              </div>
              <p className={`mt-2 text-xs font-medium
                ${step === i + 1 ? "text-[#43464E]" : "text-gray-400"}`}>
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* ── Card: flex column so buttons sit outside scroll area ── */}
        <div
          className="max-w-2xl mx-auto bg-[#B0C5DD] rounded-2xl shadow-md overflow-hidden flex flex-col min-h-[500px] max-h-[90vh] md:max-h-[620px]"
        >

          {/* ── Scrollable Content Area ── */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8">

            {/* STEP 1 */}
            {step === 1 && (
              <div>
                <h2 className="text-xl font-bold mb-6 text-[#2d2d2d]">Choose a Service</h2>
                <div className="space-y-6">
                  {Object.entries(groupedPackages).map(([category, pkgs]) => (
                    <div key={category}>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-[#43464E] mb-3 border-b border-[#D5BADB] pb-1">
                        {category}
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {pkgs.map((pkg, i) => {
                          const isSelected =
                            data.package?.category === pkg.category &&
                            data.package?.duration === pkg.duration
                          return (
                            <button
                              key={i}
                              onClick={() => setData({ ...data, package: pkg })}
                              className={`p-3 border rounded-xl cursor-pointer text-center transition-all
                                ${isSelected
                                  ? "border-[#43464E] bg-[#D5BADB]/30"
                                  : "border-gray-200 hover:border-gray-400"
                                }`}
                            >
                              <p className="text-xs text-gray-500 font-medium">{pkg.duration}</p>
                              <p className="font-bold text-[#43464E] text-sm mt-1">
                                BDT {pkg.price.toLocaleString()}
                              </p>
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Selected summary inside scroll */}
                {data.package && (
                  <div className="mt-6 p-4 bg-[#43464E]/10 border border-[#43464E]/30 rounded-xl flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-[#2d2d2d]">{data.package.category}</p>
                      <p className="text-sm text-gray-500">{data.package.duration}</p>
                    </div>
                    <p className="font-bold text-[#43464E] text-lg">
                      BDT {data.package.price.toLocaleString()}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div>
                <h2 className="text-xl font-bold mb-6 text-[#2d2d2d]">Choose Date & Time</h2>

                <label className="text-sm font-medium text-gray-600 mb-1 block">Select Date</label>
                <input
                  type="date"
                  name="date"
                  value={data.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full p-3 border border-gray-200 rounded-xl mb-6 focus:outline-none focus:border-[#D5BADB]"
                />

                <label className="text-sm font-medium text-gray-600 mb-3 block">Select Time</label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((t, i) => (
                    <div
                      key={i}
                      onClick={() => setData({ ...data, time: t })}
                      className={`p-2 text-center border rounded-lg cursor-pointer text-sm font-medium transition-all
                        ${data.time === t
                          ? "bg-[#D5BADB]/30 border-[#43464E] text-[#43464E]"
                          : "border-gray-200 hover:border-gray-400"
                        }`}
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div>
                <h2 className="text-xl font-bold mb-6 text-[#2d2d2d]">Your Details</h2>

                <label className="text-sm font-medium text-gray-600 mb-1 block">Full Name *</label>
                <input
                  name="name"
                  placeholder="e.g. Rahim Uddin"
                  value={data.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 rounded-xl mb-4 focus:outline-none focus:border-[#D5BADB]"
                />

                <label className="text-sm font-medium text-gray-600 mb-1 block">Phone Number *</label>
                <input
                  name="phone"
                  placeholder="e.g. 01XXXXXXXXX"
                  value={data.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 rounded-xl mb-4 focus:outline-none focus:border-[#D5BADB]"
                />

                <label className="text-sm font-medium text-gray-600 mb-1 block">Notes (optional)</label>
                <textarea
                  name="notes"
                  placeholder="Any special requests or preferences..."
                  value={data.notes}
                  onChange={handleChange}
                  rows={3}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#D5BADB] resize-none"
                />
              </div>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <div>
                <h2 className="text-xl font-bold mb-6 text-[#2d2d2d]">Confirm Booking</h2>

                <div className="bg-[#D5BADB]/10 rounded-xl p-5 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Service</span>
                    <span className="font-semibold text-[#2d2d2d]">{data.package.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Duration</span>
                    <span className="font-semibold text-[#2d2d2d]">{data.package.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Date</span>
                    <span className="font-semibold text-[#2d2d2d]">{data.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Time</span>
                    <span className="font-semibold text-[#2d2d2d]">{data.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Name</span>
                    <span className="font-semibold text-[#2d2d2d]">{data.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Phone</span>
                    <span className="font-semibold text-[#2d2d2d]">{data.phone}</span>
                  </div>
                  {data.notes && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Notes</span>
                      <span className="font-semibold text-[#2d2d2d] text-right max-w-[60%]">{data.notes}</span>
                    </div>
                  )}
                  <div className="border-t border-[#D5BADB] pt-3 mt-2 flex justify-between items-center">
                    <span className="font-bold text-base text-[#2d2d2d]">Total Bill</span>
                    <span className="font-bold text-xl text-[#43464E]">
                      BDT {data.package.price.toLocaleString()}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-gray-400 mt-3 text-center">
                  Clicking Confirm will send your booking via WhatsApp
                </p>
              </div>
            )}

          </div>
          {/* ── END Scrollable Content ── */}

          {/* ── Fixed Buttons Outside the Scroll Box ── */}
          <div className="border-t border-gray-100 bg-white px-6 md:px-8 py-4 flex gap-3">

            {/* Back button — hidden on step 1 */}
            {step > 1 && (
              <button
                onClick={back}
                className="w-1/2 py-3 border border-gray-300 rounded-xl font-medium hover:bg-gray-50 transition-colors"
              >
                ← Back
              </button>
            )}

            {/* Next / Confirm button */}
            {step < 4 ? (
              <button
                disabled={
                  (step === 1 && !isStep1Valid) ||
                  (step === 2 && !isStep2Valid) ||
                  (step === 3 && !isStep3Valid)
                }
                onClick={next}
                className={`py-3 rounded-xl text-white font-semibold disabled:opacity-40 transition-opacity
                  ${step === 1 ? "w-full" : "w-1/2"}`}
                style={{ backgroundColor: primaryColor }}
              >
                Next →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="w-1/2 py-3 text-white rounded-xl font-semibold flex items-center justify-center gap-2"
                style={{ backgroundColor: primaryColor }}
              >
                ✅ Confirm
              </button>
            )}

          </div>
          {/* ── END Fixed Buttons ── */}

        </div>
        {/* ── END Card ── */}

      </Container>
    </div>
  )
}

export default Book