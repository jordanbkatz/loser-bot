import React from 'react';

export default function () {
    return (
        <div className="main main--static home">
            <div className="card">
                <div className="content">The Ultimate Discord Bot for Losers</div>
                <div className="links">
                    <a href={process.env.REACT_APP_DISCORD_INVITE} className="link">Invite</a>
                    <a href={process.env.REACT_APP_DISCORD_SUPPORT} className="link">Support</a>
                </div>
            </div>
        </div>
    );
}