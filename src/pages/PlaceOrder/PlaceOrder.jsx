import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { send } from "emailjs-com";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import { faCheck, faExclamation } from "@fortawesome/free-solid-svg-icons";

const PlaceOrder = () => {
  const { bagItems, recipes_list } = useContext(StoreContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // Для успешного сообщения
  const [errorMessage, setErrorMessage] = useState(""); //

  const handleOrderSubmit = (e) => {
    e.preventDefault();

    const orderDetails = recipes_list
      .filter((item) => bagItems[item.id] > 0)
      .map((item) => `${item.name}: ${bagItems[item.id]} pcs.`)
      .join(", ");

    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      to_email: email,
      phone: phone,
      message: orderDetails,
    };

    send(
      "service_yummy_tales",
      "template_yummy_tales",
      templateParams,
      "aNrbN4YxfoErekmDy"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setSuccessMessage("Order successfully created!");
        setErrorMessage("");
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
        setSuccessMessage("");
        setErrorMessage("Failed to send order.");
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      });
  };
  return (
    <div className="order">
      <form className="place-order" onSubmit={handleOrderSubmit}>
        <div className="order-left-side">
          <h4>order information</h4>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            type="email"
            pattern=".+@example\.com"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            pattern="[0-9]{3}"
            placeholder="2#######"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="order-right-side">
          {recipes_list.map((item, index) => {
            if (bagItems[item.id] > 0) {
              return (
                <div key={item.id}>
                  <div className="bag-items-title bag-items-item">
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                    <p>{bagItems[item.id]}</p>
                  </div>
                  <hr />
                </div>
              );
            }
            return null;
          })}
          <button type="submit">proceed to order</button>
        </div>
      </form>
      {successMessage && (
        <div className="success-message">
          <FontAwesomeIcon icon={faCheck} />
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="error-message">
          <FontAwesomeIcon icon={faExclamation} />
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default PlaceOrder;
