import React from "react";

class RecipeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      img: this.props.img,
      cals: this.props.cals,
    };
  }

  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <img src={this.state.img} alt="ooops"></img>
        <h4>{this.state.name}</h4>
      </div>
    );
  }
}

export default RecipeCard;
