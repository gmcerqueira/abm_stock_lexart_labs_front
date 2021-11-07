import { useContext } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { StockContext } from '../context/StockProvider';

const StockList = () => {
  const { Stock, getStockItem, deleteStockItem } = useContext(StockContext);

  return (
    <section className="text-center mx-auto mt-5 w-75">
      <h2>Products</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>_id</th>
            <th>Quantity</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Actions</th>
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
                <Link to="/">
                  <Button
                    id={_id}
                    onClick={({ target }) => getStockItem(target.id)}
                    className="me-3"
                  >
                    SELECT
                  </Button>
                </Link>
                <Button
                  id={_id}
                  type="button"
                  onClick={({ target }) => deleteStockItem(target.id)}
                  variant="danger"
                >
                  DELETE
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>

  );
};

StockList.propTypes = {};

export default StockList;
