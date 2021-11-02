import PropTypes from 'prop-types';

const FormInput = ({
  label, name, onChange, type,
}) => (
  <div>
    <label htmlFor={name}>
      {label}
      <input type={type} name={name} onChange={onChange} />
    </label>
  </div>
);

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

FormInput.defaultProps = {
  type: 'text',
};

export default FormInput;
