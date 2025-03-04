import { ToastContainer } from 'react-toastify';
import './App.scss';
import Routes from './pages/Routes';
import "bootstrap/dist/js/bootstrap.bundle";
import Prompt from "../src/pages/Frontend/Prompt"
import Zocialicons from "../src/pages/Frontend/ZocialIcons"
 
function App() {
  return (
    <>

<Zocialicons/>
      <Routes />
{/* <Prompt/> */}

      <ToastContainer
      
      position="top-right"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      
      >

      </ToastContainer>


      <div className="App">
      {/* <h1></h1> */}
      {/* <h1 style={{ color: color }}>{message}</h1> */}
    </div>



    </>
  );
}

export default App;
