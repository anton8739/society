import React from 'react';
import {useEffect} from 'react';
import {Redirect, Route} from "react-router-dom";
import './commonCss/font-awesome.min.css'
import UserAccountContainer from "./react/components/userAccount/UserAccountContainer";
import Friends from "./react/components/friends/Friends";
import News from "./react/components/news/News";
import Messages from "./react/components/messages/Messages";
import Groups from "./react/components/groups/Groups";
import Photos from "./react/components/photos/Photos";
import Music from "./react/components/music/Music";
import Video from "./react/components/video/Video";
import Audio from "./react/components/common/Audio/Audio";
import LogIn from "./react/components/login/LogIn";
import Preloader from "./react/components/common/Preloader/Preloader";



function App() {

  return (
    <div className="App">
        <Audio/>
        <Route path="/login">
            <LogIn/>
        </Route>
        <Route path="/account/:userId?">
            <UserAccountContainer/>
        </Route>
        <Route path="/news">
            <News/>
        </Route>
        <Route exact path="/">
            <Redirect to="/news"/>
        </Route>
        <Route path="/friends">
            <Friends/>
        </Route>
        <Route path="/messages">
            <Messages/>
        </Route>
        <Route path="/groups">
            <Groups/>
        </Route>
        <Route path="/photos/:fotoId?">
            <Photos/>
        </Route>
        <Route path="/music">
            <Music/>
        </Route>
        <Route path="/video">
            <Video/>
        </Route>

    </div>
  );
}

export default App;
