// import logo from './logo.svg';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Container from './components/Container';
import AddToCart from './components/AddToCart';

function App() {
  return (
  <>
  <RouterProvider router={appRouter}/>
  </>
  );
}
const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<Container/>
  },
  {
    path:'/addtocart',
    element:<AddToCart/>
  }
])

export default App;
