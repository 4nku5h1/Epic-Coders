import './styles.scss';
export default function Row({ name, child, data, containerClass, itemClass }) {
    // 1. Data Should be array
    return (
        <div
            className={`my-row ${containerClass}`}
            style={{
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            {data.map(item => (
                <div className={itemClass}>{child(item)}</div>
            ))}
        </div>
    );
}
