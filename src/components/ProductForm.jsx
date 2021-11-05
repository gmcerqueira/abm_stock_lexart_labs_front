import { useContext } from 'react';
import { StockContext } from '../context/StockProvider';
import FormInput from './FormInput';

const ProductForm = () => {
  const {
    shouldSubmitOrEdit,
    handleProductChange,
    handleClientChange,
    handleStockItemChange,
    StockItem,
    resetItemInicialState,
  } = useContext(StockContext);
  return (
    <form>
      <div>
        Product:
        <FormInput
          label="Name"
          name="name"
          value={StockItem.product.name}
          onChange={handleProductChange}
        />
        <FormInput
          label="Valid until"
          name="validUntil"
          type="date"
          value={StockItem.product.validUntil}
          onChange={handleProductChange}
        />
        <FormInput
          label="Quantity"
          name="quantity"
          type="number"
          value={StockItem.quantity ? StockItem.quantity : ''}
          onChange={handleStockItemChange}
        />
        <FormInput
          label="Price"
          name="price"
          type="number"
          value={StockItem.price ? StockItem.price : ''}
          onChange={handleStockItemChange}
        />
        Active?
        <label htmlFor="active">
          Yes
          <input
            type="radio"
            name="active"
            value
            onClick={handleStockItemChange}
          />
        </label>
        <label htmlFor="active">
          No
          <input
            type="radio"
            name="active"
            value={false}
            onClick={handleStockItemChange}
          />
        </label>
      </div>
      <div>
        Client:
        <FormInput
          label="Name"
          name="name"
          value={StockItem.client.name}
          onChange={handleClientChange}
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={StockItem.client.email}
          onChange={handleClientChange}
        />
      </div>
      <button type="button" onClick={shouldSubmitOrEdit}>
        {Object.prototype.hasOwnProperty.call(StockItem, '_id')
          ? 'Edit'
          : 'Create'}
      </button>
      <button type="button" onClick={resetItemInicialState}>
        Clear
      </button>
    </form>
  );
};

export default ProductForm;
