import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./MainRoutes";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          theme="light"
        />
        <MainRoutes />
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
