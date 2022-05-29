import React from 'react';

function Home() {
    return (
        <div className="main main--static home">
            <div className="card">
                <div className="content">The Ultimate Discord Bot for Losers</div>
                <a href={process.env.REACT_APP_DISCORD_INVITE} className="invite">Invite to Server</a>
            </div>
        </div>
    );
}

export default Home;