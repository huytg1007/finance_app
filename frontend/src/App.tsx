import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import { UserProvider } from './Context/useAuth';
import { ToastContainer } from 'react-toastify';


function App() {


  return (
    <>

      <UserProvider>
        <Navbar />
        <Outlet />
        <ToastContainer />
      </UserProvider>
      
    </>
  );
}

export default App;
