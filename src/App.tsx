import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "@home/HomePage"
import NotFoundPage from "@notFound/NotFoundPage"
import DashboardPage from "@dashboard/DashboardPage"
import EditPage from "@edit/EditPage"
import CreatePage from "@create/CreatePage"


const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/dashboard',
      element: <DashboardPage />
    },{
      path: '/edit/:id',
      element: <EditPage />
    },
    {
      path: '/create',
      element: <CreatePage />
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