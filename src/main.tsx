import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App"
import "./index.css";
import MyRoutes from './Routes/MyRoutes'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
      <App/>
      <MyRoutes/>
  </BrowserRouter>
);
