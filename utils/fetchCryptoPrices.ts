import { Crypto } from '../types/Crypto';

const fetchCryptoPrices = async (): Promise<Crypto[]> => {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,ripple,cardano,dogecoin');
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json();
};

export default fetchCryptoPrices;
