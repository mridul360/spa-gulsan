import React, { useState } from 'react'
import Container from '../Components/Layout/Container'

// All packages with category, duration, price
const allPackages = [
  { category: "Dry Massage Services", duration: "60 Minutes", price: "BDT 6000" },
  { category: "Dry Massage Services", duration: "90 Minutes", price: "BDT 8000" },
  { category: "Dry Massage Services", duration: "120 Minutes", price: "BDT 11000" },
  { category: "Oil Massage Services", duration: "60 Minutes", price: "BDT 6000" },
  { category: "Oil Massage Services", duration: "90 Minutes", price: "BDT 8000" },
  { category: "Oil Massage Services", duration: "120 Minutes", price: "BDT 11000" },
  { category: "Hot Oil Massage Services", duration: "60 Minutes", price: "BDT 6000" },
  { category: "Hot Oil Massage Services", duration: "90 Minutes", price: "BDT 8500" },
  { category: "Hot Oil Massage Services", duration: "120 Minutes", price: "BDT 12000" },
  { category: "Deep Tissue Massage", duration: "60 Minutes", price: "BDT 6000" },
  { category: "Deep Tissue Massage", duration: "90 Minutes", price: "BDT 8500" },
  { category: "Deep Tissue Massage", duration: "120 Minutes", price: "BDT 10500" },
  { category: "Nuru Massage Services", duration: "60 Minutes", price: "BDT 8500" },
  { category: "Nuru Massage Services", duration: "90 Minutes", price: "BDT 10000" },
  { category: "Nuru Massage Services", duration: "120 Minutes", price: "BDT 15000" },
  { category: "Body To Body Massage", duration: "60 Minutes", price: "BDT 8500" },
  { category: "Body To Body Massage", duration: "90 Minutes", price: "BDT 12500" },
  { category: "Body To Body Massage", duration: "120 Minutes", price: "BDT 16000" },
  { category: "Two Girls Massage", duration: "60 Minutes", price: "BDT 15000" },
  { category: "Two Girls Massage", duration: "90 Minutes", price: "BDT 20000" },
  { category: "Two Girls Massage", duration: "120 Minutes", price: "BDT 25000" },
  { category: "Body Scrub Massage", duration: "60 Minutes", price: "BDT 15000" },
  { category: "Body Scrub Massage", duration: "90 Minutes", price: "BDT 20000" },
  { category: "Body Scrub Massage", duration: "120 Minutes", price: "BDT 25000" }
]

// Time slots
const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
  "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM"
]

function Book() {
  const primaryColor = "#4A6741"
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    package: '',
    date: '',
    time: '',
    notes: ''
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^[0-9+\-\s()]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number"
    }
    if (!formData.package) newErrors.package = "Please select a package"
    if (!formData.date) newErrors.date = "Please select a date"
    if (!formData.time) newErrors.time = "Please select a time"
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)

    // Construct WhatsApp message (without email)
    const message = `*New Booking Request from Website*%0A%0A
*Name:* ${formData.name}%0A
*Phone:* ${formData.phone}%0A
*Package:* ${formData.package}%0A
*Preferred Date:* ${formData.date}%0A
*Preferred Time:* ${formData.time}%0A
*Special Notes:* ${formData.notes || 'None'}%0A%0A
*Sent from Silken Touch Spa Booking Form*`

    // WhatsApp number (international format without '+' or spaces)
    const phoneNumber = '8801614326888'  // 01614326888 -> 8801614326888
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank')

    // Reset form
    setFormData({
      name: '', phone: '', package: '', date: '', time: '', notes: ''
    })
    setIsSubmitting(false)
    
    // Optional alert
    alert('Redirecting to WhatsApp... Please send the message to confirm your booking.')
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <div id='booking' className="font-sans text-gray-800">
      {/* Hero Section */}
      <div className="py-20 text-white text-center" style={{ backgroundColor: primaryColor }}>
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book a Session</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Reserve your time of tranquility — fill out the form and we'll confirm your appointment.
          </p>
        </Container>
      </div>

      {/* Booking Form */}
      <div className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-amber-200'}`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+880 1XXX XXXXXX"
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition ${errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-amber-200'}`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                {/* Package Selection (with duration & price) */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Select Package *</label>
                  <select
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition ${errors.package ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-amber-200'}`}
                  >
                    <option value="">Choose a package</option>
                    {allPackages.map((pkg, idx) => (
                      <option key={idx} value={`${pkg.category} - ${pkg.duration} - ${pkg.price}`}>
                        {pkg.category} - {pkg.duration} - {pkg.price}
                      </option>
                    ))}
                  </select>
                  {errors.package && <p className="text-red-500 text-sm mt-1">{errors.package}</p>}
                </div>

                {/* Date */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Preferred Date *</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={today}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition ${errors.date ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-amber-200'}`}
                  />
                  {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                </div>

                {/* Time */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Preferred Time *</label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition ${errors.time ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-amber-200'}`}
                  >
                    <option value="">Select a time slot</option>
                    {timeSlots.map((slot, idx) => (
                      <option key={idx} value={slot}>{slot}</option>
                    ))}
                  </select>
                  {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
                </div>

                {/* Notes (full width) */}
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-semibold mb-2">Special Requests or Notes</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Any allergies, preferences, or questions..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-200"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-white font-semibold px-8 py-3 rounded-full transition hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ backgroundColor: primaryColor }}
                >
                  {isSubmitting ? 'Redirecting...' : 'Request Booking'}
                </button>
              </div>
            </form>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Book