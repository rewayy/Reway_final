
import { createContext, useContext, useState } from 'react';

const RecyclerContext = createContext();

export const RecyclerProvider = ({ children }) => {
  const [recyclers, setRecyclers] = useState([]);

  const addRecycler = (newRecycler) => {
    setRecyclers((prevRecyclers) => [...prevRecyclers, newRecycler]);
  };

  return (
    <RecyclerContext.Provider value={{ recyclers, addRecycler }}>
      {children}
    </RecyclerContext.Provider>
  );
};

export const useRecycler = () => {
  return useContext(RecyclerContext);
};
