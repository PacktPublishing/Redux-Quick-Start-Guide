import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, Avatar } from 'antd';

class DoctorList extends Component {
  renderItem = item => (
    <List.Item>
      <List.Item.Meta
        title={item.name}
        avatar={<Avatar size="large">{(item.name || '').charAt(0)}</Avatar>}
        description={item.email}
      />
    </List.Item>
  );

  render() {
    const { dataSource, keyword = '' } = this.props;

    if (!keyword) {
      return null;
    }

    return (
      <div className="list-doctor-containers">
        <h1>Search of {keyword}</h1>
        <List
          {...this.props}
          dataSource={dataSource}
          renderItem={this.renderItem}
        />
      </div>
    );
  }
}

DoctorList.propTypes = {
  dataSource: PropTypes.array.isRequired,
};

export default DoctorList;
