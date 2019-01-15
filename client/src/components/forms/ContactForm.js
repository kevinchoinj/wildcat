import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';

const required = value => (value ? undefined : 'Required');

const RenderField = ({
  input,
  type,
  label,
  meta: { touched, error, warning }
}) => (
  <div>
    <label className="contact_label">{label}</label><br/>
    <input {...input}
      type={type}
      className="contact_input"
    />
    {touched &&
      ((error && <span className="form_error">{error}</span>) ||
        (warning && <span className="form_error">{warning}</span>))}
  </div>
);

const RenderTextarea = ({
  input,
  type,
  label,
  meta: { touched, error, warning }
}) => (
  <div>
    <div className="form__label">
      {label}
    </div>
    <textarea {...input}
      rows= {6}
      type={type}
      className="contact_textarea"
    />
    {touched &&
      ((error && <span className="form_error">{error}</span>) ||
        (warning && <span className="form_error">{warning}</span>))}
  </div>
);

class AdoptForm extends React.Component {
  render() {
    const { handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit} autoComplete="off">

        <div>
          <div className="form__row">
            <Field
              name="name"
              component={RenderField}
              type="text"
              label="Name"
            />
          </div>

          <div className="form__row">
            <Field
              name="email"
              component={RenderField}
              type="text"
              label="Email"
              validate={[required]}
            />
          </div>

          <div className="form__row">
            <Field
              name="subject"
              component={RenderField}
              type="text"
              label="Subject"
            />
          </div>

          <div className="form__row">
            <Field
              name="message"
              component={RenderTextarea}
              type="text"
              label="Message"
            />
          </div>

          <div>
            <button
              type="submit"
              className="contact_button"
            >
              Submit
            </button>
          </div>

        </div>
      </form>
    );
  }
}

function mapStateToProps(){
  return{
    initialValues: {
    },
  };
}
function mapDispatchToProps(){
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({
    form: 'contact',
    enableReinitialize: true,
  })(AdoptForm)
);
