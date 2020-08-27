import React from "react";
import MultiImageInput from "react-multiple-image-input";

class StepThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onDrop(picture) {
    console.log(picture);
    const pics = []
    Object.keys(picture).forEach(e=>pics.push(picture[e]))
    this.setState({
      pictures: pics,
    });
  }
  handleClick(e) {
    e.preventDefault();
    console.log(this.state.pictures.length);
    if (!this.state.pictures.length) {
      alert("Images not found");
    } else alert("you've completed");
  }
  render() {
    return (
      <div>
        <MultiImageInput
          images={this.state.pictures}
          max={4}
          allowCrop={false}
          setImages={this.onDrop}
        />
        <button className="btn btn-success" onClick={this.handleClick}>
          Click Me to Finish
        </button>
      </div>
    );
  }
}
export default StepThree;
