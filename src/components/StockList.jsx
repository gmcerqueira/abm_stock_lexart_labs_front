import { useContext } from 'react';
import { StockContext } from '../context/StockProvider';

const StockList = () => {
  const { Stock, getStockItem, deleteStockItem } = useContext(StockContext);

  return (
    <table>
      <thead>
        <tr>
          <th>_id</th>
          <th>Quantity</th>
          <th>Product Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {Stock.map(({
          _id, quantity, price, product,
        }) => (
          <tr key={_id}>
            <td>{_id}</td>
            <td>{quantity}</td>
            <td>{product.name}</td>
            <td>{price}</td>
            <td>
              <button
                id={_id}
                type="button"
                onClick={({ target }) => getStockItem(target.id)}
              >
                SELECT

              </button>
              <button
                id={_id}
                type="button"
                onClick={({ target }) => deleteStockItem(target.id)}
              >
                DELETE
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

StockList.propTypes = {};

export default StockList;
