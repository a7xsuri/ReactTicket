import { Fragment, useState } from 'react';
import Ticket from './components/Ticket/Ticket';
import Header from './components/Layout/Header';
import './App.css';

function App() {

  const [prova, provafunction] = useState(false)
  
  const hideTicketCardHandler = () =>{
    provafunction(false)
  }
  const showTicketCardHandler = () =>{
    provafunction(true)
  }




  return (
    <Fragment>
      {prova && <Ticket onClose={hideTicketCardHandler}></Ticket>}      
      <Header onShow={showTicketCardHandler}></Header>
      <div className='text'>Al momento non ci sono ticket disponibili</div>
    </Fragment>
  );
}

export default App;
