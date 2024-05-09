import React, { useState, useRef } from 'react';

const InputBox = () => {
  const [message, setMessage] = useState('');
  const fileInputRef = useRef(null);

  const handleMessageChange = (e: any) => {
    setMessage(e.target.value);
  };

  const handleFileInputChange = (e: any) => {
    const file = e.target.files[0];
    // Handle the selected file
    console.log('Selected file:', file);
  };

  const handlePlusButtonClick = () => {
    // Trigger click event of file input
    fileInputRef.current.click();
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle message submission here
    console.log('Message submitted:', message);
    // Clear the message input after submission
    setMessage('');
  };

  return (
    <div className="flex items-center bg-gray-200  p-3">
      <button
        className="mr-2 text-gray-500 hover:text-gray-700 focus:outline-none"
        onClick={handlePlusButtonClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
      <form onSubmit={handleSubmit} className="flex flex-1">
        <input
          type="text"
          placeholder="Type a message"
          className="w-full bg-transparent outline-none focus:ring-0"
          value={message}
          onChange={handleMessageChange}
        />
      </form>
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileInputChange}
      />
      <button className="ml-2 text-green-500 hover:text-green-700 focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>
    </div>
  );
};

export default InputBox;
