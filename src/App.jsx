import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import {DataProvider} from "./dataContext";
import { Container, Row, Col } from "react-bootstrap";
import ChildA from "./Components/ChildA/ChildA";
import ChildB from "./Components/ChildB/ChildB";
import ChildC from "./Components/ChildC/ChildC";

function App() {
  const [b_background , setBBackground] = useState("orange");
  const [dText, setDText] = useState("")
  const changebBackGroung = ()=>{
    setBBackground("green");
  }

  const changeDText = (text)=>{
    setDText(text);
  }
  return (
    <DataProvider>
    <Container className="App">

      <Row>
        <h1>App Component</h1>
      </Row>
      <Row>
        <Col>
          <ChildA />
        </Col>
        <Col>
          <ChildC />
        </Col>
      </Row>
    </Container>
    </DataProvider>
  );
}

export default App;
