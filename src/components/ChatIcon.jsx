import React, { useState } from 'react';
import ChatBot from './ChatBot';
// import { XIcon, ChatAlt2Icon } from '@heroicons/react/solid';
import { BsRobot } from "react-icons/bs";
import { MdCancel } from "react-icons/md";


function ChatIcon() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="relative">
          <div className="bg-gray-300  p-2 rounded-lg shadow-lg w-80 h-96">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-1 right-2 p-1 rounded-full bg-gray-200 hover:bg-gray-400"
            >
              <MdCancel className="h-6 w-6 text-gray-600" />
            </button>
            <ChatBot />
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="p-3 bg-blue-500 rounded-full shadow-lg hover:bg-blue-600"
        >
          <BsRobot className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white " />
        </button>
      )}
    </div>
  );
}

export default ChatIcon;
