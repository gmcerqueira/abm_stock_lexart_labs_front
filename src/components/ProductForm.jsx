import { useContext } from 'react';
import { StockContext } from '../context/StockProvider';
import FormInput from './FormInput';

const ProductForm = () => {
  const { submitProducts, handleNewProductChange } = useContext(StockContext);

  return (
    <form>
      <FormInput label="Name" name="name" onChange={handleNewProductChange} />
      <FormInput
        label="Valid until"
        name="validUntil"
        type="date"
        onChange={handleNewProductChange}
      />
      <button type="button" onClick={submitProducts}>
        Create
      </button>
    </form>
  );
};

export default ProductForm;
