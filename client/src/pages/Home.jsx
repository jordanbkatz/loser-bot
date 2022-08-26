import React from 'react';
import { discordInviteUrl, discordSupportUrl } from '../data/discord-links';

const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <div className="card">
                    <div className="header">
                        <h1>The Ultimate Discord Bot for Losers</h1>
                    </div>
                    <div className="links">
                        <a href={discordInviteUrl} className="link invite">Invite</a>
                        <a href={discordSupportUrl} className="link support">Support</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;