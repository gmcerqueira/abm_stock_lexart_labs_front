import { useContext } from 'react';
import { StockContext } from '../context/StockProvider';

const Home = () => {
  const { Products } = useContext(StockContext);
  return (
    <section>
      <ul>
        {Products.map((product) => (
          <li>{product}</li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
