import React, { Component } from "react";
import { connect } from "react-redux";

import Alerts from "./Alerts";

class AlertContainer extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "REQUEST_ALERTS_LISTS" });
  }

  render() {
    return <Alerts />;
  }
}

export default connect()(AlertContainer);
