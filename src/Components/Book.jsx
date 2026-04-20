import React, { useState } from "react"
import Container from "../Components/Layout/Container"

const allPackages = [
  { category: "Dry Massage", duration: "60 Min", price: "BDT 6000" },
  { category: "Dry Massage", duration: "90 Min", price: "BDT 8000" },
  { category: "Oil Massage", duration: "120 Min", price: "BDT 11000" },
  { category: "Deep Tissue", duration: "90 Min", price: "BDT 8500" },
  { category: "Body To Body", duration: "60 Min", price: "BDT 8500" }
]

const timeSlots = [
  "09:00 AM","10:00 AM","11:00 AM","12:00 PM",
  "01:00 PM","02:00 PM","03:00 PM","04:00 PM",
  "05:00 PM","06:00 PM","07:00 PM","08:00 PM"
]

function BookWizard() {
  const primaryColor = "#4A6741"

  const [step, setStep] = useState(1)

  const [data, setData] = useState({
    package: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    notes: ""
  })

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const next = () => setStep(step + 1)
  const back = () => setStep(step - 1)

  const isStep1Valid = data.package
  const isStep2Valid = data.date && data.time
  const isStep3Valid = data.name && data.phone

  const handleSubmit = () => {
    const message = `
*New Booking Request*

Package: ${data.package}
Date: ${data.date}
Time: ${data.time}
Name: ${data.name}
Phone: ${data.phone}
Notes: ${data.notes || "N/A"}
    `

    const phone = "8801614326888"
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <div id="booking" className="py-12 md:py-20 bg-gray-50">

      <Container>

        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">Book Your Session</h1>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Simple 4-step booking process
          </p>
        </div>

        {/* PROGRESS BAR */}
        <div className="flex justify-between mb-8 text-xs md:text-sm">
          {["Service", "Schedule", "Details", "Confirm"].map((label, i) => (
            <div key={i} className="flex-1 text-center">
              <div
                className={`h-2 rounded-full mx-1 ${
                  step > i + 1 ? "bg-green-600" :
                  step === i + 1 ? "bg-amber-500" : "bg-gray-300"
                }`}
              />
              <p className="mt-2">{label}</p>
            </div>
          ))}
        </div>

        {/* CARD */}
        <div className="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-md">

          {/* STEP 1 */}
          {step === 1 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Choose Package</h2>

              <div className="space-y-3">
                {allPackages.map((p, i) => (
                  <div
                    key={i}
                    onClick={() => setData({ ...data, package: `${p.category} - ${p.duration} - ${p.price}` })}
                    className={`p-4 border rounded-xl cursor-pointer transition ${
                      data.package.includes(p.price)
                        ? "border-green-600 bg-green-50"
                        : "hover:border-gray-400"
                    }`}
                  >
                    <p className="font-semibold">{p.category}</p>
                    <p className="text-sm text-gray-500">{p.duration}</p>
                    <p className="text-green-700 font-bold">{p.price}</p>
                  </div>
                ))}
              </div>

              <button
                disabled={!isStep1Valid}
                onClick={next}
                className="mt-6 w-full py-3 rounded-xl text-white disabled:opacity-50"
                style={{ backgroundColor: primaryColor }}
              >
                Next
              </button>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Choose Date & Time</h2>

              <input
                type="date"
                name="date"
                value={data.date}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl mb-4"
              />

              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((t, i) => (
                  <div
                    key={i}
                    onClick={() => setData({ ...data, time: t })}
                    className={`p-2 text-center border rounded-lg cursor-pointer text-sm ${
                      data.time === t ? "bg-green-100 border-green-600" : ""
                    }`}
                  >
                    {t}
                  </div>
                ))}
              </div>

              <div className="flex gap-3 mt-6">
                <button onClick={back} className="w-1/2 py-3 border rounded-xl">
                  Back
                </button>
                <button
                  disabled={!isStep2Valid}
                  onClick={next}
                  className="w-1/2 py-3 text-white rounded-xl disabled:opacity-50"
                  style={{ backgroundColor: primaryColor }}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Your Details</h2>

              <input
                name="name"
                placeholder="Full Name"
                value={data.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl mb-3"
              />

              <input
                name="phone"
                placeholder="Phone Number"
                value={data.phone}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl mb-3"
              />

              <textarea
                name="notes"
                placeholder="Notes (optional)"
                value={data.notes}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl"
              />

              <div className="flex gap-3 mt-6">
                <button onClick={back} className="w-1/2 py-3 border rounded-xl">
                  Back
                </button>
                <button
                  disabled={!isStep3Valid}
                  onClick={next}
                  className="w-1/2 py-3 text-white rounded-xl disabled:opacity-50"
                  style={{ backgroundColor: primaryColor }}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Confirm Booking</h2>

              <div className="text-sm space-y-2 bg-gray-50 p-4 rounded-xl">
                <p><b>Package:</b> {data.package}</p>
                <p><b>Date:</b> {data.date}</p>
                <p><b>Time:</b> {data.time}</p>
                <p><b>Name:</b> {data.name}</p>
                <p><b>Phone:</b> {data.phone}</p>
                <p><b>Notes:</b> {data.notes || "N/A"}</p>
              </div>

              <div className="flex gap-3 mt-6">
                <button onClick={back} className="w-1/2 py-3 border rounded-xl">
                  Back
                </button>

                <button
                  onClick={handleSubmit}
                  className="w-1/2 py-3 text-white rounded-xl"
                  style={{ backgroundColor: primaryColor }}
                >
                  Confirm
                </button>
              </div>
            </div>
          )}

        </div>

      </Container>
    </div>
  )
}

export default BookWizard