import './assets/css/App.css'
import Header from './components/Header/Header';
import Home from './pages/Home';
function App() {
  return (
    <>
      <div className='container mx-auto font-lexend px-2 md:px-0'>
      <Header></Header>
      <Home></Home>
      </div>
    </>
  )
}

export default App
