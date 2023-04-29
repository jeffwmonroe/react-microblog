import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Posts from "./components/Posts"
import Body from "./components/Body"
function App() {

  // const posts = [];
  return (
      <Container fluid className="App">
        <Header />
        <Body sidebar>
            <Posts />
        </Body>
      </Container>
  );
}

export default App;
