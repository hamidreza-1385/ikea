import Header from "../components/Header";
import '../../src/index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faDotCircle, faGlobe, faPencil, faTruck, faBuilding, faUser, faHeart, faCartShopping , faArrowRight} from '@fortawesome/free-solid-svg-icons';
import chiz from '../imgs/chiz.png'
import s21 from '../imgs/s21.png'
import s22 from '../imgs/s22.png'
import s23 from '../imgs/s23.png'
import s32 from '../imgs/s32.png'
import s34 from '../imgs/s34.png'
import s36 from '../imgs/s36.png'
import s31 from '../imgs/s31.png'
import ProductList from "./ProductList";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";




const Home = () => {
    return (
      <div className="">
        <Header />
  
        <h1 className="mb-5 fw-bold  px-md-5 px-3 py-md-4 py-2">Welcome to IKEA UK !</h1>
  
        <div className="row g-3 ertefa justify-content-center text-white ">
          {/* Coffee Table Card */}
          <div className="col-md-6">
            <div className="clmn p-4 bg-mg-1 shadow-sm h-100 zoom-bg">
              <div className="mx-5"><img className="img-fluid w-ss" src={chiz}></img></div>
              <span className="text-size m-5 p-4 mt-0 "><FontAwesomeIcon icon={faDotCircle}/></span>
              <span className=" bg-orng text-white mb-2 new">New</span>
              <h4 className="fw-bold ppa mt-3">STOCKHOLM 2025</h4>
              
              <button className="btn btn-link text-decoration-none text-white fs-4 btn-hover text-start"><FontAwesomeIcon className="arrow" icon={faArrowRight}/></button>
            </div>
          </div>
  
          {/* Right Side */}
          <div className="col-md-5 ">
            <div className="row g-3 ertefa">
  
              {/* Orange Feature Block */}
              <div className="col-6 ">
                <div className="p-4 bg-orng text-white shadow-sm h-100 zoom-bg clmnn">
                  <h2 className="fw-bold mb-0 ppa">STOCKHOLM</h2>
                  <h3 className="fw-light">2025</h3>
                  <p className="mt-2 ppa">Quality without compromise.</p>
                  <button className="btn btn-link text-decoration-none text-white fs-4 btn-hover bg-white text-orng rounded-5 w-20 "><FontAwesomeIcon className="arrow text-orng" icon={faArrowRight}/></button>                </div>
              </div>
  
              {/* Minimalist Room Card */}
              <div className="col-6">
                <div className="p-4 bg-mg-2 shadow-sm h-100 zoomed-bg clmn ">
                  <span className=" bg-orng text-white mb-2 new">New</span>
                  <h5 className="fw-semibold ppa mt-md-3 text-dark">More than minimalism</h5>
                  <p className="text-white ppa">For your living room</p>
                  <button className="btn btn-link text-decoration-none text-white fs-4 btn-hover text-start"><FontAwesomeIcon className="arrow" icon={faArrowRight}/></button>                </div>
              </div>
  
              {/* Tableware Card */}
              <div className="col-md-12">
                <div className="p-4 bg-mg-3 shadow-sm h-100 zoom-bg clmn">
                  <span className=" bg-orng text-white mb-2 new">New</span>
                  <p className="fw-semibold ppa mt-3">A selection of tableware to make every meal special</p>
                  <button className="btn btn-link text-decoration-none text-white fs-4 btn-hover text-start"><FontAwesomeIcon className="arrow" icon={faArrowRight}/></button>                </div>
              </div>
  
            </div>
          </div>
        </div>
        {/* //////////////////// */}
        <div className="sec-2 bg-light my-5">
          <h2 className="px-3 px-md-5 pt-5">Sale ends soon!</h2>
          <div className="d-flex px-3 px-md-5 category-slider-container my-3 category-tabs">
            <section className="bg-danger col-md-2 col-8 px-4 py-5 text-white fs-6 fw-bold zoomed-bg clmnn mb-5">  <p className="ppa">Lorem, ipsum dolor</p><p>sit amet consectetur </p><p>elit. Mollitia, eos.</p>  <button className="btn btn-link text-decoration-none text-white fs-4 btn-hover bg-white text-orng rounded-5 w-20 "><FontAwesomeIcon className="arrow text-orng" icon={faArrowRight}/></button></section>
            <section className="zoom-bg"><img src={s21}></img><span className="justify-content-between d-flex mb-5 fw-bold"><p className="ppa">Lorem, ipsum dolor. </p>                 <button className="btn btn-link text-decoration-none text-dark fs-4 btn-hover text-start"><FontAwesomeIcon className="arrow" icon={faArrowRight}/></button>             </span></section>
            <section className="zoom-bg"><img src={s22}></img><span className="justify-content-between d-flex mb-5 fw-bold"><p className="ppa">Lorem, ipsum dolor. </p>                  <button className="btn btn-link text-decoration-none text-dark fs-4 btn-hover text-start"><FontAwesomeIcon className="arrow" icon={faArrowRight}/></button></span></section>
            <section className="zoom-bg"><img src={s23}></img><span className="justify-content-between d-flex mb-5 fw-bold"><p className="ppa">Lorem, ipsum dolor. </p>                   <button className="btn btn-link text-decoration-none text-dark fs-4 btn-hover text-start"><FontAwesomeIcon className="arrow" icon={faArrowRight}/></button></span></section>
            <section className="zoom-bg"><img src={s21}></img><span className="justify-content-between d-flex mb-5 fw-bold"><p className="ppa">Lorem, ipsum dolor. </p>                  <button className="btn btn-link text-decoration-none text-dark fs-4 btn-hover text-start"><FontAwesomeIcon className="arrow" icon={faArrowRight}/></button></span></section>
            <section className="zoom-bg"><img src={s22}></img><span className="justify-content-between d-flex mb-5 fw-bold"><p className="ppa">Lorem, ipsum dolor. </p>                   <button className="btn btn-link text-decoration-none text-dark fs-4 btn-hover text-start"><FontAwesomeIcon className="arrow" icon={faArrowRight}/></button></span></section>
          </div>
        </div>
        {/* ////////////////////////////// */}
        <div>
          <h2 className=" px-3 px-md-5 pt-5">Today's best deals</h2>
          <div className="d-flex">
          <div className="d-flex px-2 px-md-5 category-slider-containers my-3 col-md-9 col-12">
              {/* <section className=""><img className=" img-mm" src={s32}></img><span className="justify-content-between d-flex mb-5 fw-bold">Lorem, ipsum dolo             </span></section>
              <section className=""><img className=" img-mm" src={s34}></img><span className="justify-content-between d-flex mb-5 fw-bold">Lorem, ipsum dolo</span></section>
              <section className=""><img className=" img-mm" src={s36}></img><span className="justify-content-between d-flex mb-5 fw-bold">Lorem, ipsum dolo</span></section>
              <section className=""><img className=" img-mm" src={s21}></img><span className="justify-content-between d-flex mb-5 fw-bold">Lorem, ipsum dolo</span></section>
              <section className=""><img className=" img-mm" src={s22}></img><span className="justify-content-between d-flex mb-5 fw-bold">Lorem, ipsum dolo</span></section>
           */}
           <ProductList/>
            </div> 
            <div className="col-md-3 d-none d-md-block">
              <img className="img-fluid" src={s31}></img>
              <section className="bg-primary px-5 py-4 text-white">
                <h3>IKEA Familly offers</h3>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos repellendus doloribus sit velit facere consequatur illo quidem corporis suscipit voluptatem.</span>
                <Link to={'/productlist'}></Link><button className="btn btn-link text-decoration-none text-dark fs-4 btn-hover text-start bg-white rounded-5 d-block my-3"><FontAwesomeIcon className="arrow" icon={faArrowRight}/></button>
              </section>
            </div>
        </div>
        </div>
      <Footer/>
      </div>
      
    );
  };
  
  export default Home;
  