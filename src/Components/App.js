import Coins from './Coins';
import '../Styles/App.css';

export default function App() {
    return (
        <div className='App-header'>
            <nav>
                <h4>CryptoStats</h4>
            </nav>
            <div className='coinHeader border_radius'>
                <div className='coinContainer'>
                    <Coins />
                </div>
            </div>
        </div>
    );
}
