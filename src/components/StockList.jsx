import { useContext } from 'react';
import { StockContext } from '../context/StockProvider';

const StockList = () => {
  const { Stock } = useContext(StockContext);

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
          <tr id={_id}>
            <td>{_id}</td>
            <td>{quantity}</td>
            <td>{product.name}</td>
            <td>{price}</td>
            <td>
              <button type="button">SELECT</button>
              <button type="button">DELETE</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

StockList.propTypes = {};

export default StockList;
