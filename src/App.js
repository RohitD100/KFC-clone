import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import AllRoutes from './components/AllRoutes';
import { Footer } from './components/Footer'
function App() {
  return (
    <>
      <Header />
      <AllRoutes />
      <Footer />
    </>
  );
}
export default App;
