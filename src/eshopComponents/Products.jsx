import React from "react";
import { useState } from "react";
import { useReducer } from "react";
import Cards from "./Cards";

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: new Date(),
          name: action.payload.name,
          price: action.payload.price,
          isVisible: false,
        },
      ];
    case "setVisible":
     return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, isVisible: !item.isVisible };
        }
        return item; 
      });
      case "deleted":
        return state.filter((item)=>{
          return item.id !== action.payload.id
        })
  }
};
const Products = () => {
  const [state, distpatch] = useReducer(reducer, []);
  console.log(state);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const productNameChangeHandler = (e) => {
    setProductName(e.target.value);
  };
  const productPriceChangeHandler = (e) => {
    setProductPrice(e.target.value);
  };
  const addProductHandler = (e) => {
    e.preventDefault();
    distpatch({
      type: "add",
      payload: { price: productPrice, name: productName },
    });
  };
  return (
    <div>
      <form onSubmit={addProductHandler}>
        <label>name:</label>
        <input
          type="text"
          value={productName}
          onChange={productNameChangeHandler}
        />
        <label>price:</label>
        <input
          type="number"
          value={productPrice}
          onChange={productPriceChangeHandler}
        />
        <button type="submit">add</button>
      </form>
      <Cards data={state} distpatch={distpatch} />
    </div>
  );
};

export default Products;
