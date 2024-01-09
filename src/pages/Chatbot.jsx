import React, { useState } from 'react';
import { logo3 } from '../assets';
import { FaArrowCircleRight } from 'react-icons/fa';

const Chatbot = () => {
  const [question, setQuestion] = useState('');
  const [questionsList, setQuestionsList] = useState([]);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleAsk = () => {
    if (question.trim() !== '') {
      setQuestionsList([
        ...questionsList,
        { text: question, isUser: true, timestamp: getCurrentTime() },
      ]);
      setQuestion('');
      setIsBotTyping(true);
      setTimeout(() => {
        setIsBotTyping(false);
      }, 1500);
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

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div
      className={`max-w-[1183px]  min-w-[375px] shadow-lg relative md:m-auto font-mont m-4 p-4 rounded-xl border h-full flex items-center justify-between ${
        isDarkTheme ? 'bg-gray-900 text-white' : 'bg-gray-200 text-black'
      }`}
    >
      <div className='flex flex-col p-2 md:p-4 md:h-full items-center justify-between gap-[10vw] md:gap-[8vw] md:m-1 rounded-xl'>
        <div className='w-full flex flex-col justify-center items-center'>
          <div className='chatbot-logo overflow-hidden border w-[12vw] h-[12vw] md:w-[6vw] md:h-[6vw] rounded-full'>
            <img src={logo3} alt='' />
          </div>
          <h2
            className={`text-center w-full border-blue-400  text-xl md:text-2xl ${
              isDarkTheme ? 'text-gray-300' : 'text-[#008037]'
            }`}
          >
            How can I help you ?
          </h2>
        </div>

        {/* Display the questions */}
        <div className='w-full text-start'>
          {questionsList.map((q, index) => (
            <div className='w-full' key={index}>
              <p
                className={`border bg-white border-slate-300 shadow-sm px-4 md:py-2 my-1 rounded-full ${
                  q.isUser ? 'text-right' : 'text-left'
                }`}
                style={{
                  whiteSpace: 'pre-line',
                  display: 'inline-block',
                  color: isDarkTheme && 'black',
                }}
              >
                {q.text}
                <span className='text-xs text-gray-400 ml-2'>{q.timestamp}</span>
                {q.isUser ? (
                  <span className='text-xs ml-2'>{isBotTyping && 'Typing...'}</span>
                ) : null}
              </p>
            </div>
          ))}
        </div>

        <div className='flex gap-4 items-center justify-center'>
          {/* Clear Chat History Button */}
          <button
            className={`bg-blue-500 text-white md:px-4 text-sm px-4 py-1 md:py-2 rounded-md mt-4 ${
              isDarkTheme ? 'hover:bg-blue-400' : 'hover:bg-blue-600'
            }`}
            onClick={clearChatHistory}
          >
            Clear Chat&nbsp;<span className='hidden md:inline'>History</span>
          </button>

          {/* Theme Switcher */}
          <button
            className={`rounded-full md:p-2 ${
              isDarkTheme ? 'bg-gray-700' : 'bg-gray-300'
            } mt-4 hover:bg-gray-400 focus:outline-none`}
            onClick={toggleTheme}
          >
            {isDarkTheme ? ' 🌙' : '☀️'}
          </button>
        </div>

        {/* User Input */}
        <div className='w-full md:w-[50vw] relative flex bg-white shadow-sm text-start rounded-xl md:mx-8'>
          <input
            type='text'
            className={`w-full text-md md:text-md h-full border border-slate-300 p-2 md:p-3 pr-10 md:pr-0 md:px-4 rounded-lg ${
              isDarkTheme ? 'text-gray-300 bg-gray-800' : 'text-black bg-white'
            }`}
            placeholder='Ask anything ... '
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <FaArrowCircleRight
            size={32}
            className={`absolute right-1 top-1 md:right-2 md:top-3 cursor-pointer ${
              isDarkTheme
                ? 'text-gray-300 hover:text-gray-400'
                : 'text-black hover:text-gray-700'
            }`}
            onClick={handleAsk}
          />
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
