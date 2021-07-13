import './App.css'
import { Route } from 'react-router-dom';
import NotificationsPage from './pages/notifications-page/NotificationsPage'
import NotificationsRecordPage from './pages/notifications-record-page/NotificationsRecordPage'


function App() {
  return (
    <div className="App">
      <Route exact path="/You-Control/" component={NotificationsPage} />
      <Route exact path="/You-Control/records" component={NotificationsRecordPage} />
    </div>
  );
}

export default App;

