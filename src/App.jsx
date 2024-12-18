import { Route, Routes } from 'react-router-dom';
import Portfolio from './components/Portfolio.jsx';
import Pageprojects from './components/Pageprojects.jsx';


function App() {
 

  return (
    <>
      <div>
        <main>
          <Routes>
            <Route path = '/' element = {<Portfolio />} />
            <Route path = '/home' element = {<Portfolio />} />
            <Route path = '/all-projects' element = {<Pageprojects />} />
          </Routes>
        </main>
        
      </div>
    </>
  )
}

export default App
