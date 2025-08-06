import logo from "../Media/Images/logo.png"
function Logo() {
    return (
        <div className="logo-container">
            <img src={logo} alt='Orsa Bakery Logo' className='logo-image' />
            <h3 className="logo-text">
                <span className="text-accent">Or</span>sa
            </h3>
        </div>
    )
}

export default Logo