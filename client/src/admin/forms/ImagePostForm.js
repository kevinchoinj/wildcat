import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import Dropzone from 'react-dropzone';
import {connect} from 'react-redux';
/* https://github.com/BBB/dropzone-redux-form-example */
import PreviewImage from './PreviewImage';

const required = value => (value ? undefined : 'Required');

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

const renderDropzoneInput = (field, {nameValue}) => {
  const files = field.input.value;
  return (
    <div>
      <div>
        <Dropzone
          name={field.name}
          onDrop={( filesToUpload, e ) => field.input.onChange(filesToUpload)}
          multiple={false}
          className="admin_dropzone"
        >

          <br/>
          {field.instructions}
        </Dropzone>
      </div>
      {field.meta.touched &&
        field.meta.error &&
        <span className="error">{field.meta.error}</span>}
      <div>
        <button
          type="submit"
          className="admin_button_large"
        >
          Submit
        </button>
      </div>
      {files && Array.isArray(files) && (
        <div className="admin_form">
          {files.map((file, i) =>
            <div key={i}>
              <div>
                <div className="admin_title">
                  Preview
                </div>
                <div className="custom_all">
                  <div key={i} className="custom_wrapper">
                    <PreviewImage
                      image={file.preview}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

class ImagePostForm extends React.Component {
  render() {
    const { handleSubmit,
      error,
    } = this.props;

    return (
      <form onSubmit={handleSubmit} autoComplete="off" className="admin_form">


        <div className="admin_label">
          Title/Name
        </div>
        <Field
          name="name"
          component={RenderField}
          className="admin_form_field"
          type="text"
          validate={[required]}
          placeholder="Title"
        />

        <div className="admin_label">
          Subtitle/Description/Date
        </div>
        <Field
          name="subtitle"
          component={RenderField}
          className="admin_form_field"
          type="text"
          validate={[required]}
          placeholder="Subtitle"
        />


        <div>
          <Field
            name="image"
            component={renderDropzoneInput}
            instructions="Add Image"
          />
        </div>

        {error && <div className="form_error">{error}</div>}


      </form>
    );
  }
}

function mapStateToProps(state, prop){
  return{
    initialValues: {
      name: '',
      image: {
        data: null
      },
    },
  };
}
function mapDispatchToProps(dispatch){
  return {
  };
}

const afterSubmit = (result, dispatch) =>
  dispatch(reset('postImage'));

ImagePostForm = reduxForm({
  form: 'postImage',
  enableReinitialize: true,
  onSubmitSuccess: afterSubmit,
})(ImagePostForm);

export default connect(mapStateToProps, mapDispatchToProps)(ImagePostForm);
