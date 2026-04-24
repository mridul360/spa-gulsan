import React, { useState, useRef, useEffect } from "react";
import { openLink } from "./linkUtils";

const WhatsAppContactWidget = () => {
  const [open, setOpen] = useState(true);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi 👋", time: "Now" },
    { type: "bot", text: "How can I help you?", time: "Now" },
  ]);
  const [typing, setTyping] = useState(false);

  const messagesEndRef = useRef(null);

  // Replace with your WhatsApp number
  const phoneNumber = "8801863905937";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, typing]);

  const getTime = () => {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getBotReply = (text) => {
    const msg = text.toLowerCase();

    if (msg.includes("price") || msg.includes("cost")) {
      return "Our pricing depends on your needs. Want me to connect you on WhatsApp?";
    }

    if (msg.includes("book") || msg.includes("event")) {
      return "Nice! I can help you book an event. Shall I connect you on WhatsApp?";
    }

    if (msg.includes("hi") || msg.includes("hello")) {
      return "Hey there! 😊 What are you looking for?";
    }

    if (msg.includes("yes")) {
      return "Great! Redirecting you to WhatsApp...";
    }

    return "Got it 👍 Do you want to continue this on WhatsApp?";
  };

  const shouldRedirect = (text) => {
    const msg = text.toLowerCase();
    return (
      msg.includes("yes") ||
      msg.includes("connect") ||
      msg.includes("whatsapp")
    );
  };

  const redirectToWhatsApp = (text) => {
    const webUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    const appScheme = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(text)}`;
    
    openLink(appScheme, webUrl);
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = {
      type: "user",
      text: input,
      time: getTime(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const botText = getBotReply(userMsg.text);

      const botMsg = {
        type: "bot",
        text: botText,
        time: getTime(),
      };

      setMessages((prev) => [...prev, botMsg]);
      setTyping(false);

      if (shouldRedirect(userMsg.text)) {
        setTimeout(() => {
          redirectToWhatsApp(userMsg.text);
        }, 1500);
      }
    }, 1000);
  };

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes blink {
          0%, 80%, 100% {
            opacity: 0;
          }
          40% {
            opacity: 1;
          }
        }

        @keyframes pulseSoft {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.08);
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.3s ease-out;
        }

        .typing-dot {
          animation: blink 1.4s infinite both;
        }

        .typing-dot:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing-dot:nth-child(3) {
          animation-delay: 0.4s;
        }

        .animate-pulse-soft {
          animation: pulseSoft 2s infinite;
        }
      `}</style>

      <div className="fixed bottom-15 right-6 z-[9999] flex flex-col items-end gap-3">
        
        {/* Chat Box */}
        {open && (
          <div className="w-[320px] max-w-[90vw] rounded-2xl shadow-2xl overflow-hidden bg-[#F4DADF] flex flex-col animate-fadeInUp">

            {/* Header */}
            <div
              onClick={() => setOpen(false)}
              className="bg-[#b9ccff] text-white px-4 py-3 flex justify-between cursor-pointer"
            >
              <span className="font-medium text-sm">Chat with us</span>
              <span>⌄</span>
            </div>

            {/* Messages */}
            <div className="h-[320px] overflow-y-auto p-3 flex flex-col gap-2 bg-gray-100">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`max-w-[80%] px-3 py-2 rounded-xl text-sm shadow animate-fadeInUp ${
                    msg.type === "user"
                      ? "bg-[#F4DADF]/50 self-end"
                      : "bg-white self-start"
                  }`}
                >
                  <p>{msg.text}</p>
                  <span className="text-[10px] text-gray-400">
                    {msg.time}
                  </span>
                </div>
              ))}

              {/* Typing Animation */}
              {typing && (
                <div className="bg-white px-3 py-2 rounded-xl w-fit text-sm shadow flex gap-1">
                  <span className="typing-dot">•</span>
                  <span className="typing-dot">•</span>
                  <span className="typing-dot">•</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-2 bg-white flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type a message..."
                className="flex-1 border rounded-full px-3 py-2 text-sm outline-none"
              />
              <button
                onClick={sendMessage}
                className="bg-[#43464E] text-white px-4 rounded-full hover:scale-105 transition"
              >
                Send
              </button>
            </div>
          </div>
        )}

        {/* Floating Button */}
        <button
          onClick={() => setOpen(!open)}
          className="bg-[#075e54] text-white w-14 h-14 rounded-full text-2xl shadow-lg animate-pulse-soft hover:scale-110 transition"
        >
          {open ? "✕" : "💬"}
        </button>
      </div>
    </>
  );
};

export default WhatsAppContactWidget;