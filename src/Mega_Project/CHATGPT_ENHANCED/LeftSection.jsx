import React from "react";
import "./styles/leftSection.css";
import chatgptlogo from "./assets/chatgptlogo.png";
function LeftSection() {
  const allChats = [
    {
      id: 1,
      chatName: "This is sample Chat 1",
    },
    {
      id: 2,
      chatName: "This is sample Chat 2",
    },
    {
      id: 3,
      chatName: "This is sample Chat 3",
    },
    {
      id: 4,
      chatName: "This is sample Chat 4",
    },
    {
      id: 5,
      chatName: "This is sample Chat 5",
    },
  ];
  return (
    <div className="left-section">
      {/* Header */}
      <div className="header">
        <div className="logo-container">
          <div className="logo-icon">
            <img
              src={chatgptlogo}
              alt="Logo"
              style={{ width: "40px", height: "40px", objectFit: "contain" }}
            />
          </div>
          <span className="new-chat-text">New chat</span>
        </div>
        <div className="edit-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </div>
      </div>
      <div className="chat-history">
        {allChats.map((chat) => (
          <div key={chat.id} className="chat-item">
            {chat.chatName}
          </div>
        ))}
      </div>
    </div>
  );
}
export default LeftSection;
