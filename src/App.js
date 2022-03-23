import Menu from "./components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";


function App() {
  return (
    <div>
      <Menu />
      <h1>Hello World</h1>

      <Button variant="outline-primary">Primary</Button>

    </div>
  );
}

export default App;
