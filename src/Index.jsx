import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Container } from './container/Container';
import './Index.scss'


function Index() {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  )
}
export default Index;