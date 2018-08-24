import React, { Component } from "react";

class WandCard extends Component {
  render() {
    const wands = this.props.wands;
    return (
      <div style={{ margin: 20 }}>
        <br />
        <div className="card col-9">
          <img
            className="card-img-top rounded mx-auto d-block"
            style={{ height: 200, width: 200 }}
            src={wands.imageUrl}
            alt="Card image cap Responsive image"
          />
          <div className="card-body">
            <h5 className="card-title">{wands.core}</h5>
            <p className="card-text">
              {`Type of wood = ${wands.wood}; Length = ${wands.length} inches`}
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default WandCard;
