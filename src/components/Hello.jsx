import React from "react";

export class Hello extends React.Component {
  constructor() {
    super();
    this.state = { name: "shivani" };
    this.HandleClick = this.HandleClick.bind(this);
  }

  HandleClick() {
    // H1 element ko pakadna
    const hello = document.getElementById("hello");

    // Naya text create karna
    const newText = "Hello " + this.state.name;

    // Purane text ko leke usme naya text add karna
    hello.innerText = hello.innerText + "  " + newText;
  }

  render() {
    return (
      <>
        <h1 id="hello"></h1>
        <button onClick={this.HandleClick}>Greet</button>
      </>
    );
  }
}
