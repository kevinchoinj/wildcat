import React from 'react';
import { Field, reduxForm } from 'redux-form';

const renderField = ({
  input,
  type,
  placeholder,
  meta: { touched, error, warning }
}) => (
  <div>
    <input {...input}
      placeholder={placeholder}
      type={type}
      className="user_form_field"
    />
    {touched &&
      ((error && <span className="form_error">{error}</span>) ||
        (warning && <span className="form_error">{warning}</span>))}
  </div>
);

const LoginForm = props => {
  const { handleSubmit, error } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="spacing_bottom__large">
        <div className="admin_label">
          Email Address
        </div>
        <Field
          name="email"
          placeholder="name@example.com"
          type="text"
          component={renderField}
        />
      </div>
      <div className="spacing_bottom__large">
        <div className="admin_label">
          Password
        </div>
        <Field
          name="password"
          placeholder="Password"
          type="password"
          component={renderField}
        />
      </div>
      {error && <strong>{error}</strong>}
      <div className="user_row">
        <button
          type="submit"
          className="admin_button_large"
        >
          Log In
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'login',
  enableReinitialize: true,
})(LoginForm);
