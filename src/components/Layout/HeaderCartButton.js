import classes from "./HeaderCartButton.module.scss";

import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span classeName={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
