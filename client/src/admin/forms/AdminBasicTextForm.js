import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import {connect} from 'react-redux';
/* https://github.com/BBB/dropzone-redux-form-example */

const RenderField = ({
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

class AdminBasicTextForm extends React.Component {
  render() {
    const { handleSubmit,
      error,
    } = this.props;

    return (
      <form onSubmit={handleSubmit} autoComplete="off" className="admin_form">


        <div className="admin_label">
          Gold Text (Label)
        </div>
        <Field
          name="label"
          component={RenderField}
          className="admin_form_field"
          type="text"
          placeholder="Label"
        />

        <div className="admin_label">
          White Text (Body)
        </div>
        <Field
          name="body"
          component={RenderField}
          className="admin_form_field"
          type="text"
          placeholder="Body"
        />

        {error && <div className="form_error">{error}</div>}
        <button
          type="submit"
          className="admin_button_large"
        >
          Submit
        </button>

      </form>
    );
  }
}

function mapStateToProps(state, prop){
  return{
    initialValues: {

    },
  };
}
function mapDispatchToProps(dispatch){
  return {
  };
}

const afterSubmit = (result, dispatch) =>
  dispatch(reset('adminBasic'));


AdminBasicTextForm = reduxForm({
  form: 'adminBasic',
  enableReinitialize: true,
  onSubmitSuccess: afterSubmit,
})(AdminBasicTextForm);

export default connect(mapStateToProps, mapDispatchToProps)(AdminBasicTextForm);
