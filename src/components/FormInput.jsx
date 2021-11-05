import PropTypes from 'prop-types';

const FormInput = ({
  label, name, onChange, type, value,
}) => (
  <div>
    <label htmlFor={name}>
      {label}
      <input type={type} name={name} value={value} onChange={onChange} />
    </label>
  </div>
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
