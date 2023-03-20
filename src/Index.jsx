import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { Container } from './container/Container';
import './Index.scss'
import { MyContext } from './context/MyContext';
import { callApi } from './components/CallApi/CallApi';
import { useState } from 'react';

function Index() {
const [dados, setDados] = useState({});

  const handleSubmit = () => {
    callApi()
      .then(response => response.json())
      .then(data => {
        setDados(data)
        console.log(data)
      })
  };  
  
  return (
 <MyContext.Provider value={{handleSubmit}}>
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
 </MyContext.Provider>
  )
}
export default Index;