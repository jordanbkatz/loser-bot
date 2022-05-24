import React from 'react';

function Home() {
    const invite = "https://discord.com/api/oauth2/authorize?client_id=948704208180359198&permissions=8&scope=bot";
    return (
        <div className="main main--static home">
            <a href={invite} className="home__invite">Invite to Server</a>
        </div>
    );
}

export default Home;