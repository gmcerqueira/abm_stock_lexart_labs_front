import { useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
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

  const toEdit = Object.prototype.hasOwnProperty.call(StockItem, '_id');

  return (
    <section className="">
      <h1>New Product</h1>
      <Form className="d-flex ">
        <div className="me-3">
          <h3>Product</h3>
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
            className="mb-4"
          />
        </div>
        <div>
          <h3>Client</h3>
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
      </Form>
      <Button onClick={shouldSubmitOrEdit} className="me-3">
        {toEdit ? 'Update' : 'Submit'}
      </Button>
      <Button variant="secondary" onClick={resetItemInicialState}>
        Clear
      </Button>
    </section>
  );
};

export default ProductForm;
