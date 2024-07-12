import './styles.scss';

export function Heading1({ heading, className }) {
    return <h1 className={className}>{heading}</h1>;
}
export function Heading2({ heading, className }) {
    return <h2 className={className}>{heading}</h2>;
}
export function Heading3({ heading, className }) {
    return <h3 className={className}>{heading}</h3>;
}
export function Heading4({ heading, className }) {
    return <h4 className={className}>{heading}</h4>;
}
export function Heading5({ heading, className }) {
    return <h5 className={className}>{heading}</h5>;
}
