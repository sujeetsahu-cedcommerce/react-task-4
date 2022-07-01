// import logo from './logo.svg';
import './App.css';
import "./style.css";
import ComponentNavbar from './ComponentNavbar';
// import Leftcomponent from './Leftcomponent';
import ProfileDashboard from './ProfileDashboard';
import Trends from './Trends';
import Feed from './Feed';
import Whotofollow from './Whotofollow';
function App() {
  return (
    <div className="main_container">

      <div className='Navbar'>
        <ComponentNavbar/>
      </div>
      <div className='main_body'>
          <div className='leftbar'>
             <div className='profile_dashboard'>
              <ProfileDashboard></ProfileDashboard>
             </div>
             <div className='trends'>
                <Trends></Trends>
             </div>
          </div>
          <div className='center_bar'>
              <Feed></Feed>
          </div>
          <div className='rightbar'>
              <Whotofollow></Whotofollow>
          </div>
      </div>

    </div>
  );
}

export default App;
