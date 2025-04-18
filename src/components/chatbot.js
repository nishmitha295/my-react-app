import React, { useState, useEffect } from "react";
import axios from "axios";
import { fetchOrderDetailsById, fetchOrders } from "./order";
import { fetchUsers, fetchUserDetailsById } from "./user";
import '../App.css';

import { Bot, Smile, Trash } from 'lucide-react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { 
      text: (
        <>
          <Bot className="w-5 h-5 text-purple-600" />
          Hello! How can I assist you?
        </>
      ),
      sender: "Chatbot"
    },
  ]);
  
  const [userInput, setUserInput] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [recognition, setRecognition] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);  // Track the feedback modal visibility


  useEffect(() => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Your browser does not support speech recognition.");
      return;
    }

    const speechRecognition = new window.webkitSpeechRecognition();
    speechRecognition.continuous = false;
    speechRecognition.interimResults = true;
    speechRecognition.lang = "en-US";

    speechRecognition.onresult = (event) => {
      let transcript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      setUserInput(transcript);
    };

    speechRecognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };

    speechRecognition.onend = () => {
      setIsListening(false);
    };

    setRecognition(speechRecognition);
  }, []);

  const logChatData = (userMessage, botResponse, intent) => {
    console.log("Chat Log:", { userMessage, botResponse, intent });
  };

  const handleOrderClick = async (orderId) => {
    try {
      const orderDetails = await fetchOrderDetailsById(orderId);
      if (orderDetails) {
        setMessages([
          {
            text: `Order Details:\nProduct: ${orderDetails.product_name}\nQuantity: ${orderDetails.quantity}`,
            sender: "Chatbot",
          },
        ]);
        logChatData("Order clicked", `Order Details for ID: ${orderId}`, "Order Details");
      } else {
        setMessages([{ text: "No details found for this order.", sender: "Chatbot" }]);
      }
    } catch (error) {
      console.error("Error fetching order details:", error);
      setMessages([{ text: "Sorry, unable to fetch order details.", sender: "Chatbot" }]);
    }
  };

  const handleUserClick = async (userId) => {
    try {
      const userDetails = await fetchUserDetailsById(userId);
      if (userDetails) {
        setMessages([
          {
            text: `User Details:\nName: ${userDetails.name}\nEmail: ${userDetails.email}\nRole: ${userDetails.role}`,
            sender: "Chatbot",
          },
        ]);
        logChatData("User clicked", `User Details for ID: ${userId}`, "User Details");
      } else {
        setMessages([{ text: "No details found for this user.", sender: "Chatbot" }]);
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
      setMessages([{ text: "Sorry, unable to fetch user details.", sender: "Chatbot" }]);
    }
  };

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    const input = userInput.trim().toLowerCase();
    setMessages((prev) => [...prev, { text: userInput, sender: "User" }]);
    setUserInput("");

    let intent = "General";

    try {
      if (input.includes("orders")) {
        const orders = await fetchOrders();
        if (orders.length > 0) {
          setMessages((prev) => [
            ...prev,
            { text: "Here are your recent orders:", sender: "Chatbot" },
            ...orders.map((order) => ({
              text: `${order.product_name} - Quantity: ${order.quantity}`,
              sender: "Chatbot",
              onClick: () => handleOrderClick(order.id),
              className: "order-button",  // Adding the 'order-button' class here
            })),
          ]);
          intent = "Order Status";
        } else {
          setMessages((prev) => [...prev, { text: "No orders found.", sender: "Chatbot" }]);
        }
      } else if (input.includes("profile")) {
        const userDetails = await fetchUsers();
        if (userDetails.length > 0) {
          setMessages((prev) => [
            ...prev,
            { text: "Here are all the user profiles:", sender: "Chatbot" },
            ...userDetails.map((user) => ({
              text: `Name: ${user.name}, Email: ${user.email}, Role:${user.role}`,
              sender: "Chatbot",
              onClick: () => handleUserClick(user.id), // Use handleUserClick here
            })),
          ]);
          intent = "Profile";
        } else {
          setMessages((prev) => [...prev, { text: "No user information found.", sender: "Chatbot" }]);
        }
      } else {
        try {
          const reqBody = {
            model: "mistral-large-latest",
            messages: [
              {
                role: "user",
                content: `Given the intents order status, refund request, and my profile, identify the most appropriate intent for the following input: ${input}. Return the result as a JSON-parsable string in the format: {'intent': 'my profile'} if the input doesn't match any of the intents, respond with: {"intent":"no intent"}`,
              },
            ],
          };

          const response = await axios.post(
            "https://api.mistral.ai/v1/chat/completions",
            reqBody,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ajh97jbwCGGxSIYljWsRKv77SrIoBp4a",
              },
            }
          );

          const cleanedString = response.data.choices[0].message.content
            .replace(/```json|```|`/g, "")
            .trim();

          const jsonData = JSON.parse(cleanedString);
          if (jsonData.intent.toLowerCase() === "no intent") {
            intent = "Human Handoff";
          
            setMessages((prev) => [
              ...prev,
              {
                text: `Intent detected: ${jsonData.intent}`,
                sender: "Chatbot",
              },
              {
                text: "Chatbot is handing over to agent...",
                type: "system",
                style: { textAlign: "center", color: "#6c757d", fontStyle: "italic" , backgroundColor: "white"},
              },
              {
                text: "Hello, I’m Alex — your human support agent. How can I help you today?",
                sender: "Agent",
                style: { backgroundColor: "#e6f7ff", borderLeft: "4px solid #007bff", padding: "8px" },
              },
            ]);
          }else {
            setMessages((prev) => [
              ...prev,
              { text: `Intent detected: ${jsonData.intent}`, sender: "Chatbot" },
            ]);
            intent = jsonData.intent;
          }
          
          logChatData(input, `Intent detected: ${jsonData.intent}`, intent);
        } catch (error) {
          console.error("Error with Mistral API:", error);
          intent = "No Intent";
        }
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      logChatData(input, messages[messages.length - 1]?.text, intent);
    }
  };

  const startSpeechRecognition = () => {
    if (recognition && !isListening) {
      recognition.start();
      setIsListening(true);
    }
  };

  const handleSmileClick = () => {
    setShowFeedbackModal(true); // Set state to show the modal
  };
  

  const handleTrashClick = () => {
    setMessages([ 
      { 
        text: (
          <>
            <Bot className="w-5 h-5 text-purple-600" />
            Hello! How can I assist you?
          </>
        ),
        sender: "Chatbot"
      }
    ]);
  };

  const handleCloseModal = () => {
    setShowFeedbackModal(false); // Close the feedback modal
  };
  

  return (
    <>
      <button
        type="button"
        className="btn btn-primary floating"
        title="Chat with us"
        onClick={() => setShowChat(true)}
        style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '6px',
            zIndex: 1000
          }}
      >
<i className="bi bi-chat-fill" style={{ fontSize: '1.5rem' }}></i>
      </button>

      {showChat && (
        <div className="chat-container">
          <div className="chat-header bg-primary text-white">
            Chatbot
            <div className="d-flex align-items-center icon-container">
              <Smile className="w-5 h-5 text-gray-500 mr-2" title="Leave Feedback" onClick={handleSmileClick} />
              <Trash className="w-5 h-5 text-gray-500 mr-2" title="Clear History" onClick={handleTrashClick} />
              <button type="button" className="btn-close text-white" onClick={() => setShowChat(false)} />
            </div>
          </div>

          <div className="chat-body">
            {messages.map((msg, index) => (
              <div
              key={index}
              className={`message ${msg.sender} ${msg.className || ""}`}
              onClick={msg.onClick ? msg.onClick : undefined}
              style={{
                cursor: msg.onClick ? "pointer" : "default",
                backgroundColor: "#e6f7ff",
                padding: "8px",
                marginBottom: "8px",
                borderRadius: "4px",
                borderLeft: msg.sender === "Chatbot" ? "4px solid #007bff" : undefined,
                borderRight: msg.sender === "User" ? "4px solid #007bff" : undefined,
                ...msg.style,
              }}
            >
              {msg.text}
            </div>
            
            
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
          >
            <div className="chat-footer">
              <input
                type="text"
                className="form-control"
                placeholder="Type or speak a message..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              />
              <button className="btn btn-primary" type="button" onClick={handleSendMessage}>
                ➤
              </button>
              <button className="btn btn-secondary" type="button" onClick={startSpeechRecognition}>
                🎤
              </button>
            </div>
          </form>
        </div>
      )}
      {showFeedbackModal && (
  <div className="feedback-modal-overlay">
    <div className="feedback-modal">
    <button type="button" className="btn-close text-white" 
        onClick={handleCloseModal}
      >
        <svg
          className="h-icon"
          aria-hidden="true"
          style={{ color: 'var(--neutral--600)', fill: 'var(--neutral--600)', width: '24px', height: '24px' }}
        >
          <use href="#ic-close-24"></use>
        </svg>
      </button>
      <h4 className="feedback-modal__title text-bold-2">Rate your experience</h4>
      <div className="feedback-modal-rating">
        <ul className="feedback-modal-rating__list">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
            <li key={rating}>{rating}</li>
          ))}
        </ul>
        <div className="feedback-modal-rating__text">
          <p className="text-body-2">Poor</p>
          <p className="text-body-2">Excellent</p>
        </div>
      </div>
    </div>
  </div>
)}

    </>
  );
};

export default Chatbot;
