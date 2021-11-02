import { useContext } from 'react';
import ProductForm from '../components/ProductForm';
import { StockContext } from '../context/StockProvider';

const Home = () => {
  const { Stock } = useContext(StockContext);
  return (
    <section>
      <ProductForm />
      <ul>
        {Stock.map((product) => (
          <li>{product}</li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
