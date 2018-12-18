import React, { Component } from 'react';
import { HTMLTable } from '@blueprintjs/core';

import Line from './Line';

class Table extends Component {
  componentWillMount() {
    this.setState({
      datas: [
        {
          id: 1,
          port: 8101,
          branch: 'fix_analysis',
          description: 'wow'
        }
      ]
    });
  }

  render() {
    const { datas } = this.state;
    return (
      <HTMLTable
        className="bp3-html-table bp3-html-table-striped bp3-interactive .modifier"
        style={{ width: '100%' }}
      >
        <thead>
          <tr>
            <th>NO</th>
            <th>PORT</th>
            <th>BRANCH</th>
            <th>DESCRIPTION</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => (
            <Line key={data.id} data={data} index={index} />
          ))}
        </tbody>
      </HTMLTable>
    );
  }
}

export default Table;
