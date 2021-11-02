import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const StockContext = createContext();

const CRUD_URL = 'https://crudcrud.com/api/577239c7a0d1445a87232d17665c6e5c/products';

const StockProvider = ({ children }) => {
  const [Products, setProducts] = useState([]);
  const [Error, setError] = useState(false);

  const getProducts = async () => {
    try {
      const response = await fetch(CRUD_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json());

      setProducts(response);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  const context = { Products, Error };

  return (
    <StockContext.Provider value={context}>{children}</StockContext.Provider>
  );
};

StockProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { StockProvider, StockContext };
