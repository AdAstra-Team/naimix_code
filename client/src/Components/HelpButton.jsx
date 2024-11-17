import React, { useState } from "react";

const SupportButton = () => {
  const [isTextboxVisible, setTextboxVisible] = useState(false);
  const [message, setMessage] = useState("");

  const handleButtonClick = () => {
    if (!isTextboxVisible) {
      // First click: Open the textbox
      setTextboxVisible(true);
    } else {
      // Second click: Send the message
      const endpoint = "https://your-endpoint.com/send-message";

      fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      })
        .then((response) => response.json())
        .then((data) => {
          alert("Message sent successfully!");
          console.log(data);

          // Reset the button and textbox
          setMessage("");
        })
        .catch((error) => {
          console.error("Error sending message:", error);
          alert("Failed to send the message.");
        });
				setTextboxVisible(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5">
      {/* Button */}
      <button
        onClick={handleButtonClick}
        className="px-6 py-3 button bg-purple bg-opacity-50 text-white"
      >
        {isTextboxVisible ? "Отправить" : "Позвать эксперта"}
      </button>

      {/* Textbox */}
      {isTextboxVisible && (
        <div
          className="absolute bottom-14 right-0 bg-white border border-gray-300 rounded-lg shadow-lg p-3"
          style={{ width: "250px" }}
        >
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Введите ваше сообщение"
            className="w-full h-20 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      )}
    </div>
  );
};

export default SupportButton;
