import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout";
import ErrorPage from "./components/layouts/ErrorPage";
import MyFirstPage from './pages/MyFirstPage'
import MySecondPage from './pages/MySecondPage'
import MyFirstPageInside from "./pages/MyFirstPageInside";
import MySecondPageInside from "./pages/MySecondPageInside";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {index: true, element: <MyFirstPage /> },
        {path: 'firstPageInside', element: <MyFirstPageInside /> }
      ]
    },
    {
      path: '/secondPage',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {index: true, element: <MySecondPage /> },
        {path: 'secondPageInside', element: <MySecondPageInside /> }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
