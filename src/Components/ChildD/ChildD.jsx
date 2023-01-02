import {Row, Col, Button} from 'react-bootstrap';
import './ChildD.css';
import { useContext } from "react";
import { DataContext } from "../../dataContext";

function ChildD(props) {
  const { color, setColor, text, setText } = useContext(DataContext);
  return (
    <div className="ChildD">
    <Row>
      <Col>
        <h2>D</h2>
      </Col>
    </Row>
    <Row>
        <Col>
         <Button onClick={()=>setColor()}>Change (B) Background</Button>
        </Col>
    </Row>
    <Row>
        <Col>
          <p>{text}</p>
        </Col>
    </Row>
    </div>
  );
}   

export default ChildD;