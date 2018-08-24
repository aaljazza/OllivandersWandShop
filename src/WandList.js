import React, { Component } from "react";
import wands from "./wands.js";
import WandCard from "./wandCard";

class WandList extends Component {
  render() {
    let wandsList = wands.map(wand => (
      <WandCard key={wand.core + wand.length} wands={wand} />
    ));

    return <div className="row">{wandsList}</div>;
  }
}

export default WandList;
