import Navbar from './Navbar';

interface ILayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                {children}
            </div>
        </div>
    );
}

export default Layout;