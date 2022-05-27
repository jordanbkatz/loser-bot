import React from 'react';

function Home() {
    const invite = "https://discord.com/api/oauth2/authorize?client_id=948704208180359198&permissions=8&scope=bot";
    return (
        <div className="main main--static home">
            <div className="home__card">
                <div className="home__content">The Ultimate Discord Bot for Losers</div>
                <a href={invite} className="home__invite">Invite to Server</a>
            </div>
        </div>
    );
}

export default Home;