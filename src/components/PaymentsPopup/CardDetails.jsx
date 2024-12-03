import React from "react";

export default function CardDetails() {
  return (
    <div>
      <h2>Edit Payment Method</h2>
      <form>
        <label>
          Card Number
          <input type="text" />
        </label>
        <label>
          Expiry Date
          <input type="text" />
        </label>
        <label>
          CVV
          <input type="text" />
        </label>
        <label>
          Name on Card
          <input type="text" />
        </label>
        <div>
          <button>Remove</button>
          <button>Cancel</button>
          <button>Save Changes</button>
        </div>
      </form>
    </div>
  );
}
