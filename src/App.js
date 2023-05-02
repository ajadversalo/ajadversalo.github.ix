import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className='App'>
            <div className="line1"></div>
            <div   style={{textAlign: 'center', paddingTop: '15rem' }} >
                <div className='parentX'>
                    <div style={{fontSize: '5rem' }}><span className='hi'>Hi, I'm</span> <span className='name'>AJ</span><span className='period'>.</span><span className='ln'>Adversalo</span></div>
                    <div style={{ marginLeft: '70px', fontSize: '3rem' }}><span className='im'>I'm a</span> Full-Stack Software Developer.</div>
                </div>
            </div>
        </div>
    );
}

export default App;
