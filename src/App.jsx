import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {Container, Row, Col} from 'react-bootstrap';
import Controls from "./Components/Controls/Controls";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="App" style={{background: theme.background, color: theme.foreground}}>
      <Container>
        <Row>
          <Col>
            <h1>React Bootstrap</h1>
          </Col>
        </Row>
        <Row>
          <Col xl="4">
            <Controls />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
