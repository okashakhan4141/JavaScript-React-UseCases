import React, { Component } from "react";

// function component
const Header = () => (
  <div>
    <title>Mubeen's Profile</title>
  </div>
);

// class component
class Body extends Component {
  displayAge() {
    if (
      document.getElementById("btn_txt").innerText ===
      "Click here to show age!!!"
    )
      document.getElementById("btn_txt").innerText = "23";
    // display age
    else
      document.getElementById("btn_txt").innerText =
        "Click here to show age!!!"; // display age
  }

  render() {
    return (
      <div className="body">
        <div className="bio">
          <h2 className="txt">Name:</h2>
          <h2 className="txt">Mubeen Khan</h2>
        </div>

        <div className="bio">
          <h2 className="txt">Age:</h2>
          <button
            id="btn"
            type="button"
            className="age-btn"
            onClick={this.displayAge}
          >
            <h3 id="btn_txt">Click here to show age!!!</h3>
          </button>
        </div>
      </div>
    );
  }
}

class Profile extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}

export default Profile;
