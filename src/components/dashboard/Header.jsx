import { faBell, faCircleUser, faLanguage, faMoon, faTicket, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Header = () => {
    return (
        <header className="header ">
            <div className="up d-flex justify-content-between bg-light px-4 py-3 align-items-center rounded-4">
                <section className="d-flex">
                    <p className="icon-h"><FontAwesomeIcon icon={faUser}className="mx-2"/></p>
                    <p className="icon-h"><FontAwesomeIcon icon={faBell}className="mx-2"/></p>
                    <p className="icon-h"><FontAwesomeIcon icon={faMoon}className="mx-2"/></p>
                    <p className="icon-h"><FontAwesomeIcon icon={faLanguage}className="mx-2"/></p>
                </section>
                <section className="d-flex align-items-center">
                    <section><p className="py-0 my-0 mx-2">علی</p ><p className="py-0 my-0 mx-2">   کاربر   </p></section>
                    <FontAwesomeIcon icon={faCircleUser}className="mx-3"/>
                    <div className="d-lg-none" role="button" data-bs-toggle="offcanvas" data-bs-target="#addressPanel">menu</div>
                </section>

            </div>
            <div className="d-flex down text-start my-2 p-3 rounded-4">
                <Link to={"/poshtibani"}><button className="mx-4 py-1 rounded-3 bg-primary text-white border-none p-2">پشتیبانی<FontAwesomeIcon className="mx-2" icon={faTicket}/></button></Link>
                <Link className="text-decoration-none" to={"/"}><p className="text-danger">خروج</p></Link>
            </div>
            {/*  */}
            <div
        className="offcanvas offcanvas-start roundedd-r"
        tabIndex="-1"
        id="addressPanel"
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
        <div className="bg-light text-muted left-4 top-4 mx-1 my-4 rounded-4 start-0 p-4 ">
            <h1>داشبورد متریال</h1>
            <ul className='bg-light '>
                <li className='my-4 h-sidebar-item fs-2'><Link className='custom-link ' to="/dashboard">داشبورد</Link></li>
                <li className='my-4 h-sidebar-item fs-2'><Link className='custom-link' to="/eshterak">اشتراک</Link></li>
                <li className='my-4 h-sidebar-item fs-2'><Link className='custom-link' to="/hesabkarbary">حساب کاربری</Link></li>
                <li className='my-4 h-sidebar-item fs-2'><Link className='custom-link' to="/mizkar">میز کار</Link></li>
                <li className='my-4 h-sidebar-item fs-2'><Link className='custom-link' to="/payamha">پیام ها</Link></li>
                <li className='my-4 h-sidebar-item fs-2'><Link className='custom-link' to="/listvazayef">لیست وظایف</Link></li>
                <li className='my-4 h-sidebar-item fs-2'><Link className='custom-link' to="/poshtibani">پشتیبانی</Link></li>
                <li className='my-4 h-sidebar-item fs-2'><Link className='custom-link' to="/didgah">دیدگاه</Link></li>
            </ul>
        </div>
        </div>
        
      </div>
        </header>
        
    );
};

export default Header;