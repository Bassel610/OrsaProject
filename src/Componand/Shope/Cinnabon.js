import { useEffect, useState } from "react"
import "./DountsCom.css"
import Cart from "../Cart/Cart"
function Cinnabon() {
//         // Start Cart Pedge
// // Start Verble 
// let [cartVisi, setcartVis] = useState(false)

// let [proInCart, setproInCart] = useState(JSON.parse(
//     localStorage.getItem("Shopping-cart")
//     ) || [])
    
//     useEffect(() => {
//         localStorage.setItem("Shopping-cart", JSON.stringify(proInCart))
//     }, [proInCart])
//     // End   Verble 

// // Start Add FUN
// let addProToCart = (Pro) => {

//     let newpro = {
//         ...Pro,
//         count: 1,
//     } 
//     setproInCart([...proInCart, newpro])
//     console.log(newpro)
// }
// // End Add FUN

// // Start onQuantaty FUN
// let onQuantaty = (proId, count) => {
//     setproInCart((oldState) => {
//         let proIndex = oldState.findIndex((item) => 
//             item.id === proId
//         );
//         if (proIndex !== -1) {
//             oldState[proIndex].count = count;
//         }
//         return [...oldState]
//     })
// };
// // End onQuantaty FUN

// // Start Remove FUN
// let onRemove = ((proo) => {
//     setproInCart((oldState) => {
//         let proIndex = oldState.findIndex((item) => 
//             item.id === proo.id
//             )
//         if (proIndex !== -1) {
//             oldState.splice(proIndex, 1);
//         }
//         console.log(oldState)
//         return [...oldState]
//     })
// })
// // End Remove FUN

// // End Cart Pedge

    let [products, setproducts] = useState([]);

    let gestAllProducts = () => {
        fetch(("https://bes0610.github.io/APICENABON.json/APIcinna.json"))
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            setproducts(res)
        });
    };

    useEffect(() => {
        gestAllProducts()
    }, [])
    return (
        <>
            <div className="DountsCont">
                {products.map((products) => {
                    return (
                        <>
                            <div className="Product" id={products.id}>
                                <div className="ImgCon">
                                <img src={products.src} alt="Cinnabon" className="ImgDoun" />
                                </div>
                                <div className="DetilsCon">
                                    <div className="Flavor">{products.Flavor}</div>
                                    <div className="Description">{products.description}</div>
                                    <div className="Price">{products.Price} EGP</div>
                                    <div className="Pay">Pay</div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}
export default Cinnabon