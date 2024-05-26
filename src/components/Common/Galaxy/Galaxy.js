import './styles.scss'
export default function Galaxy({position}) {
    // position = CURRENT || ROOT
    return (
        <div className='galaxy' style={{position:position==='CURRENT'?'absolute':'fixed'}}>
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
        </div>
    )
}