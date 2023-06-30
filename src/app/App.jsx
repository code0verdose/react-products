
import { Layout } from "../layout/Layout";
import "./global/styles/global.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./global/providers/Routes/Router";
import { DataProvider } from "./global/providers/DataProvider";



function App() {
  return (
    <DataProvider>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </DataProvider>
  );
}

export default App;
