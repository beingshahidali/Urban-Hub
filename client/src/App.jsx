import HomePage from "./routes/homepage/HomePage";
import Layout from "./routes/layout/layout";
import ListPage from "./routes/listPage/ListPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SinglePage from "./routes/singlePage/SinglePage";
// import Profile from "./routes/profile/Profile";
import Login from "./routes/login/Login";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        // {
        //   path: "/profile",
        //   element: <ProfilePage />,
        // },
        {
          path: "/login",
          element: <Login />,
        },
        // {
        //   path: "/register",
        //   element: <Register />,
        // },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
