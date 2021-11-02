import { useContext } from 'react';
import { StockContext } from '../context/StockProvider';
import FormInput from './FormInput';

const ProductForm = () => {
  const {
    submitStockItem,
    handleNewProductChange,
    handleNewClientChange,
    handleNewStockItemChange,
  } = useContext(StockContext);

  return (
    <form>
      <div>
        Product:
        <FormInput label="Name" name="name" onChange={handleNewProductChange} />
        <FormInput
          label="Valid until"
          name="validUntil"
          type="date"
          onChange={handleNewProductChange}
        />
        <FormInput
          label="Quantity"
          name="quantity"
          type="number"
          onChange={handleNewStockItemChange}
        />
        <FormInput
          label="Price"
          name="price"
          type="number"
          onChange={handleNewStockItemChange}
        />
      </div>
      <div>
        Client:
        <FormInput label="Name" name="name" onChange={handleNewClientChange} />
        <FormInput
          label="Email"
          name="email"
          type="email"
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
