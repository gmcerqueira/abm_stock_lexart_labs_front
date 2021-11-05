/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const StockContext = createContext();

const CRUD_URL = `${process.env.REACT_APP_URL}/stock`;

const StockProvider = ({ children }) => {
  const [Stock, setStock] = useState([]);
  const [Product, setProduct] = useState({ name: '', validUntil: '' });
  const [Client, setClient] = useState({ name: '', email: '' });

  const itemInicialState = {
    quantity: 0,
    price: 0,
    product: { name: '', validUntil: '' },
    client: { name: '', email: '' },
    active: true,
  };
  const [StockItem, setStockItem] = useState(itemInicialState);
  const [Error, setError] = useState(false);

  const resetItemInicialState = () => {
    setStockItem(itemInicialState);
  };

  const getStock = async () => {
    try {
      const response = await fetch(CRUD_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json());
      console.log(response);
      setStock(response);
    } catch (error) {
      setError(error);
    }
  };

  const getStockItem = async (id) => {
    try {
      const response = await fetch(`${CRUD_URL}/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json());
      console.log(response);
      setStockItem(response);
    } catch (error) {
      setError(error);
    }
  };

  const submitStockItem = async () => {
    try {
      const response = await fetch(CRUD_URL, {
        method: 'POST',
        body: JSON.stringify(StockItem),
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

  const editStockItem = async () => {
    const { _id, ...itemToEdit } = StockItem;

    try {
      const response = await fetch(`${CRUD_URL}/${_id}`, {
        method: 'PUT',
        body: JSON.stringify(itemToEdit),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res);

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

  const shouldSubmitOrEdit = () => {
    if (Object.prototype.hasOwnProperty.call(StockItem, '_id')) editStockItem();
    else submitStockItem();

    resetItemInicialState();
  };

  const handleProductChange = ({ target }) => {
    const { name, value } = target;

    setProduct({
      ...Product,
      [name]: value,
    });
  };

  const handleClientChange = ({ target }) => {
    const { name, value } = target;

    setClient({
      ...Client,
      [name]: value,
    });
  };

  const handleStockItemChange = ({ target }) => {
    const { name, value, type } = target;
    let valueToSet = value;
    if (type === 'number') valueToSet = parseFloat(parseFloat(value).toFixed(2));
    if (type === 'radio') valueToSet = value === 'true';

    setStockItem({
      ...StockItem,
      [name]: valueToSet,
    });
  };

  useEffect(() => {
    getStock();
  }, []);

  useEffect(() => {
    setStockItem({
      ...StockItem,
      product: Product,
      client: Client,
    });
  }, [Product, Client]);

  const context = {
    Stock,
    Error,
    StockItem,
    getStockItem,
    shouldSubmitOrEdit,
    deleteStockItem,
    handleProductChange,
    handleClientChange,
    handleStockItemChange,
    resetItemInicialState,
  };

  return (
    <StockContext.Provider value={context}>{children}</StockContext.Provider>
  );
};

StockProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { StockProvider, StockContext };
