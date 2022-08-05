import React from "react";

export default function ConnectButton(){
    return (
        <div className="profile-content">
            <button type="button" className= "connect-button" id="email"><i class="fa fa-envelope" aria-hidden="true"></i> Email </button>

            <button type="button" className="connect-button" id="linkedin"> <i class="fa fa-linkedin-square" aria-hidden="true"></i>LinkedIn </button>
        </div>
    )
}