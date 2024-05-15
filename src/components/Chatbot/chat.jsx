import React, { useState, useEffect } from "react";
import "./chat.css"; // Import CSS file if needed

const Chatbot = () => {
  const [userMessage, setUserMessage] = useState("");
  const [inputInitHeight, setInputInitHeight] = useState(0);

  useEffect(() => {
    setInputInitHeight(
      document.querySelector(".chat-input textarea").scrollHeight
    );
  }, []);

  const createChatLi = (message, className) => {
    return (
      <li className={`chat ${className}`}>
        {className === "outgoing" ? (
          <p>{message}</p>
        ) : (
          <span className="material-symbols-outlined">smart_toy</span>
        )}
        <p>{message}</p>
      </li>
    );
  };

  const generateResponse = () => {
    const API_URL = "http://localhost:8080/chat";
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: userMessage,
      }),
    };

    fetch(API_URL, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        // Set response data here
      })
      .catch(() => {
        // Handle error
      });
  };

  const handleChat = () => {
    setUserMessage(userMessage.trim());
    if (!userMessage) return;

    // Clear the input textarea and set its height to default
    const chatInput = document.querySelector(".chat-input textarea");
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    // Append the user's message to the chatbox
    const chatbox = document.querySelector(".chatbox");
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
      // Display "Thinking..." message while waiting for the response
      const incomingChatLi = createChatLi("Thinking...", "incoming");
      chatbox.appendChild(incomingChatLi);
      chatbox.scrollTo(0, chatbox.scrollHeight);
      generateResponse();
    }, 600);
  };

  const handleInputChange = (e) => {
    const chatInput = document.querySelector(".chat-input textarea");
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
    setUserMessage(e.target.value);
  };

  return (
    <div>
      <button class="chatbot-toggler">
        <span class="material-symbols-rounded">robot</span>
        <span class="material-symbols-outlined">close</span>
      </button>
      <div class="chatbot">
        <header>
          <h2>Chatbot</h2>
          <span class="close-btn material-symbols-outlined">close</span>
        </header>
        <ul class="chatbox">
          <li class="chat incoming">
            <span class="material-symbols-outlined">smart_toy</span>
            <p>
              Hi there 👋
              <br />
              How can I help you today?
            </p>
          </li>
        </ul>
        <div class="chat-input">
          <textarea
            placeholder="Enter a message..."
            spellcheck="false"
            required
          ></textarea>
          <span id="send-btn" class="material-symbols-rounded">
            send
          </span>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
