import discordInvite from '../data/discordInvite';

const Home: React.FC = () => {
    return (
        <div className="home">
            <div className="card">
                <div className="header">
                    <h1>The Ultimate Discord Bot for Losers</h1>
                </div>
                <a href={discordInvite} className="link">Invite</a>
            </div>
        </div>
    );
};

export default Home;