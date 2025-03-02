import styles from '../styles/RefreshButton.module.css';

interface RefreshButtonProps {
    onRefresh: () => void;
}

export default function RefreshButton({ onRefresh }: RefreshButtonProps) {
    return (
        <button className={styles.refreshButton} onClick={onRefresh}>
            Refresh Prices
        </button>
    );
}
