import { Route, Routes } from 'react-router-dom';
import Portfolio from './components/Portfolio.jsx';


function App() {
 

  return (
    <>
      <div>
        <main>
          <Routes>
            <Route path = '/' element = {<Portfolio />} />
            <Route path = '/home' element = {<Portfolio />} />
          </Routes>
        </main>
        
      </div>
    </>
  )
}

export default App
