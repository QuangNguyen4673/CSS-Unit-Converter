import "./assets/css/style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
function App() {
  const [fontSize, setfontSize] = useState(16);
  const [desireLengthX, setDesireLengthX] = useState(0);
  const [desireLengthY, setDesireLengthY] = useState(0);
  return (
    <div className="app">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Initial Font Size (px)</Form.Label>
          <Form.Control
            type="text"
            value={fontSize}
            onChange={(e) => setfontSize(e.target.value)}
          />
        </Form.Group>
        <div className="flex-wrapper">
          <Form.Group className="mb-3" controlId="desireLengthX">
            <Form.Label>Desire length X (px)</Form.Label>
            <Form.Control
              type="text"
              value={desireLengthX}
              onChange={(e) => setDesireLengthX(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="desireLengthY">
            <Form.Label>Desire length Y (px)</Form.Label>
            <Form.Control
              type="text"
              value={desireLengthY}
              onChange={(e) => setDesireLengthY(e.target.value)}
            />
          </Form.Group>
        </div>
        <div className="flex-wrapper">
          <Form.Group className="mb-3" controlId="toRemX">
            <Form.Label>To Rem X</Form.Label>
            <Form.Control type="text" value={desireLengthX / fontSize} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="toRemY">
            <Form.Label>To Rem Y</Form.Label>
            <Form.Control type="text" value={desireLengthY / fontSize} />
          </Form.Group>
        </div>
      </Form>
    </div>
  );
}

export default App;
