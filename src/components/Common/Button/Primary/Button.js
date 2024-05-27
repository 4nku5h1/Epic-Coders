import './styles.scss'
export default function Button({ className, label, onClick, type, roundedCorners }) {
    return (
        <button className={`button ${className} ${type==='SOLID'? 'solid':'outlined'} ${roundedCorners?'round':''}`} onClick={onClick}>{label}</button>
    )
}