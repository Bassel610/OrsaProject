import React, {useEffect, useRef} from "react";
import { gsap } from "gsap";
import fly from "../../../Media/Images/fly.png"; 
import co from "../../../Media/Images/co.png"
function FirstViewCom ({scrool, ease}) {
    let scrolback = useRef(null);
    let scrolapple = useRef(null);
    let scrolhalfapple = useRef(null);
    let OpatityText = useRef(null)

    useEffect(() => {
        let eleback = scrolback.current;
        gsap.fromTo(eleback, {translateX: -1400}, {translateX: 0 ,duration:.5, delay: 1});
        let eleapple = scrolapple.current;
        gsap.fromTo(eleapple, {translateY: -1000}, {translateY: 0 ,duration:.5, delay: 1.2});
        let elescrolhalfapple = scrolhalfapple.current;
        gsap.fromTo(elescrolhalfapple, {translateX: -1000}, {translateX: 50 ,duration:.5, delay: 1.5});
        let eleOpatityText = OpatityText.current;
        gsap.fromTo(eleOpatityText, {opacity: 0, translateY: 100}, {opacity: 1, translateY: 0,duration:.5, delay: .5});
        
    }, [])

    return (
        <>
        <div className="FirstView">
            <div className="LeftView" ref={OpatityText}>
                <div className="BigText">
                        Get Fresh <br />
                        <span className="FrstCol">donuts</span> <br />
                        EveryDay <br />
                </div>
                <div className="SmallText">
                Start at 5 pound, get <br />
                Fresh donuts and more. <br />
                </div>
                {/* <div >
                    <button className="Button">Details</button>
                </div> */}
            </div>
            <div className="RightView">
                <div className="Imges">
                <img src="https://github.com/bedimcode/responsive-juice-website/blob/main/assets/img/liquid-fruit.png?raw=true" 
                ref={scrolback}
                alt="apple" className="ImagesFrute1 position"/>
                <img src={fly}
                ref={scrolapple}
                alt="apple" className="ImagesFrute2 position"/>
                <img src={co}
                ref={scrolapple}
                alt="apple" className="ImagesFrute3 position"/>
                </div>
            </div>
        </div>
        </>
    )
}
export default FirstViewCom;