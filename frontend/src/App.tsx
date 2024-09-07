import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import { UserProvider } from './Context/useAuth';
import { ToastContainer, toast } from 'react-toastify';


function App() {

  return (
    <>
      <UserProvider>
        <Navbar />
        <Outlet />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"   
          />
          {/* Same as */}
          <ToastContainer />
      </UserProvider>
      
    </>
  );
}
 
export default App;
