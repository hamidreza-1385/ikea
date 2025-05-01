import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faGlobe, faPencil, faTruck, faBuilding, faUser, faHeart, faCartShopping ,faLocationDot} from '@fortawesome/free-solid-svg-icons';
import logo from '../imgs/logo.png';
import pop1 from '../imgs/pop-1.png';
import SearchBox from "./wiget/SearchBox";
import 'bootstrap/dist/css/bootstrap.min.css';
import CategorySection from './CategorySection';
import '../../src/index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CategoryPop from './CategoryPop';
import { Link } from 'react-router-dom';



const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [showLowerHeader, setShowLowerHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < 85) {
      setIsFixed(false);
      setShowLowerHeader(true);
    } else {
      if (currentScrollY < lastScrollY) {
        setIsFixed(true);        // اسکرول به بالا
        setShowLowerHeader(true);
      } else {
        setShowLowerHeader(false); // اسکرول به پایین
      }
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* part1 */}
      <div className="text-md top-bar py-2-5">
        <section className='ht px-md-3 px-1' role="button" data-bs-toggle="offcanvas" data-bs-target="#addressPanel2"><FontAwesomeIcon className="px-3" icon={faGlobe} />GB <span className='d-none d-lg-inline'>| English</span></section>
        <section className='ht d-none d-md-inline'><FontAwesomeIcon className="px-3" icon={faPencil}/>Assembly via Taskrabit</section>
        <section className='ht px-md-4 px-2' role="button" data-bs-toggle="offcanvas" data-bs-target="#addressPanel1">
          <FontAwesomeIcon className="px-3" icon={faTruck}/>SW1A2DD 
          <FontAwesomeIcon className="px-3" icon={faBuilding}/>Hammersmith
        </section>     
      </div>
      {/* part2 */}
      <div
        className={`py-2 lower-header ${isFixed ? 'fixed' : 'static'} ${showLowerHeader ? 'visible' : 'hidden'}`}
      >
        <div className="d-flex justify-content-between align-items-center px-md-5 px-3 py-3">
          <div className="d-flex col-6 align-items-center">
            <Link to={'/'}><img src={logo} alt="logo" style={{ height: 40, marginRight: 20 }} /></Link>
            <div className='d-none d-lg-inline'><SearchBox /></div>
          </div>
          <div className="d-flex">
            <div className="px-2 ht log-h py-1 mx-2" role="button" data-bs-toggle="offcanvas" data-bs-target="#addressPanel3"><FontAwesomeIcon icon={faUser}/><span className='d-none d-md-inline px-2'>Hey!Login</span></div>
            <div className="px-2 mx-2 py-1 icon-h"><FontAwesomeIcon icon={faHeart}/></div>
            <Link className='custom-link' to="/cart"><div className="px-2 mx-2 py-1 icon-h"><FontAwesomeIcon icon={faCartShopping}/></div></Link>
            <div className="px-2 mx-2 py-1 icon-h d-inline d-md-none" role="button" data-bs-toggle="offcanvas" data-bs-target="#addressPanel4"><FontAwesomeIcon icon={faBars}/></div>
          </div>
        </div>
      </div>
{/*  */}
      <div className='lower-header d-lg-none d-flex justify-content-center align-items-center m-r pb-4'><SearchBox /></div>
      {/* part3 */}
      <div className='d-none d-md-block'><CategorySection/></div>




      {/* baaz sho rast bala hamm */}
      <div
        className="offcanvas offcanvas-end roundedd-l "
        tabIndex="-1"
        id="addressPanel1"
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
        <div className="offcanvas-body px-5 ">
          <h3 className='py-2 fw-bold '>Hammersmith</h3>
          <h6 className='pt-1 fw-bold text-secondary'>Open until 20:00</h6>
          <h6 className='py-1 text-secondary'>King Street Hammersmith, London</h6>
          <button className='px-3 btn-pop my-3' ><FontAwesomeIcon className='px-2 pr' icon={faLocationDot}/>Get directions</button>
          <h6 className='pt-4 fw-bold'>Normal opening hours</h6>
          <div className='d-flex'><section className='col-6 '><p className='pb-0 mb-0'>Mon - Sat</p><p className='mt-0 pt-0'>Sun</p></section><section className='col-6'><p className='pb-0 mb-0'>10:00 - 20:00</p><p className='mt-0 pt-0'>11:00 - 17:00</p></section></div>
          <h6 className='pt-2 fw-bold'>Exceptional opening hours</h6>
          <div className='d-flex'><section className='col-6 '>20/04/2025</section><section className='col-6 '>Closed</section></div>
          <div className='bottom-0'>
            <button className='w-100 btn-bb bg-white py-3 mb-2 rounded-5 fw-bold bt-112'>Select a different store</button>
            <button className='w-100 btn-bb text-white  py-3 mt-2 rounded-5 fw-bold bt-113 bg-dark'>Visit store page</button>
          </div>
        </div>
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
      {/* pop3 */}
      <div
        className="offcanvas offcanvas-end roundedd-l"
        tabIndex="-1"
        id="addressPanel3"
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
          <section className='d-flex justify-content-between my-5'><h2 className='fw-bold'>Hey!</h2> <Link to={'/log'}><button className='text-white py-3 px-5 mx-1 rounded-5 fw-bold bg-dark '>Log in</button></Link></section>
          <img className='w-100 px-2' src={pop1}></img>
        </div>
        {/* part4 */}
      </div>
      <div
        className="offcanvas offcanvas-end roundedd-l"
        tabIndex="-1"
        id="addressPanel4"
        aria-labelledby="addressPanelLabel"
        style={{width:'480px', backgroundColor:'white'}}

      >     
        <div className="offcanvas-header justify-content-between p-4 b-b">
          <img src={logo} alt="logo" style={{ height: 40, marginRight: 20 }} />
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="بستن"
          ></button>
        </div>
        <div className="offcanvas-body">
          <CategoryPop/>
        </div>
      </div>
    </>
  );
};

export default Header;
