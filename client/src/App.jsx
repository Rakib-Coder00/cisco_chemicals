import './App.css';
import { Toaster } from 'react-hot-toast';
import { Header } from './components';
import { Route, Routes } from 'react-router-dom';
import { Footer, Home, NotFound } from './pages';

function App() {
  return (
    <>
      <Toaster />
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
