import { Row, Col } from "react-bootstrap";
import "./ChildB.css";
import { useContext } from "react";
import { DataContext } from "../../dataContext";

function ChildB(props) {
  const { color, setColor, text, setText } = useContext(DataContext);
  return (
    <div className="ChildB" style={{background: color}}>
    <Row>
      <Col>
        <h2>B</h2>
      </Col>
    </Row>
    <Row>
        <Col>
        <label>D Text</label>
         <input onChange={(e)=>setText(e.target.value)} type="text" placeholder="Type Text on D Component" />
        </Col>
    </Row>
    </div>
  );
}

export default ChildB;
