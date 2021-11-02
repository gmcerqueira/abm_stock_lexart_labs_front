import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const StockContext = createContext();

const CRUD_URL = 'https://crudcrud.com/api/577239c7a0d1445a87232d17665c6e5c/stock';

const StockProvider = ({ children }) => {
  const [Stock, setStock] = useState([]);
  const [NewProduct, setNewProduct] = useState({ name: '', validUntil: '' });
  const [NewClient, setNewClient] = useState({ name: '', email: '' });
  const [NewStockItem, setNewStockItem] = useState({
    quantity: 0,
    price: 0,
    client: NewClient,
    product: NewProduct,
  });

  const [Error, setError] = useState(false);

  const getStock = async () => {
    try {
      const response = await fetch(CRUD_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json());

      setStock(response);
    } catch (error) {
      setError(error);
    }
  };

  const submitProducts = (product) => console.log(product);

  const handleNewProductChange = ({ target }) => {
    const { name, value } = target;

    setNewProduct({
      ...NewProduct,
      [name]: value,
    });
  };

  const handleNewClientChange = ({ target }) => {
    const { name, value } = target;

    setNewClient({
      ...NewClient,
      [name]: value,
    });
  };

  const handleNewStockItemChange = ({ target }) => {
    const { name, value } = target;

    setNewStockItem({
      ...NewStockItem,
      [name]: value,
    });
  };

  useEffect(() => {
    getStock();
  }, []);

  useEffect(() => {
    setNewStockItem({
      ...NewStockItem,
      product: NewProduct,
      client: NewClient,
    });
  }, [NewProduct, NewClient]);

  const context = {
    Stock,
    Error,
    submitProducts,
    handleNewProductChange,
    handleNewClientChange,
    handleNewStockItemChange,
  };

  return (
    <StockContext.Provider value={context}>{children}</StockContext.Provider>
  );
};

StockProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { StockProvider, StockContext };
