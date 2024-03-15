import Nav from "./Nav";
import FirstViewCom from "./FirstViewCom";
import DivCol from "./DivCol";
import "./FirstSection.css"
function FirstView () {
    return (
        <>
        <Nav  li1="Home" li2="About" li3="Servece" li4="contact" li5="Shope"  />
        <FirstViewCom />
        <DivCol />
        </>
    )
}
export default FirstView