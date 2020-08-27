import React from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
class StepTwo extends React.Component {
  constructor(props) {
    super(props);
    this.desctiption = React.createRef();
    this.bedRoom = React.createRef();
    this.bathRoom = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
    //   document.getElementById('formFields').bootstrapValidator()
  }
  handleClick = (e) => {
    e.preventDefault();
    const doc = {
      desc: this.desctiption.current.value,
      bedRoom: this.bedRoom.current.value,
      bathRoom: this.bathRoom.current.value,
    };
    console.log(doc);
    this.props.handleChange(2);
  };
  render() {
    return (
      <div>
        <h1 className="badge badge-secondary">Step Two</h1>
        <form
            id="formFields"
          className="row was-validated"
          data-bv-feedbackicons-valid="glyphicon glyphicon-ok"
          data-bv-feedbackicons-invalid="glyphicon glyphicon-remove"
          data-bv-feedbackicons-validating="glyphicon glyphicon-refresh"
        >
          <table className="w-50 mx-auto">
            <tbody>
              <tr>
                <td style={{ textAlign: "right" }}>
                  <span>Enter Address: </span>
                </td>
                <td style={{ textAlign: "left" }} className="form-group">
                  <GooglePlacesAutocomplete apiKey="AIzaSyDE2xi-hl5rwwLlszAXo7TIg0nhDlIX38k" />
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "right" }}>
                  <span>BedRoom: </span>
                </td>
                <td style={{ textAlign: "left" }} className="form-group">
                  <input
                    type="number"
                    ref={this.bedRoom}
                    className="form-control"
                    maxlength="10"
                    required
                    data-bv-stringlength-message="The value must be less than 10"
                  ></input>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "right" }}>
                  <span>BathRoom: </span>
                </td>
                <td style={{ textAlign: "left" }} className="form-group">
                  <input
                    type="number"
                    ref={this.bathRoom}
                    className="form-control"
                    maxlength="5"
                    required
                    data-bv-stringlength-message="The value must be less than 5"
                  ></input>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "right" }}>
                  <span>Description: </span>
                </td>
                <td style={{ textAlign: "left" }} className="form-group">
                  <input
                    type="text"
                    ref={this.desctiption}
                    className="form-control"
                  ></input>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={this.handleClick}
                  >
                    Step Three
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
        </form>
      </div>
    );
  }
}
export default StepTwo;
