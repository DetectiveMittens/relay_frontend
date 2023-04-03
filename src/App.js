import './index.css';
import DMs from './pages/DMs';
import jwtDecode from 'jwt-decode';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './pages/Header';
import Events from './pages/Events';
import GlobalChat from './pages/GlobalChat';
import FriendChat from './pages/FriendChat';
import Landing from './pages/Landing';
import {v4 as uuidv4} from 'uuid';
import { useState } from 'react';
import PopupLogin from './components/PopupLogin';




function SendNewLoginToBackend(usernamey, passwordy, recoverymaily){
    var body_string = JSON.stringify({
      username : usernamey, 
      password : passwordy, 
      recovery_email : recoverymaily, 
      userid : uuidv4()
    })

    console.log(body_string);

    fetch('http://localhost:8000/api/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body_string
      
    })
    .then(response => {
      if (response.ok) { // Handle success
        console.log(response);

      } else {
        throw new Error('Account Creation Failed for some reason');
      }
    })
    .catch(error => {
      console.error(error);
    });
}


function App() {

  const [cur_userid,setCurUserID] = useState("");
  const [modalShow, setModalShow] = useState(0);
  const [loginFailure,setLoginFailure] = useState(0);

function AttemptToLogin(passwordy, emaily){
      
      fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          password : passwordy, 
          recovery_email : emaily, 
        })
        
      }).then(response => response.json()).then(data => {

        console.log( data.valid_login._id );
        setCurUserID( data.valid_login._id );
        setModalShow( false ); //hide the modal since we are now logged in
        setLoginFailure(0);
      }).catch(error => {
        console.error(error);
        console.log("setting login failure to 1");
        setLoginFailure(1);
      });

  }



  return (
    <div className="App" >

      <BrowserRouter>
        <Header 
        setmodalshow={setModalShow} 
        userid={cur_userid} 
        setcuruserid={setCurUserID}
        setLoginFailure={setLoginFailure}
        >

          <PopupLogin
            userid={cur_userid}
            setmodalshow={setModalShow}
            attempttologin={AttemptToLogin}
            modalshow={modalShow} 
            loginFailure={loginFailure}
          ></PopupLogin>

          <Routes>

            <Route path = "/" element={<Landing SendNewLoginToBackend={SendNewLoginToBackend} />} /> 
            <Route path = "/chat" element={<FriendChat />} />  
            <Route path = "/friends" element={<DMs />} /> 
            <Route path = "/global" element={<GlobalChat />} /> 
            <Route path = "/events" element={<Events />} /> 

          </Routes>
        </Header>
      </BrowserRouter>

    </div>
    )
}

export default App;
