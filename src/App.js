import './App.css';
import ConsultationsPage from './components/ConsultationPage';
import Header from './components/Header';
import { Route, Switch } from 'react-router';
import ConsultationDetails from './components/ConsultationDetailsPage';
import PatientsPage from './components/PatientsPage';
import PatientDetailsPage from './components/PatientDetailsPage';

function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/consultations/:id">
          <ConsultationDetails />
        </Route>
        <Route path="/consultations/">
          <ConsultationsPage />
        </Route>
        <Route path="/patients/:id">
          <PatientDetailsPage />
        </Route>
        <Route path="/patients">
          <PatientsPage />
        </Route>
        <Route exact path="/">
          <ConsultationsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
