import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { Container } from './container/Container';
import './Index.scss'


function Index() {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  )
}
export default Index;