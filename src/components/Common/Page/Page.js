const horizontalRules = {
    center: 'center',
    left: 'flex-start',
    right: 'flex-end',
};
const verticalRules = {
    center: 'center',
    top: 'flex-start',
    bottom: 'flex-end',
};

export default function Page({
    uid = '',
    className = '',
    children,
    fullViewHeight,
    contentVerticalAlign = 'center', // center, flex-start=top, flex-end=bottom
    contentHorizontalAlign = 'center', // center, flex-start= left, flex-end= right,
    backgroundColor = '',
    useThemer = true,
}) {
    return (
        <div
            id={uid}
            className={`page2 ${useThemer ? 'themer' : ''} ${className}`}
            style={{
                minHeight: fullViewHeight ? '100vh' : '',
                justifyContent: verticalRules[contentVerticalAlign],
                alignItems: horizontalRules[contentHorizontalAlign],
                backgroundColor: backgroundColor,
            }}
        >
            {children}
        </div>
    );
}
