import { Link } from "react-router-dom";
import '../../src/index.css';
import {faDotCircle, faGlobe, faPencil, faTruck, faBuilding, faUser, faHeart, faCartShopping , faArrowRight, faF} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return(
        <div className="d-block bg-light py-5 px-5  mt-5">
            <div className="d-block d-lg-flex">
            <div className="col-12 col-lg-3 py-3">
                <h5 className="fw-bold">Join IKEA Family</h5>
                <p className="text-secondary ">Enjoy rewards and instant benefits by joining our IKEA Family club for free today.</p>
                <p className="text-secondary text-decoration-underline pb-2">see more</p>
                 <Link to={'/log'}><button className='text-white py-2 px-4 mx-1 rounded-5 fw-bold bg-dark mb-5 fs-9'>Log in or join in</button></Link>
                 <h5 className="fw-bold pt-5">Join IKEA Business Network</h5>
                 <p className="text-secondary ">Enjoy a number of unique benefits to create a better life at work.</p>
                 <p className="text-secondary text-decoration-underline pb-2">see more</p>
                 <Link to={'/log'}><button className='text-white py-2 px-4 mx-1 rounded-5 fw-bold bg-dark fs-9 '>Log in or join in</button></Link>

            </div>
            <div className="col-12 col-lg-2 mx-5 my-3 my-3">
                <h6 className="fw-bold my-5 my-md-3">Services</h6>
                <div className="d-none d-md-block">
                <p className="fs-8 text-secondary">Dilivery</p>
                <p className="fs-8 text-secondary">custom service</p>
                <p className="fs-8 text-secondary">Dilivery</p>
                <p className="fs-8 text-secondary">Dilivery At home services</p>
                <p className="fs-8 text-secondary">Dilivery</p>
                <p className="fs-8 text-secondary">custom service</p>
                <p className="fs-8 text-secondary">Dilivery</p>
                <p className="fs-8 text-secondary">Dilivery At home services</p>
                <p className="fs-8 text-secondary">Dilivery</p>
                <p className="fs-8 text-secondary">custom service</p>
                <p className="fs-8 text-secondary">Dilivery</p>
                <p className="fs-8 text-secondary">Dilivery At home services</p>
                <p className="fs-8 text-secondary">Dilivery</p>
                </div>
                
            </div>
            <div className="col-12 col-lg-2 mx-5 my-3">
            <h6 className="fw-bold my-5 my-md-3">Help</h6>
                <div className="d-none d-md-block">
                <p className="fs-8 text-secondary">custom service</p>
                <p className="fs-8 text-secondary">Dilivery</p>
                <p className="fs-8 text-secondary">Dilivery At home services</p>
                <p className="fs-8 text-secondary">Dilivery</p>
                <p className="fs-8 text-secondary">custom service</p>
                <p className="fs-8 text-secondary">Dilivery</p>
                <p className="fs-8 text-secondary">Dilivery</p>
                <p className="fs-8 text-secondary">Dilivery At home services</p>
                <p className="fs-8 text-secondary">Dilivery</p>
                <p className="fs-8 text-secondary">Dilivery At home services</p>
                <p className="fs-8 text-secondary">Dilivery</p>
                <p className="fs-8 text-secondary">custom service</p>
                <p className="fs-8 text-secondary">Dilivery</p>
                </div>
                
            </div>
            <div className="col-12 col-lg-1 mx-5 my-3">
            <h6 className="fw-bold my-5 my-md-3">About IKEA</h6>
            <div className="d-none d-md-block">
                <p className="fs-8 text-secondary">custom service</p>
                <p className="fs-8 text-secondary">Dilivery</p>
                <p className="fs-8 text-secondary">Dilivery At home services</p>
                <p className="fs-8 text-secondary">Dilivery</p>
                <p className="fs-8 text-secondary">Dilivery</p>
                <p className="fs-8 text-secondary">Dilivery At home services</p>
                <p className="fs-8 text-secondary">Dilivery</p>
                <p className="fs-8 text-secondary">Dilivery</p>
                <p className="fs-8 text-secondary">custom service</p>
                <p className="fs-8 text-secondary">Dilivery</p>
                <p className="fs-8 text-secondary">Dilivery At home services</p>
            </div>
                
            </div>
            <div className="col-12 col-lg-1 mx-5 my-3">
            <h6 className="fw-bold my-5 my-md-3">IKEA Familly</h6>
                <div className="d-none d-md-block">
                <p className="fs-8 text-secondary">custom service</p>
                <p className="fs-8 text-secondary">Dilivery</p>
                <p className="fs-8 text-secondary"> At home services</p>
                <p className="fs-8 text-secondary">Dilivery</p>
                <p className="fs-8 text-secondary">Dilivery</p>
                <p className="fs-8 text-secondary"> At home services</p>
                <p className="fs-8 text-secondary">Dilivery</p>
                </div>
                
            </div>
            
        </div>
            <div className="d-block d-md-flex mx-5 justify-content-between">
                <div className="d-flex">
                    <span className="fs-3 mx-3 pb-3 mx-md-4 text-secondary"><FontAwesomeIcon icon={faYoutube}/></span>
                    <span className="fs-3 mx-3 pb-3 mx-md-4 text-secondary"><FontAwesomeIcon icon={faFacebook}/></span>
                    <span className="fs-3 mx-3 pb-3 mx-md-4 text-secondary"><FontAwesomeIcon icon={faInstagram}/></span>
                    <span className="fs-3 mx-3 pb-3 mx-md-4 text-secondary"><FontAwesomeIcon icon={faTwitter}/></span>
                    <span className="fs-3 mx-3 pb-3 mx-md-4 text-secondary"><FontAwesomeIcon icon={faWhatsapp}/></span>
                </div>
                <div className="my-3" role="button" data-bs-toggle="offcanvas" data-bs-target="#addressPanel2"><button className=' py-2 px-3 mx-1 rounded-5 fw-bold fs-8'><FontAwesomeIcon icon={faGlobe}/> GB | English</button></div>
            </div>
            <div className=" mt-4 pt-4 bbt">
                <p>IKEA United Kingdom - 7th Floor, 100 Avebury Boulevard, Milton Keynes, MK9 1FH © Inter IKEA Systems B.V 1999-2025</p>
            </div>
            {/* pop2 */}
                  <div
                    className="offcanvas offcanvas-start roundedd-r"
                    tabIndex="-1"
                    id="addressPanel2"
                    aria-labelledby="addressPanelLabel"
                    style={{width:'480px', backgroundColor:'white'}}
            
                  >     
                    <div className="offcanvas-header">
                      <h5 id="addressPanelLabel"></h5>
                      <button
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="بستن"
                      ></button>
                    </div>
                    <div className="offcanvas-body">
                    <p className='fw-bold py-2'>You're in the UK online store</p>
                    <div className='text-decoration-underline text-secondary'><FontAwesomeIcon icon={faGlobe}/><span className='tt-h'>Change country/region</span></div>
                    
                    <div className='text-secondary my-3'>Your shopping bag will empty if you change to a different country/region.</div>
                    <div className='borderr-1'><button className='w-100  text-white py-3  mx-1 rounded-5 fw-bold bt-113 bg-dark btn212'>Cancel</button></div>
                    </div>
                    
                  </div>
        </div>
    )
}
export default Footer;