import {Row, Col} from 'react-bootstrap';
import './ChildA.css';
import ChildB from '../ChildB/ChildB';

function ChildA(props) {
  return (
    <div className="ChildA">
    <Row>
      <Col>
        <h2>A</h2>
      </Col>
    </Row>
    <Row>
        <Col>
        <ChildB  />
        </Col>
    </Row>
    </div>
  );
}

export default ChildA;