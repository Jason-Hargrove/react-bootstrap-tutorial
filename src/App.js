import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Card } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card>
          <Card.Body>
            <Card.Img style={{ width: "400px"}} variant="top" src="/img/the-truth.jpg"/>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>Card text...</Card.Text>

            <Button variant="primary">This is a button</Button>
          </Card.Body>
        </Card>
        <Button variant="secondary">This is a button</Button>
      </header>
    </div>
  );
}

export default App;
