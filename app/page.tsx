"use client";

import { useQuery } from '@tanstack/react-query';
import fetchCryptoPrices from '../utils/fetchCryptoPrices';
import { useState } from 'react';
import { Crypto } from '../types/Crypto';
import CryptoTable from '../components/CryptoTable';
import RefreshButton from '../components/RefreshButton';
import SearchBar from '../components/SearchBar';
import styles from '../styles/Home.module.css';

export default function Home() {
    const { data, error, isLoading, refetch } = useQuery<Crypto[]>({
        queryKey: ['cryptoPrices'],
        queryFn: fetchCryptoPrices,
    });

    const [searchTerm, setSearchTerm] = useState<string>('');

    const filteredData = data?.filter(coin =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (isLoading) return <p className={styles.loading}>Loading...</p>;
    if (error) return <p className={styles.error}>Failed to fetch data.</p>;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Crypto Price Tracker</h1>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <RefreshButton onRefresh={refetch} />
            <CryptoTable data={filteredData || []} />
        </div>
    );
}
