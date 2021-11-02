import { useContext } from 'react';
import { StockContext } from '../context/StockProvider';
import FormInput from './FormInput';

const ProductForm = () => {
  const {
    submitProducts,
    handleNewProductChange,
    handleNewClientChange,
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
      <button type="button" onClick={submitProducts}>
        Create
      </button>
    </form>
  );
};

export default ProductForm;
