import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'

function App() {
  return (
    <div id="app">
      <div className="container">
        <div className="app">
          <Header/>
          <Home/>
        </div>
      </div>
    </div>
  )
}

export default App
