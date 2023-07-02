import './App.css';
import Profile from './Profile';
import Footer from './Footer';
import Buttons from './Buttons';
import SocialIcons from './SocialIcons';

function App() {
    return (

        <div className='App'>
            <main>
                <Profile /> 
                <SocialIcons />
                <Buttons />
            </main>
            <Footer />
        </div>
        
    );
}

export default App;
