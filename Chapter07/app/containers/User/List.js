import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { List, Avatar, Button, Modal } from 'antd';
import { FormattedHTMLMessage } from 'react-intl';
import Message from './messages';

class UserList extends Component {
  form = React.createRef();

  onRemove = item => {
    Modal.confirm({
      title: 'Confirm delete?',
      content: 'Are you sure want to delete this user?',
      okText: 'Yes',
      cancelText: 'Cancel',
      onOk: () => {
        this.props.onRemove(item.id);
      },
    });
  };

  renderItem = item => (
    <List.Item>
      <List.Item.Meta
        title={
          <div>
            {item.name}
            <span> (role - {item.role})</span>
          </div>
        }
        avatar={<Avatar size="large">{(item.name || '').charAt(0)}</Avatar>}
        description={item.email}
      />
      <div className="action">
        <Button
          key="view"
          icon="eye"
          size="small"
          shape="circle"
          type="primary"
          className="btn"
          style={{ marginRight: 5 }}
          onClick={() => this.props.history.push(`/users/${item.id}/edit`)}
        />
        <Button
          key="remove"
          size="small"
          shape="circle"
          type="danger"
          icon="close"
          className="btn"
          onClick={() => this.onRemove(item)}
        />
      </div>
    </List.Item>
  );

  render() {
    const { dataSource, keyword = '' } = this.props;

    return (
      <div className="list-user-containers">
        {keyword && <h1>Search of {keyword}</h1>}
        <Button
          type="primary"
          onClick={() => this.props.history.push('/users/add')}
        >
          <FormattedHTMLMessage {...Message.addUser} />
        </Button>
        <List dataSource={dataSource} renderItem={this.renderItem} />
      </div>
    );
  }
}

UserList.propTypes = {
  onReload: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  dataSource: PropTypes.array.isRequired,
};

export default withRouter(UserList);
