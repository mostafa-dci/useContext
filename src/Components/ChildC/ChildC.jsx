import { Col, Row } from "react-bootstrap";
import "./ChildC.css";
import ChildD from "../ChildD/ChildD";
function ChildC(props) {
  return (
    <div className="ChildC">
    <Row >
      <Col>
        <h2>C</h2>
      </Col>
    </Row>
<Row>
    <Col>
    <ChildD changeColor={props.changeBColor} text={props.dText} />
    </Col>
</Row>
    </div>
  );
}

export default ChildC;
