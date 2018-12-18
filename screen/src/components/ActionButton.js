import React, { Component } from 'react';
import {
  Menu,
  MenuItem,
  MenuDivider,
  Button,
  Popover,
  Position,
  Alert,
  Intent
} from '@blueprintjs/core';

export class ActionButton extends Component {
  componentWillMount() {
    this.setState({
      delAlert: false
    });
  }

  closeModal = action => this.setState({ [action]: false });
  openModal = action => this.setState({ [action]: true });
  deleteAction = () => {
    console.log('remove port', this.props.port);
    this.closeModal('delAlert');
  };
  dockerUp = () => {
    console.log('Docker up', this.props.port);
    this.loadStart();
    setTimeout(this.loadEnd, 5000);
  };
  dockerDown = () => {
    console.log('Docker down', this.props.port);
    this.loadStart();
    setTimeout(this.loadEnd, 5000);
  };
  dockerRestart = port => {
    console.log('Docker restart', this.props.port);
    this.loadStart();
    setTimeout(this.loadEnd, 5000);
  };
  loadStart = () => this.setState({ loading: true });
  loadEnd = () => this.setState({ loading: false });

  render() {
    const { delAlert } = this.state;
    const { port } = this.props;
    const menu = (
      <Menu>
        <MenuDivider title="COMMON" />
        <MenuItem icon="clipboard" text="Edit Description" />
        <MenuItem
          icon="trash"
          text="Remove"
          onClick={this.openModal.bind(this, 'delAlert')}
        />
        <MenuDivider title="DOCKER" />
        <MenuItem icon="tick" text="Docker UP" onClick={this.dockerUp} />
        <MenuItem icon="cross" text="Docker DOWN" onClick={this.dockerDown} />
        <MenuItem
          icon="refresh"
          text="Docker RESTART"
          onClick={this.dockerRestart}
        />
        <MenuDivider title="GIT" />
        <MenuItem icon="git-pull" text="Git PULL" />
      </Menu>
    );

    const deleteAlert = (
      <Alert
        cancelButtonText="Cancel"
        confirmButtonText="Remove"
        icon="trash"
        intent={Intent.DANGER}
        isOpen={delAlert}
        onCancel={this.closeModal.bind(this, 'delAlert')}
        onConfirm={this.deleteAction}
      >
        <p>Are you sure to remove {port}?</p>
      </Alert>
    );

    return (
      <React.Fragment>
        <Popover content={menu} position={Position.TOP_RIGHT}>
          <Button
            text="ACTIONS"
            loading={this.state.loading}
            disabled={this.state.loading}
          />
        </Popover>
        {deleteAlert}
      </React.Fragment>
    );
  }
}

export default ActionButton;
