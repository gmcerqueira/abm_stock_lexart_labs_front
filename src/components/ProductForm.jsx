/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import { StockContext } from '../context/StockProvider';
import FormInput from './FormInput';

const ProductForm = () => {
  const {
    submitStockItem,
    handleNewProductChange,
    handleNewClientChange,
    handleNewStockItemChange,
    NewProduct,
    NewClient,
    NewStockItem,
  } = useContext(StockContext);
  return (
    <form>
      <div>
        Product:
        <FormInput label="Name" name="name" value={NewStockItem.product.name} onChange={handleNewProductChange} />
        <FormInput
          label="Valid until"
          name="validUntil"
          type="date"
          value={NewStockItem.product.validUntil}
          onChange={handleNewProductChange}
        />
        <FormInput
          label="Quantity"
          name="quantity"
          type="number"
          value={NewStockItem.quantity ? NewStockItem.quantity : ''}
          onChange={handleNewStockItemChange}
        />
        <FormInput
          label="Price"
          name="price"
          type="number"
          value={NewStockItem.price ? NewStockItem.price : ''}
          onChange={handleNewStockItemChange}
        />
      </div>
      <div>
        Client:
        <FormInput
          label="Name"
          name="name"
          value={NewStockItem.client.name}
          onChange={handleNewClientChange}
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={NewStockItem.client.email}
          onChange={handleNewClientChange}
        />
      </div>
      <button type="button" onClick={submitStockItem}>
        Create
      </button>
    </form>
  );
};

export default ProductForm;
