import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Information from './Components/Information/Information';
import Experience from './Components/Experience/Experience';
import LanguageList from './Components/Language/LanguageList';
import Skills from './Components/Skills/Skills';
import Education from './Components/Education/Education';

function App() {
  return (
    <div>
      <Navbar />
      <div id="about">
        <Information />
      </div>
      <div id="languages">
        <LanguageList />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="skills">
        <Skills />
      </div>
    </div>
  );
}

export default App;
