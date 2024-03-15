import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faCake, faHome, faGlobe } from '@fortawesome/free-solid-svg-icons'
import "./Service.css"
function Servace ( ){
    return (
        <>
            <div className="Servace">
                <h4 className='H4Serv'>About Our Servece</h4>
                <div className='icon PostionSerc'>
                <FontAwesomeIcon icon={faTruck} className='Ico '/>
                <div className='TextIco'>
                    <h4 className='H4Ico'>Delivery</h4>
                    <p className='PIco'>FasT Delivery</p>
                </div>
                </div>
                <div className='icon'>
                <FontAwesomeIcon icon={faCake} className='Ico' />
                <div className='TextIco'>
                <h4 className='H4Ico'>Fresh</h4>
                <p className='PIco'>All Our Dounts Is Freshly</p>
                </div>
                
                </div>
                <div className='icon PostionSerc'>
                <FontAwesomeIcon icon={faHome} className='Ico ' />
                <div className='TextIco'>
                <h4 className='H4Ico'>Organic</h4>
                <p className='PIco'>The Dounts is Homemade</p>
                </div>
                </div>
                <div className='icon'>
                <FontAwesomeIcon icon={faGlobe} className='Ico Dis' />
                <div className='TextIco'>
                <h4 className='H4Ico'>Best Test</h4>
                <p className='PIco'>Will Not Found Our Test IN Any Place</p>
                </div>
                </div>
            </div>
        </>
    )
} 

export default Servace;