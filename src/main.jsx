import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LoginForm, SignupForm } from './components/index.js'
import { Provider } from 'react-redux'
import store from './store/store.js'
import {HomePage, LoginPage, SignupPage, InstallApp} from "./pages"




const router = createBrowserRouter([{
  path: "/",
  element: <App/>,
  children: [
    {
      path: "/",
      element: <HomePage/>
    },
    {
      path: "/login",
      element: <LoginPage/>
    },
    {
      path: "/signup",
      element: <SignupPage/>
    },
    {
      path: "/install",
      element: <InstallApp/>
    }
  ]
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
