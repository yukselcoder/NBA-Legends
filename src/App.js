
import Container from "react-bootstrap/Container";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";

function App() {
  return (
    <Container className="textcenter mt-4">
      <Header />
      <CardContainer />
    </Container>
  );
}

export default App;
