import './styles.scss';
export default function Button({ className, label, onClick, type, roundedCorners, theme }) {
    return (
        <button
            className={`button ${className} ${type === 'SOLID' ? 'solid' : 'outlined'} ${
                roundedCorners ? 'round' : ''
            } ${theme === 'LIGHT' ? 'light' : 'dark'}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
}
