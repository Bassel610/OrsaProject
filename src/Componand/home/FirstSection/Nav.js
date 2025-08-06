import { useState } from 'react';
import { FaListUl } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import {scroolHomeFun,scroolAbouFun, scroolServFun, scroolConFun,scroolAbouFunMOP, scroolConFunMOP } from '../../../rtk/Slices/Scrool-Slice';
import { Link } from 'react-router-dom';
import Logo from '../../../SameCompanad/Logo.js';
import Cart from '../../Cart/Cart';
function Nav (props) {
let [cartVisi, setcartVis] = useState(false)
let [proInCart, setproInCart] = useState(JSON.parse(
    localStorage.getItem("Shopping-cart")
    ) || [])
    let LinkeBTN = {
        color: "hsl(230deg 3.37% 34.9%)"
    }
    let dispatsh = useDispatch();

    let [toggleNav, settoggleNav] = useState(false)

    let toggleNavFun = () => {
    toggleNav ? settoggleNav(false) : settoggleNav(true)
    }
    return (
        <>
        <Cart
            visabilty={cartVisi}
            products={proInCart}
            onclose={() => {
                setcartVis(false)
            }}
        />
        <nav className="Nav" role="navigation" aria-label="Main navigation">
        <Logo />
            <div className="NavList">
                <ul className="ULnav">
                    <li className="LiNav FrstCol" style={LinkeBTN} onClick={() => dispatsh(scroolHomeFun())}><Link to={"/"}>{props.li1}</Link></li>
                    <li className="LiNav"  onClick={() => dispatsh(scroolAbouFun())}>{props.li2}</li>
                    <li className="LiNav" onClick={() => dispatsh(scroolServFun())}>{props.li3}</li>
                    <li className="LiNav" onClick={() => dispatsh(scroolConFun())}>{props.li4}</li>
                    <Link to="/shop" style={LinkeBTN} className="LiNav">{props.li5}</Link>
                    {/* <li className="LiNav">{props.li6}</li> */}
                    {/* <li className="LiNav"
                    onClick={()=>{
                        setcartVis(true)
                    }}
                    >cart</li> */}
                </ul>
            </div>
                <div><FaListUl className={toggleNav? "mobile-menu-icon active" : "mobile-menu-icon"} onClick={toggleNavFun}/></div>
        </nav>
                <div className={ toggleNav ? "NavMopile Down" : "NavMopile"}>
                    <div className="NavList2">
                        <ul className="ULnav2">
                    <li className="LiNav2 FrstCol" onClick={() => {
                        dispatsh(scroolHomeFun())
                        toggleNavFun()
                    }}>{props.li1}</li>
                        <li className="LiNav2" onClick={() => {
                            dispatsh(scroolAbouFunMOP())
                            toggleNavFun()
                        }}>{props.li2}</li>
                        <li className="LiNav2" onClick={() => {
                            dispatsh(scroolServFun())
                            toggleNavFun()
                        }}>{props.li3}</li>
                        <li className="LiNav2" onClick={() => {
                            dispatsh(scroolConFunMOP())
                            toggleNavFun()
                        }}>{props.li4}</li>
                        <li className="LiNav2" onClick={() => {
                            dispatsh(scroolConFunMOP())
                            toggleNavFun()
                        }}>{props.li5}</li>
                        <li className="LiNav2">{props.li6}</li>
                        </ul>
                    </div>
                </div>
        </>
    )
}
export default Nav