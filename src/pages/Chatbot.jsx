import React, { useState } from 'react';
import { logo3 } from '../assets';
import { FaArrowCircleRight } from 'react-icons/fa';

const Chatbot = () => {
  const [question, setQuestion] = useState('');
  const [questionsList, setQuestionsList] = useState([]);

  const handleAsk = () => {
    if (question.trim() !== '') {
      setQuestionsList([...questionsList, { text: question, isUser: true, timestamp: getCurrentTime() }]);
      setQuestion('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAsk();
    }
  };

  const getCurrentTime = () => {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
  };

  const clearChatHistory = () => {
    setQuestionsList([]);
  };

  return (
    <div className='max-w-[1183px] bg-gray-200 shadow-lg relative md:m-auto font-mont m-4 p-4 rounded-xl border border-slate-300 h-full flex items-center justify-between'>
      <div className='w-full flex flex-col p-2 md:p-4 md:h-full items-center justify-between gap-[5vw] md:gap-[8vw] md:m-1 rounded-xl'>
        <div className='w-full flex flex-col justify-center items-center'>
          <div className='chatbot-logo overflow-hidden border border-[#008037] w-[12vw] h-[12vw] md:w-[6vw] md:h-[6vw] rounded-full '>
            <img src={logo3} alt='' />
          </div>
          <h2 className='text-center text-[#008037] font-bold w-full border-blue-400 text-xl md:text-2xl'>
            How can I help you ?
          </h2>
        </div>

        {/* Display the questions */}
        <div className='w-full text-gray-500 text-start'>
          {questionsList.map((q, index) => (
            <div className='w-full' key={index}>
              <p
                className={`border bg-white border-slate-300 shadow-sm px-4 md:py-2 my-1 rounded-full ${q.isUser ? 'text-right' : 'text-left'}`}
                style={{ whiteSpace: 'nowrap', display: 'inline-block' }}
              >
                {q.text}
                <span className='text-xs text-gray-400 ml-2'>{q.timestamp}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Clear Chat History Button */}
        <button
          className='bg-blue-500 text-white px-4 py-2 rounded-md mt-4'
          onClick={clearChatHistory}
        >
          Clear Chat History
        </button>

        <div className='w-full md:w-[50vw] relative flex bg-white shadow-sm text-start rounded-xl md:mx-8'>
          <input
            type='text'
            className='w-full text-md md:text-md h-full border border-slate-300 p-2 md:p-3 md:px-4 rounded-lg'
            placeholder='Ask anything ... '
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <FaArrowCircleRight
            size={32}
            className='absolute right-1 top-1 md:right-2 md:top-3 cursor-pointer text-gray-300 hover:text-gray-400'
            onClick={handleAsk}
          />
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
