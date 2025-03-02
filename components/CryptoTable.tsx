import { Crypto } from '../types/Crypto';
import styles from '../styles/CryptoTable.module.css';

interface CryptoTableProps {
    data: Crypto[];
}

export default function CryptoTable({ data }: CryptoTableProps) {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Price (USD)</th>
                </tr>
            </thead>
            <tbody>
                {data.map((coin) => (
                    <tr key={coin.id}>
                        <td>{coin.name}</td>
                        <td>{coin.symbol.toUpperCase()}</td>
                        <td>${coin.current_price.toLocaleString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
