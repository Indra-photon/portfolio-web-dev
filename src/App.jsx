import Homepage from './components/Homepage'
import Project from './components/Project'
import About from './components/About'
import HomepageTop from './components/HomepageTop'
import { Route, Routes } from 'react-router-dom';


function App() {
 

  return (
    <>
      <div>
        <main>
          <Routes>
            <Route path = '/' element = {<HomepageTop />} />
            <Route path = '/home' element = {<HomepageTop />} />
            <Route path='/homepage' element = {<Homepage />}/>
            <Route path='/project' element = {<Project />}/>
            <Route path='/about' element = {<About />}/>
          </Routes>
        </main>
        
      </div>
    </>
  )
}

export default App
