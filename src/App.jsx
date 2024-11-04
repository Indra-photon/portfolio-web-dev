
import About from './components/About'
import HomepageTop from './components/HomepageTop'
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
            <Route path='/homepage' element = {<Portfolio />}/>
            <Route path='/about' element = {<About />}/>
          </Routes>
        </main>
        
      </div>
    </>
  )
}

export default App
