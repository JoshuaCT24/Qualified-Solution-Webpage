import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes/AppRoutes';
import { Toaster } from 'react-hot-toast';


export const toastStyleSuccess = {
  style: {
    width: "max-content",
    padding: '20px 25px',
    color: '#364e80',
    boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
    borderRadius: "50px"
  }
}
export const toastStyleError = {
  style: {
    width: "max-content",
    padding: '20px',
    color: '#364e80',
    boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
    borderRadius: "50px"
  },
  iconTheme: {
    primary: '#ef7b15',
    secondary: '#FFFAEE',
  },
}
function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />
    </BrowserRouter>
  );
}

export default App;
