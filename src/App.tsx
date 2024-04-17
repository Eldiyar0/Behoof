import "./App.css";
// import Header from "./components/Header/Header";
import Products from "./pages/products/products";

// const router = createBrowserRouter([
//   {
//     path: "/Prost",
//     element: <Products />,
//   },
// ]);

function App() {
  return (
    <div id="app">
      <div className="container">
        <div className="app">
          {/* <Header/> */}
          <Products />
        </div>
      </div>
    </div>
  );
}

export default App;
