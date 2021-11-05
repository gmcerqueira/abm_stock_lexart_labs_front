/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const StockContext = createContext();

const CRUD_URL = `${process.env.REACT_APP_URL}/stock`;

const newItem = {
  quantity: 100,
  price: 12.34,
  client: { name: 'New Client', email: 'abc@abc.com' },
  product: { name: 'New item', validUntil: '2021-11-03' },
  active: true,
};

const StockProvider = ({ children }) => {
  const [Stock, setStock] = useState([]);
  const [NewProduct, setNewProduct] = useState({ name: '', validUntil: '' });
  const [NewClient, setNewClient] = useState({ name: '', email: '' });
  const itemInicialState = {
    quantity: 0,
    price: 0,
    client: NewClient,
    product: NewProduct,
    active: true,
  };
  const [NewStockItem, setNewStockItem] = useState(itemInicialState);
  const [Error, setError] = useState(false);

  const getStock = async () => {
    setStock([{ _id: '61855da397069d03e848f98f', ...newItem }]);
    // try {
    //   const response = await fetch(CRUD_URL, {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   }).then((res) => res.json());
    //   console.log(response);
    //   setStock(response);
    // } catch (error) {
    //   setError(error);
    // }
  };

  const getStockItem = async (id) => {
    const item = Stock.find(({ _id }) => _id === id);
    setNewStockItem(item);
    console.log(item);
    return item;
    // try {
    //   const response = await fetch(CRUD_URL, {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   }).then((res) => res.json());
    //   console.log(response);
    //   setStock(response);
    // } catch (error) {
    //   setError(error);
    // }
  };

  const submitStockItem = async () => {
    try {
      const response = await fetch(CRUD_URL, {
        method: 'POST',
        body: JSON.stringify(NewStockItem),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json());

      console.log(response);
      await getStock();
    } catch (error) {
      setError(error);
    }
  };

  const deleteStockItem = async (id) => {
    try {
      const response = await fetch(`${CRUD_URL}/${id}`, {
        method: 'DELETE',
      });

      console.log(response);
      await getStock();
    } catch (error) {
      setError(error);
    }
  };

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
    const { name, value, type } = target;

    setNewStockItem({
      ...NewStockItem,
      [name]:
        type === 'number' ? parseFloat(parseFloat(value).toFixed(2)) : value,
    });
  };

  useEffect(() => {
    getStock();
  }, []);

  useEffect(() => {
    setNewStockItem({
      ...NewStockItem,
      // product: NewProduct,
      // client: NewClient,
    });
  }, [NewProduct, NewClient]);

  const context = {
    Stock,
    Error,
    getStockItem,
    submitStockItem,
    deleteStockItem,
    handleNewProductChange,
    handleNewClientChange,
    handleNewStockItemChange,
    NewProduct,
    NewClient,
    NewStockItem,
  };

  return (
    <StockContext.Provider value={context}>{children}</StockContext.Provider>
  );
};

StockProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { StockProvider, StockContext };
