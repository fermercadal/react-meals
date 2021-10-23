import { useContext, useEffect, useState } from "react";

import CartContext from "../../store/cart-context";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.scss";

const HeaderCartButton = (props) => {
  const [btnIsHigh, setBtnIsHigh] = useState(false);

  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const itemsAmount = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHigh && classes.bump}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHigh(true);

    const timer = setTimeout(() => {
      setBtnIsHigh(false);
    }, 320);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{itemsAmount}</span>
    </button>
  );
};

export default HeaderCartButton;
