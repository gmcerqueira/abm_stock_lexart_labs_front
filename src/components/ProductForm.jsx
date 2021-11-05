import { useContext } from 'react';
import { Form } from 'react-bootstrap';
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
    <Form>
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
        <Form.Check
          type="switch"
          name="active"
          label="Active?"
          feedbackTooltip
          checked={StockItem.active}
          onChange={handleStockItemChange}
        />
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
    </Form>
  );
};

export default ProductForm;
