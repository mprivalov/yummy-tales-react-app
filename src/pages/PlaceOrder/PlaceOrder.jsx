import React, { useContext, useState } from "react";
import { send } from "emailjs-com";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { bagItems, recipes_list } = useContext(StoreContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleOrderSubmit = (e) => {
    e.preventDefault();

    const orderDetails = recipes_list
      .filter((item) => bagItems[item.id] > 0)
      .map((item) => `${item.name}: ${bagItems[item.id]} pcs.`)
      .join(", ");

    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      to_email: email,
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
        // logic
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
        // logic
      });
  };
  return (
    <div className="order">
      <form className="place-order" onSubmit={handleOrderSubmit}>
        <div className="order-left-side">
          <h4>order information</h4>
          <input
            type="text"
            placeholder="First name..."
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last name..."
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="E-mail..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
    </div>
  );
};

export default PlaceOrder;
