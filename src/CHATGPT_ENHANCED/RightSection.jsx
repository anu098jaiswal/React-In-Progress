import React, { useState, useRef, useEffect } from "react";
import "./styles/rightSection.css";

const openAiAPI = "sk-31214e50e63a43eea5d77476d131ccd5";

const RightSection = () => {
  const [message, setMessage] = useState("");
  const [allMessage, setAllMessage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  //scrollToBottom() to make sure the view scrolls to the newest message.
  useEffect(() => {
    scrollToBottom();
  }, [allMessage]);

  const sendMessages = async () => {
    if (!openAiAPI) {
      console.error("API key is missing!");
      return;
    }

    if (!message.trim()) {
      return;
    }

    const userMessage = {
      role: "user",
      content: message,
    };

    setAllMessage((prevMessages) => [...prevMessages, userMessage]);
    setMessage("");
    setIsLoading(true);

    try {
      let url = "http://127.0.0.1:1337/v1/chat/completions";
      let token = `Bearer ${openAiAPI}`;
      let model = "gemini-1.5-flash";

      let messagesToSend = [...allMessage, userMessage];

      let res = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: model,
          messages: messagesToSend,
        }),
      });

      let resjson = await res.json();

      if (resjson && resjson.choices && resjson.choices[0]) {
        setAllMessage((prevMessages) => [
          ...prevMessages,
          {
            role: "assistant",
            content: resjson.choices[0].message.content,
          },
        ]);
      } else {
        console.error("Unexpected API response:", resjson);
        setAllMessage((prevMessages) => [
          ...prevMessages,
          {
            role: "assistant",
            content: "Sorry, I encountered an error. Please try again.",
          },
        ]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setAllMessage((prevMessages) => [
        ...prevMessages,
        {
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessages();
    }
  };

  return (
    <div className="rightSection">
      {/* Header */}
      <div className="chat-header">
        <div className="chatgpt-version">
          <p className="txt1">ChatGPT 3.5</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="dropdown-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>

      {/* Chat Messages Area */}
      <div className="chat-container">
        {allMessage.length === 0 ? (
          <div className="welcome-section">
            <div className="welcome-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1>What can I help with?</h1>
          </div>
        ) : (
          <div className="chat-messages">
            {allMessage.map((msg, index) => (
              <div key={index} className={`message-wrapper ${msg.role}`}>
                <div className="message-avatar">
                  {msg.role === "user" ? (
                    <div className="user-avatar">U</div>
                  ) : (
                    <div className="ai-avatar">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                        <path d="M2 17L12 22L22 17" />
                        <path d="M2 12L12 17L22 12" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="message-content">
                  <p>{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="message-wrapper assistant">
                <div className="message-avatar">
                  <div className="ai-avatar">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                      <path d="M2 17L12 22L22 17" />
                      <path d="M2 12L12 17L22 12" />
                    </svg>
                  </div>
                </div>
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Fixed Input Section */}
      <div className="input-section">
        <div className="input-container">
          <input
            type="text"
            placeholder="Message ChatGPT..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
          />
          <button
            onClick={sendMessages}
            disabled={!message.trim() || isLoading}
            className="send-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
        <p className="input-disclaimer">
          ChatGPT can make mistakes. Check important info.
        </p>
      </div>
    </div>
  );
};

export default RightSection;
