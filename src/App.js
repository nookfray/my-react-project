import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Footer from "./components/Footer";


const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <main className="main_content">
                <div className="container">
                    <Navbar />
                    <Profile />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
