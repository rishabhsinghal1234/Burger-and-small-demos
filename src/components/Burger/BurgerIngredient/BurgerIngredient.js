import React from "react";
import PropTypes from "prop-types";

import "./BurgerInde.css";

class BurgerIndi extends React.Component {
  render() {
    let ing = null;

    switch (this.props.type) {
      case "bread-bottom":
        ing = <div className="BreadBottom" />;
        break;
      case "bread-top":
        ing = (
          <div className="BreadTop">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
          </div>
        );
        break;
      case "meat":
        ing = <div className="Meat" />;
        break;
      case "cheese":
        ing = <div className="Cheese" />;
        break;
      case "bacon":
        ing = <div className="Bacon" />;
        break;
      case "salad":
        ing = <div className="Salad" />;
        break;
      default:
        ing = null;
    }
    return ing;
  }
}

BurgerIndi.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIndi;
