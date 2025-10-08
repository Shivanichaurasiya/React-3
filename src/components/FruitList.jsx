import React from "react";

export function FruitList() {
  const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

  return (
    <div>
      <h2>Fruit List</h2>
      <ul>
        {fruits.map((fruit, index) => (
          fruit ==="Mango" ? (
          <li key={index}>
            {index} - {fruit}
          </li>
          ):null
        ))}
      </ul>
    </div>
  );
}
