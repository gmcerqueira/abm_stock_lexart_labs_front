import { createContext } from 'react';
import PropTypes from 'prop-types';

const StockContext = createContext();

const StockProvider = ({ children }) => {
  const context = {};

  return (
    <StockContext.Provider value={context}>{children}</StockContext.Provider>
  );
};

StockProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { StockProvider, StockContext };
