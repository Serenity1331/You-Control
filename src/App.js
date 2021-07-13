import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NotificationsPage from './pages/notifications-page/NotificationsPage'
import NotificationsRecordPage from './pages/notifications-record-page/NotificationsRecordPage'


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={NotificationsPage} />
        <Route exact path="/records" component={NotificationsRecordPage} />
      </div>
    </Router>
  );
}

export default App;

