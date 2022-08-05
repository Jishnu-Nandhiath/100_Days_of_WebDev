import React from 'react';
import profile_photo from './images/jishnu.jpg';

import Profile from "./components/profile"
import ConnectButton from './components/connect-button';
import IntroSection from './components/intro-section';

export default function App(){
    return(
    <div>
        <img src={profile_photo} alt="text" className='display-photo'></img>
        <Profile/>
        <ConnectButton/>
        <IntroSection/>
    </div>
    )
    
}