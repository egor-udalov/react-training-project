import './App.scss';
// import { NavLink } from "react-router-dom";
import Content from './Components/Content/Content';
import Sidebar from './Components/Sidebar/Sidebar';
import Counter from './Components/Progects/Counter/Counter';
import CurrencyConvertor from './Components/Progects/CurrencyConvertor/CurrencyConvertor';
import Photos from './Components/Progects/Photos/Photos';
import Invitations from './Components/Progects/Invitations/Invitations';
import Quiz from './Components/Progects/Quiz/Quiz';


function App() {
  return (
    <div className="App">
      <div className="main_content">
        <div className="pogects">
          {/* <Counter /> */}
          {/* <Photos /> */}
          {/* <CurrencyConvertor /> */}
          {/* <Invitations /> */}
          {/* <Quiz /> */}
        </div>
        <div className="right_sidebar">
          <div className="menu">
            <ul>
              {/* <li><NavLink to="">проект 1</NavLink></li> */}
              <li>проект 2</li>
              <li>проект 3</li>
              <li>проект 4</li>
              <li>проект 5</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
