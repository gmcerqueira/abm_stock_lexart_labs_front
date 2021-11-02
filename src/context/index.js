import PropTypes from 'prop-types';
import { StockProvider } from './StockProvider';

function Provider({ children }) {
  return <StockProvider>{children}</StockProvider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
