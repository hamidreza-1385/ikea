import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faPencil, faTruck, faBuilding, faUser, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import logo from '../imgs/logo.png';
import SearchBox from "./wiget/SearchBox";
import 'bootstrap/dist/css/bootstrap.min.css';
import CategorySection from './CategorySection';
import '../../src/index.css';


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
      <div className="text-md top-bar">
        <section className='ht'><FontAwesomeIcon className="px-3" icon={faGlobe} />GB | English</section>
        <section className='ht'><FontAwesomeIcon className="px-3" icon={faPencil}/>Assembly via Taskrabit</section>
        <section className='ht'><FontAwesomeIcon className="px-3" icon={faTruck}/>SW1A2DD <FontAwesomeIcon className="px-3" icon={faBuilding}/>Hammersmith</section>
      </div>
      {/* part2 */}
      <div
        className={`lower-header ${isFixed ? 'fixed' : 'static'} ${showLowerHeader ? 'visible' : 'hidden'}`}
      >
        <div className="d-flex justify-content-between align-items-center px-5 py-3">
          <div className="d-flex col-6 align-items-center">
            <img src={logo} alt="logo" style={{ height: 40, marginRight: 20 }} />
            <SearchBox />
          </div>
          <div className="d-flex">
            <div className="px-4 ht"><FontAwesomeIcon icon={faHeart}/> Hey!Login</div>
            <div className="px-2"><FontAwesomeIcon icon={faUser}/></div>
            <div className="px-2"><FontAwesomeIcon icon={faCartShopping}/></div>
          </div>
        </div>
      </div>
      {/* part3 */}
      <CategorySection/>
    </>
  );
};

export default Header;
