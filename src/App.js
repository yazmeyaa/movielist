import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import {Container} from './styles'
import { Content } from "./components/Content/Content";

function App() {
  return (
    <Container>
      <Header />
      <Content />
      <Footer />
    </Container>
  );
}

export default App;
