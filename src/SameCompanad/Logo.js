import logo from "../Media/Images/logo.png"
function Logo () {
    return (
        <>
            <img src={logo} alt='Logo' className='Logo' />
            <h3 className="LogoNav"><span className="FrstCol">Or</span>as</h3>
        </>
    )
}

export default Logo