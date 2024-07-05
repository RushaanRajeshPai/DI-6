import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from './Dashboard';
import Message from './Message';
import Project from './Project';
import Settings from './Settings';
import Statistics from './Statistics';
import Analytics from './Analytics';
import LogOut from './LogOut';


function App() {
  return (
    <div>
      <BrowserRouter >
        <Routes>
          <Route path = "/" element={<Dashboard />}/>
          <Route path = "project" element={<Project />}/>
          <Route path="analytics" element={<Analytics />}/>
          <Route path="statistics" element={<Statistics />}/>
          <Route path="message" element={<Message />}/>
          <Route path="settings" element={<Settings />}/>
          <Route path="logout" element={<LogOut />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
