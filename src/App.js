import { Fragment } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "./Components/Event/EventDashboard";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Container className="main">
        {" "}
        <EventDashboard />
      </Container>
    </Fragment>
  );
}

export default App;
