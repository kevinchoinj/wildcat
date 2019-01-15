import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CustomNoWrap from 'admin/components/CustomNoWrap';
import * as imagesActions from 'actions/images';
import { sortable } from 'react-sortable';

class Item extends React.Component {
  render() {
    return (
      <div {...this.props}>
        <CustomNoWrap
          image={this.props.imageurl}
          title={this.props.title}
          subtitle={this.props.subtitle}
          position="center top"
        />
      </div>
    );
  }
}

let SortableItem = sortable(Item);

class AdminGallery extends React.Component {
  componentDidMount(){
    this.props.imagesActions.getImageUrls();
  }
  onSortItems = (items) => {
    this.props.imagesActions.sendListDatabase(items);
  }
  removeImage = (name, location) => {
    this.props.imagesActions.removeImageFile(name);
    this.props.imagesActions.removeImageUrl(location);
  }
  render() {
    const {
      items,
    } = this.props;

    let listItems;
    if (items){
      listItems = items.length > 1 ? items.map((item, i) => {
        return (
          <div key={i} className="custom_wrapper">
            <SortableItem
              key={i}
              onSortItems={this.onSortItems}
              items={items}
              sortId={i}
              imageurl={item.url}
              title={item.name}
              subtitle={item.subtitle}
            >
            </SortableItem>
            <div  className="admin_remove_image" onClick={()=>this.removeImage(item.name, i)}>Remove Image</div>
          </div>
        );
      }):null;
    }

    return (
      <div className="custom_all">
        {listItems}
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    items: state.images.urlArray,
  }),
  dispatch => ({
    imagesActions: bindActionCreators(imagesActions, dispatch),
  }),
)(AdminGallery);