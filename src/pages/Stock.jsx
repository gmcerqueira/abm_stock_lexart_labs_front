import { useEffect, useContext } from 'react';
import StockList from '../components/StockList';
import { StockContext } from '../context/StockProvider';

function Stock() {
  const { getStock } = useContext(StockContext);

  useEffect(() => {
    getStock();
  }, []);
  return <StockList />;
}

export default Stock;
