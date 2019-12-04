import React, { Component, useState } from "react";
import { Chart, useChartConfig } from "react-charts";
import { withAuthorization } from "../Session";
import { Container } from "reactstrap";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";
import {
  Button,
  ButtonGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import { withFirebase } from "../Firebase";
import { compose } from "recompose";
import SpaceModal from "./spaceModal";
import AddButton from "./addModal";

const INITIAL_STATE = {
  locations: [],
  docIDs: []
};

class HomePageBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.refreshState();
  }

  refreshState() {
    var _this = this;
    //  get the list of locations from the db
    const locations = this.props.firebase.firestore.collection("locations");
    let listOfLocations = [];
    let listOfIDs = [];
    locations.get().then(docs => {
      docs.forEach(element => {
        listOfLocations.push(element.data());
        listOfIDs.push(element.id);
      });
      this.setState({ locations: listOfLocations });
      this.setState({ docIDs: listOfIDs });
    });
  }

  render() {
    //  here lets do the render list for the things

    const locations = [];

    for (let i in this.state.locations) {
      let spaces = [];
      for (let j in this.state.locations[i].spaces) {
        let element = (
          <ListGroupItem
            className="justify-content-between"
            style={{ display: "flex" }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h4>{this.state.locations[i].spaces[j].Type}</h4>
              <p>Location: </p>
            </div>

            <SpaceModal
              label={this.state.locations[i].spaces[j].Type}
              occupancy={this.state.locations[i].spaces[j].Occupancy}
              price={this.state.locations[i].spaces[j].Price}
              space={this.state.locations[i].spaces[j]}
              id={this.state.docIDs[i]}
            ></SpaceModal>
          </ListGroupItem>
        );

        spaces.push(element);
      }
      spaces.push(<AddButton></AddButton>);
      let element = (
        <ListGroupItem
          style={{ background: "rgba(0,0,0,.125)" }}
          className={"justify-content-between"}
        >
          <div style={{ display: "flex", marginBottom: "0.5rem" }}>
            <h5 style={{ flexGrow: 1 }}>{this.state.locations[i].Name}</h5>{" "}
            <Button size="sm" color="primary">
              edit
            </Button>{" "}
          </div>

          <ListGroup>{spaces}</ListGroup>
        </ListGroupItem>
      );
      locations.push(element);
    }

    return (
      <Container>
        <br />
        <h2>Welcome Back !</h2>
        <br />
        <ButtonGroup style={{ width: "100%" }} size="lg">
          <Button>My Rentals</Button>
          <Button>Metrics</Button>
          <Button>Help Sections</Button>
          <Button>Account Settings</Button>
        </ButtonGroup>

        <div
          style={{
            display: "flex",
            marginTop: "2rem",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              border: "1px solid black",
              height: "16rem",
              width: "20rem",
              margin: "0 1rem"
            }}
          ></div>
          <div
            style={{
              border: "1px solid black",
              height: "16rem",
              width: "20rem",
              margin: "0 1rem"
            }}
          ></div>
        </div>
        <br />
        <div>
          <h4 styles={{ fontColor: "white" }}>My Locations</h4>
          <ListGroup>{locations}</ListGroup>
        </div>
      </Container>
    );
  }
}

const HomePage = compose(withFirebase)(HomePageBase);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
