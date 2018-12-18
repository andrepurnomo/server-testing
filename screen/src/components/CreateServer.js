import React, { Component } from 'react';
import {
  Button,
  Dialog,
  Classes,
  InputGroup,
  FormGroup,
  Intent,
  HTMLSelect,
  Switch
} from '@blueprintjs/core';
import { AppToaster } from './AppToaster';

export class CreateServer extends Component {
  componentWillMount() {
    this.setState({
      isOpen: false,
      canOutsideClickClose: false,
      runDocker: false,
      port: '',
      branch: '',
      description: ''
    });
  }

  render() {
    const { runDocker, port, description } = this.state;

    return (
      <React.Fragment>
        <Button intent={Intent.PRIMARY} onClick={this.handleOpen}>
          Create New Server
        </Button>
        <Dialog
          icon="info-sign"
          onClose={this.handleClose}
          title="Create New Server"
          {...this.state}
        >
          <div className={Classes.DIALOG_BODY}>
            <FormGroup label="Server Port">
              <InputGroup
                name="port"
                value={port}
                placeholder="8069"
                onChange={this.handleChange}
                intent={Intent.NONE}
              />
            </FormGroup>
            <FormGroup label="Branch">
              <HTMLSelect
                name="branch"
                className="bp3-fill"
                onChange={this.handleChange}
              >
                <option value="">Select branch</option>
                <option value="fix_order_analysis">fix_order_analysis</option>
              </HTMLSelect>
            </FormGroup>
            <FormGroup label="Description">
              <textarea
                name="description"
                className="bp3-input bp3-fill"
                intent={Intent.NONE}
                placeholder="Some of description"
                onChange={this.handleChange}
                value={description}
              />
            </FormGroup>
            <Switch
              checked={runDocker}
              label="Run after finish"
              onChange={() =>
                this.setState({ runDocker: !this.state.runDocker })
              }
            />
          </div>
          <div className={Classes.DIALOG_FOOTER}>
            <div className={Classes.DIALOG_FOOTER_ACTIONS}>
              <Button onClick={this.handleClose}>Close</Button>
              <Button intent={Intent.PRIMARY} onClick={this.create}>
                Create
              </Button>
            </div>
          </div>
        </Dialog>
      </React.Fragment>
    );
  }

  handleOpen = () => this.setState({ isOpen: true });
  handleClose = () => this.setState({ isOpen: false });
  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });
  create = () => {
    const { port, branch } = this.state;
    if (port && branch) {
      this.setState({
        isOpen: false,
        port: '',
        branch: '',
        description: '',
        runDocker: false
      });
      AppToaster.show({
        message: `Create server ${port} on progress..`,
        intent: Intent.SUCCESS
      });
      console.log(this.state);
    } else {
      AppToaster.show({
        message: 'Please complete form',
        intent: Intent.WARNING
      });
    }
  };
}

export default CreateServer;
