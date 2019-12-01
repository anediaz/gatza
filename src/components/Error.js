import React from "react";

const Error = () => (
  <div className="Error">
    <h1>An error has occurred!</h1>
    <br />
    Error type: {this.props.errorType}
  </div>
);
export default Error;
