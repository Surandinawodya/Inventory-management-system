import Home from './Pages/Home';
import Login from './Pages/Login';
import Admin from './Pages/Admin';
import Dashboard from './Pages/Dashboard';
import SupUser from './Pages/SupUser';
import SupAdmin from './Pages/SupAdmin';
import ItemAdmin from './Pages/ItemAdmin';
import ItemUser from './Pages/ItemUser';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import Request from './Pages/Request';
import Profile from './Pages/Profile';
import Order from './Pages/Order';
import AdminRequest from './Pages/AdminRequest';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
      <Routes>

      
      <Route path="/" element={<Home />} />
      <Route path="/Admin" element={<Admin />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/SupUser" element={<SupUser />} />
      <Route path="/SupAdmin" element={<SupAdmin />} />
      <Route path="/ItemAdmin" element={<ItemAdmin />} />
      <Route path="/ItemUser" element={<ItemUser />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Request" element={<Request />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Order" element={<Order />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/AdminRequest" element={<AdminRequest />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
