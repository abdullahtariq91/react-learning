import React, { Component } from 'react';
import Chips, { Chip } from 'react-chips';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chips: []
    }
  }

  onChange = chips => {
    this.setState({ chips });
  }

  render() {
    return (
      <div>
        <Chips
          value={this.state.chips}
          onChange={this.onChange}
          suggestions={["Your", "Data", "Here"]}

        />
      </div>
    );
  }
}