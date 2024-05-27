const colorConfig = {
    headingLight: '#E3E3E3',
    headingDark: '#3c4043',
    contentDark: '#3c4043',
    contentLight:'#999999',
    borderDark: '#525252',
    borderLight: '#e4d6d6',
    buttonColor: '#1966d2',
    buttonTextSolid: '#fff',
    buttonTextOutlined:'#000',
    accentColor: '#00948C',
    gray: '#101010',
    white: '#fff',
    black: '#000'
}
const theme = {
    themeLight: {
        backgroundColor: colorConfig.white,
        foregroundColor: colorConfig.black,
        headingColor: colorConfig.headingDark,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.buttonColor,
        buttonTextSolid: colorConfig.buttonTextSolid,
        buttonTextOutlined:colorConfig.buttonTextOutlined,
        borderColor: colorConfig.borderLight,
        accentColor: colorConfig.accentColor,
    },
    themeGray: {
        backgroundColor: colorConfig.gray,
        foregroundColor: colorConfig.black,
        headingColor: colorConfig.headingLight,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.buttonColor,
        buttonTextSolid: colorConfig.buttonTextSolid,
        buttonTextOutlined:colorConfig.buttonTextOutlined,
        borderColor: colorConfig.borderDark,
        accentColor: colorConfig.accentColor
    },
    themeDark: {
        backgroundColor: colorConfig.black,
        foregroundColor: colorConfig.gray,
        headingColor: colorConfig.headingLight,
        contentColor: colorConfig.contentLight,
        buttonColor: colorConfig.buttonColor,
        buttonTextSolid: colorConfig.buttonTextSolid,
        buttonTextOutlined:colorConfig.buttonTextOutlined,
        borderColor: colorConfig.borderDark,
        accentColor: colorConfig.accentColor
    }

}
export default theme;