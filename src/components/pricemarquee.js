import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import bitcoinLogo from '../assets/btcLogo.svg';

const PriceMarquee = () => {
    const [price, setPrice] = useState(null);
    const [priceChange7Days, setPriceChange7Days] = useState(null);
    const [priceChange1Year, setPriceChange1Year] = useState(null);

    useEffect(() => {
        const fetchPriceData = async () => {
            try {
                // Aktueller Preis
                const priceResponse = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur');
                const priceData = await priceResponse.json();
                setPrice(priceData.bitcoin.eur);

                // Preisänderung der letzten 7 Tage
                const history7DaysResponse = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=eur&days=7');
                const history7DaysData = await history7DaysResponse.json();
                const prices7Days = history7DaysData.prices;
                
                if (prices7Days.length > 0) {
                    const initialPrice7Days = prices7Days[0][1]; // Preis vor 7 Tagen
                    const currentPrice7Days = prices7Days[prices7Days.length - 1][1]; // Aktueller Preis
                    const change7Days = ((currentPrice7Days - initialPrice7Days) / initialPrice7Days) * 100;
                    setPriceChange7Days(change7Days.toFixed(2));
                }

                // Preisänderung des letzten Jahres
                const history1YearResponse = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=eur&days=365');
                const history1YearData = await history1YearResponse.json();
                const prices1Year = history1YearData.prices;
                
                if (prices1Year.length > 0) {
                    const initialPrice1Year = prices1Year[0][1]; // Preis vor 1 Jahr
                    const currentPrice1Year = prices1Year[prices1Year.length - 1][1]; // Aktueller Preis
                    const change1Year = ((currentPrice1Year - initialPrice1Year) / initialPrice1Year) * 100;
                    setPriceChange1Year(change1Year.toFixed(2));
                }

            } catch (error) {
                console.error('Error fetching Bitcoin data:', error);
            }
        };

        fetchPriceData();

        const interval = setInterval(fetchPriceData, 60000); // Aktualisieren alle 60 Sekunden

        return () => clearInterval(interval);
    }, []);

    const formattedPrice = price ? new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price) : 'Loading...';
    const formattedChange7Days = priceChange7Days !== null ? `${priceChange7Days >= 0 ? '+' : ''}${priceChange7Days}%` : 'Loading...';
    const formattedChange1Year = priceChange1Year !== null ? `${priceChange1Year >= 0 ? '+' : ''}${priceChange1Year}%` : 'Loading...';

    return (
        <div className="flex w-full bg-black text-white py-2 items-center shadow-md">
            <Marquee gradient={false}>
                <div className="flex items-center space-x-4 px-4">
                    <img src={bitcoinLogo} alt="Bitcoin Logo" className="h-6 w-6" />
                    <span className="text-lg font-semibold">{`Live Bitcoin Preis: ${formattedPrice}`}</span>
                    <span className={`text-lg font-semibold ${priceChange7Days >= 0 ? 'text-green-500' : 'text-red-500'}`}>{`Letzte Woche: ${formattedChange7Days}`}</span>
                    <span className={`text-lg font-semibold ${priceChange1Year >= 0 ? 'text-green-500' : 'text-red-500'}`}>{` Letztes Jahr: ${formattedChange1Year}`}</span>
                </div>
            </Marquee>
        </div>
    );
};

export default PriceMarquee;
