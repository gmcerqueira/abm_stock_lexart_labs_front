import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const FormInput = ({
  label, name, onChange, type, value,
}) => (
  <Form.Group>
    <Form.Label htmlFor={name}>
      {label}
      <Form.Control type={type} name={name} value={value} onChange={onChange} />
    </Form.Label>
  </Form.Group>
);

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

FormInput.defaultProps = {
  type: 'text',
};

export default FormInput;
