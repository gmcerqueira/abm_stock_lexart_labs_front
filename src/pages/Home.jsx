// import { useContext } from 'react';
import ProductForm from '../components/ProductForm';
import StockList from '../components/StockList';
// import { StockContext } from '../context/StockProvider';

const Home = () => (
  <section>
    <ProductForm />
    <StockList />
  </section>
);

export default Home;
