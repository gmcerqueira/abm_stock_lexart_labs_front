import PropTypes from 'prop-types';

const FormInput = ({
  label, name, onChange, type = 'text',
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
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormInput;
