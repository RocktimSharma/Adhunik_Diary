import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./components/dashboard/Dashboard";
import CreateBlog from "./components/dashboard/CreateBlog";
import Login from "./components/dashboard/Login";

function App() {

  const router = createBrowserRouter([
    {
      element: <MainLayout/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/blog",
          element:<Blog/>,
        },
        
      ],
    },
    {
     
      element:<DashboardLayout/>,
      children:[
        {
          path:"dashboard",
          element: <Dashboard/>
        }
      ]
    },{
      path:'editor',
      element:<CreateBlog/>
    },{
      path:'login',
      element:<Login/>
    }
    
  ]);
  

    return (
      <div className="dark:bg-dark-10">
        <RouterProvider router={router} />
      </div>
    );
  }

export default App