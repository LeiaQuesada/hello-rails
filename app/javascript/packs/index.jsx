import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import PropTypes from "prop-types";

const Hello = (props) => <div>Hello {props.name}!</div>;

Hello.defaultProps = {
  name: "David",
};

Hello.propTypes = {
  name: PropTypes.string,
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Hello name="Techtonica" />,
    document.body.appendChild(document.createElement("div"))
  );
});
