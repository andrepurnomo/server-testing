import React, { Component } from 'react';
import ActionButton from './ActionButton';

class Table extends Component {
  componentWillMount() {
    this.setState({ ...this.props.data, index: this.props.index });
  }

  render() {
    const { index, port, branch, description } = this.state;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{port}</td>
        <td>{branch}</td>
        <td>{description}</td>
        <td>
          <ActionButton port={port} />
        </td>
      </tr>
    );
  }
}

export default Table;
