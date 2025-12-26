import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "../features/landing/pages/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
])

function App() {
  return (
     <RouterProvider router={router} />
  )
}

export default App
