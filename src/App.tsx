import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./home/HomePage"
import NotFoundPage from "./notFound/NotFoundPage"
import DashboardPage from "./dashboard/DashboardPage"


const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/dashboard',
      element: <DashboardPage />
    },
    {
      path: '*',
      element: <NotFoundPage />
    }
  ])
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App