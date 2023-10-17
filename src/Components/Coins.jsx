import { useState, useEffect } from 'react';
import TableHeader from './TableHeader';
import Coin from './Coin';
import '../Styles/Coins.css';

export default function Coins() {
    const [coins, setCoins] = useState([]);

    //https://documenter.getpostman.com/view/5734027/RzZ6Hzr3?version=latest
    //https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=USD

    useEffect(() => {
        getCoins();
        setInterval(() => {
            getCoins();
        }, 30000);
    }, []);

    const getCoins = async function () {
        let response = await fetch(
            `https://api.coinstats.app/public/v1/coins?skip=0&currency=USD`
        );
        let data = await response.json();
        setCoins(data.coins);
    };

    return (
        <table>
            <TableHeader />
            <tbody>
                {coins.length > 0 && (
                    <>
                        {coins.map((coin) => (
                            <Coin
                                key={coin.id}
                                coin={coin}
                            />
                        ))}
                    </>
                )}
            </tbody>
        </table>
    );
}
