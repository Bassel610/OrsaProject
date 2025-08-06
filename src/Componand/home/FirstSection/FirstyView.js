import Nav from "./Nav";
import FirstViewCom from "./FirstViewCom";
import DivCol from "./DivCol";
import "./FirstSection.css"
function FirstView () {
    return (
        <>
        <Nav  li1="Home" li2="About" li3="Services" li4="Contact" li5="Shop"  />
        <FirstViewCom />
        <DivCol />
        </>
    )
}
export default FirstView