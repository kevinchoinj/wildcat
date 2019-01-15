import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as adminActions from 'actions/admin';
import { sortable } from 'react-sortable';
import Item from 'admin/components/AboutItem';

let SortableItem = sortable(Item);

class AdminStats extends React.Component {
  onSortItems = (items) => {
    this.props.adminActions.sendSessionsText(items);
  }
  removeText = (location) => {
    this.props.adminActions.removeSessionsText(location);
  }
  render() {
    const {
      items,
    } = this.props;

    let listItems;
    if (items){
      listItems = items.length > 1 ? items.map((item, i) => {
        return (
          <div key={i} className="admin_sortable">
            <SortableItem
              key={i}
              onSortItems={this.onSortItems}
              items={items}
              sortId={i}
              label={item.label}
              body={item.body}
            >
            </SortableItem>
            <div
              className="about_remove"
              onClick={()=>this.removeText(i)}
            >
              Remove Text Line
            </div>
          </div>
        );
      }):(
        <div>
          <SortableItem
            label={items[0]?items[0].label:null}
            body={items[0]?items[0].body:null}
          />
          <div
            className="about_remove"
            onClick={()=>this.removeText(0)}
          >
            Remove Text Line
          </div>
        </div>
      );
    }

    return (
      <div className="about_full">
        {listItems}
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    items: state.admin.aboutSessions,
  }),
  dispatch => ({
    adminActions: bindActionCreators(adminActions, dispatch),
  }),
)(AdminStats);