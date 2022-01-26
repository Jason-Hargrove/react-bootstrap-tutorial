import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Alert, Breadcrumb, Card } from 'react-bootstrap';

import { Layout } from "./components/Layout"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card className="mb-3" style={{ color: "#000"}}>
          <Card.Body>
            <Card.Img className="mb-3" style={{ width: "400px"}} variant="top" src="/img/the-truth.jpg"/>
            <Card.Title>
              Card Title
            </Card.Title>
            <Card.Text>
              Card text...
            </Card.Text>
            <Button variant="primary">Read More</Button>
          </Card.Body>
        </Card>
        <Breadcrumb>
          <Breadcrumb.Item>Test 1</Breadcrumb.Item>
          <Breadcrumb.Item>Test 2</Breadcrumb.Item>
          <Breadcrumb.Item active>Test 3</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant="success">This is an Alert</Alert>
        <Button variant="secondary">This is a button</Button>
      </header>
      <Layout />
    </div>
  );
}

export default App;
