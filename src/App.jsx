import HomePage from "./routes/homepage/HomePage";
import Layout from "./routes/layout/layout";
import ListPage from "./routes/listPage/ListPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SinglePage from "./routes/singlePage/SinglePage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
