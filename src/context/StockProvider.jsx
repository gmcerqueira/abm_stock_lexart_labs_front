import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const StockContext = createContext();

const StockProvider = ({ children }) => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(['aaaaa', 'bbbbb', 'ccccc']);
  }, []);

  const context = { Products };

  return (
    <StockContext.Provider value={context}>{children}</StockContext.Provider>
  );
};

StockProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { StockProvider, StockContext };
