import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className='App'>
            <div className="line1"></div>
            <div style={{ width: '100%', textAlign: 'center', paddingTop: '15rem', color: '#FFF' }}>
                <h1 style={{ margin: 0, fontSize: '4rem' }}><span style={{ color: 'transparent' }}>Hi, I'm</span> AJ<span style={{ color: 'transparent' }}>.</span></h1>
                <h1>I'm a Full-Stack Software Developer.</h1>
            </div>
            <div style={{ textAlign: 'center' }}>
                <p>About</p>
                <p>Work</p>
            </div>
        </div>
    );
}

export default App;
