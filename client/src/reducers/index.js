import pages from 'reducers/pages';
import scroll from 'reducers/scroll';
import { reducer as reducerForm } from 'redux-form';
import images from 'reducers/images';
import adminmenu from 'reducers/adminmenu';
import admin from 'reducers/admin';
import authentication from 'reducers/authentication';
import transition from 'reducers/transition';
import contact from 'reducers/contact';

const reducers={
  pages,
  scroll,
  authentication,
  form: reducerForm,
  images,
  adminmenu,
  admin,
  transition,
  contact,
};

export default reducers;