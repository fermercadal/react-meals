import { useRef, useState } from "react";

import classes from "./Checkout.module.scss";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  // should create a custom hook to avoide code duplication x4

  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    zipCode: true,
    city: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const zipCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredZipCode = zipCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const validEnteredName = !isEmpty(enteredName);
    const validEnteredStreet = !isEmpty(enteredStreet);
    const validEnteredZipCode = isFiveChars(enteredZipCode);
    const validEnteredCity = !isEmpty(enteredCity);

    setFormInputsValidity({
      name: validEnteredName,
      street: validEnteredStreet,
      zipCode: validEnteredZipCode,
      city: validEnteredCity,
    });

    const formIsValid =
      validEnteredName &&
      validEnteredStreet &&
      validEnteredZipCode &&
      validEnteredCity;

    if (!formIsValid) {
      return;
    }
  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;

  const streetControlClasses = `${classes.control} ${
    formInputsValidity.street ? "" : classes.invalid
  }`;

  const zipCodeControlClasses = `${classes.control} ${
    formInputsValidity.zipCode ? "" : classes.invalid
  }`;

  const cityControlClasses = `${classes.control} ${
    formInputsValidity.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} type="text" id="name" />
        {!formInputsValidity.name && <p>Please enter a valid Name</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input ref={streetInputRef} type="text" id="street" />
        {!formInputsValidity.street && <p>Please enter a valid Street</p>}
      </div>
      <div className={zipCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input ref={zipCodeInputRef} type="text" id="postal" />
        {!formInputsValidity.zipCode && <p>Please enter a valid Zip Code</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input ref={cityInputRef} type="text" id="city" />
        {!formInputsValidity.city && <p>Please enter a valid City</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
