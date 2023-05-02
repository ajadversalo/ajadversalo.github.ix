import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className='App'>
            <div className="line1"></div>
            <div className='parentX'  style={{ width: '100%', textAlign: 'center', paddingTop: '15rem' }} >
                <h1 style={{ margin: 0, fontSize: '4rem' }}><span className='hi'>Hi, I'm</span> <span className='name'>AJ</span><span className='period'>.</span></h1>
                <h1><span className='im'>I'm a</span> Full-Stack Software Developer.</h1>
            </div>
        </div>
    );
}

export default App;
