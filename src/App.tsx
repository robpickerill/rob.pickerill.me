import './App.css';
import ContactInfo from './components/about';
import { Summary } from './components/summary';
import Container from 'react-bootstrap/Container';
import { WorkExperience } from './components/workexperience';
import { Education } from './components/education';
import { Certifications } from './components/certifications';
import { Skills } from './components/skills';


function App() {
  return (
    <Container>
      <div className="App">
        <ContactInfo />
        <Summary />
        <WorkExperience />
        <Education />
        <Certifications />
        <Skills />
      </div>
    </Container>
  );
}

export default App;
