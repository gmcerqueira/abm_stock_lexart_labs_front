import { useContext } from 'react';
import ProductForm from '../components/ProductForm';
import { StockContext } from '../context/StockProvider';

const Home = () => {
  const { Products } = useContext(StockContext);
  return (
    <section>
      <ProductForm />
      <ul>
        {Products.map((product) => (
          <li>{product}</li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
