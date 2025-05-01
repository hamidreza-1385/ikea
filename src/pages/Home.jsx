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
          <h2 className="px-5 pt-5">Sale ends soon!</h2>
          <div className="d-flex px-5 category-slider-container my-3 category-tabs">
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sapiente non rem! Facilis illum praesentium at delectus! Quidem hic voluptatum eum autem non quia debitis facilis ducimus? Voluptatibus sunt voluptates iure tempore aperiam voluptquam, distinctio optio ipsa alias perspiciatis. Qui nisi deserunt doloribus assumenda dicta ut sint exercitationem voluptas aspernatur itaque laborum, accusantium voluptate magnam molestias repellendus corrupti ipsam magni vero quod dignissimos autem. Quos recusandae vero saepe, explicabo rem quasi iure aliquid temporibus laboriosam ab hic, voluptatum ducimus delectus, culpa error perferendis aliquam commodi illum in porro provident dolorum mollitia. Sapiente corporis, optio praesentium fugit dolorum laudantium iste illo repellat, culpa, aliquid placeat harum exercitationem reiciendis asperiores possimus. Sapiente hic harum quasi animi minima ad, deserunt dolorum itaque molestias error repellendus suscipit optio reiciendis, fuga veniam omnis, nemo cum. Ipsa libero dignissimos fugiat! Sed, laborum optio rerum esse expedita quidem, ipsa magni qui, voluptatum debitis in. Voluptatibus cumque inventore repellendus nam sapiente molestiae, voluptas id. Consectetur ducimus aspernatur voluptate praesentium? Doloribus corrupti dolorem asperiores maxime quo vel laboriosam saepe, accusamus quaerat ipsum reprehenderit modi aliquam id. Quas quae, recusandae labore, est hic ad repellat sit eius alias iusto deleniti sunt ut! Aliquid pariatur similique, consectetur dolor aperiam eum ea magnam libero id cumque nulla quod ex corporis esse magni quam doloremque perferendis molestiae unde doloribus aliquam velit? Ipsum dolorem, quos commodi ipsa hic quidem minus, et officia amet nam illum! Eligendi, dolor adipisci. Nam optio ad commodi aperiam deleniti pariatur quod, quisquam obcaecati quia sapiente dolore officia in atque non placeat? Asperiores, architecto! Tempore vitae obcaecati dolorem nisi consequatur quis atque eius. Modi, velit quae eveniet rerum deserunt perferendis eaque dolores. Dolorum corporis dolorem molestias consequuntur, possimus praesentium! Magni, officia suscipit placeat dignissimos consequuntur blanditiis odio debitis quis perspiciatis iusto dolore nobis, sed distinctio vel aperiam iure optio consectetur fugit similique, illo doloremque ipsa? Rem aliquid nemo, nulla, consequuntur optio quo, dolores dolore quidem praesentium libero sit. Ex accusantium doloribus eos fugit, architecto nobis eius ipsum numquam non, rerum corporis commodi veritatis possimus voluptatibus veniam? Impedit reiciendis laborum beatae quidem accusantium excepturi exercitationem veritatis cumque corrupti fugiat at voluptas eligendi nam soluta quae consequatur iusto ut odio obcaecati non praesentium illum, accusamus pariatur. Corrupti exercitationem vitae consequuntur adipisci sit nisi laboriosam? Consequuntur quibusdam non voluptatem vel repellendus! Vitae ipsa nemo, neque asperiores hic cupiditate. Magnam quia ab unde excepturi vel quidem alias corporis ullam. Qui accusantium recusandae, deserunt illo tenetur atque nobis quas libero, deleniti odit laboriosam earum, hic culpa suscipit minus repellat voluptas eos omnis inventore rerum voluptatibus consectetur modi quae! Iste hic mollitia eligendi. Perspiciatis deserunt similique aliquid molestiae corrupti ducimus impedit cupiditate reiciendis, quibusdam explicabo voluptas architecto velit esse enim neque repudiandae, magnam, incidunt dicta voluptate. Beatae ipsum aliquid aspernatur voluptatem deleniti! Aliquam, earum eius odit hic magni vero sequi, magnam aliquid placeat, distinctio deserunt? Tempore, nesciunt illum! Inventore placeat reiciendis veniam molestiae? Quaerat porro, sit nostrum corrupti rerum eos beatae ipsum quo, dicta commodi tempore illo cupiditate id deleniti. Excepturi voluptatum dicta perferendis fuga aliquid tenetur odit doloribus ratione ipsum voluptate in, praesentium aperiam molestiae maxime ex sunt? Quos ut aliquam unde. Soluta ratione, rerum provident ea nobis tempore architecto repudiandae ducimus. Possimus molestias voluptatem repudiandae harum. Adipisci consectetur, dolore labore beatae eum itaque incidunt commodi sapiente, consequuntur ea nobis! Itaque omnis distinctio repellendus doloremque quasi nobis quidem est, sequi nemo perspiciatis facilis quos animi, molestiae quod ipsum repudiandae amet exercitationem excepturi facere veritatis fuga illo expedita numquam voluptatum. Id ratione ipsam numquam obcaecati optio tenetur delectus ex corrupti suscipit harum nam architecto pariatur repellendus porro quidem, accusamus temporibus ullam dignissimos quas, vel perferendis unde excepturi! Iusto omnis, ex repudiandae suscipit voluptate officiis? Quibusdam ipsa nihil ex animi doloribus quae temporibus quas ratione corrupti magni et, ducimus fugiat tempore porro qui autem enim natus maxime earum reiciendis! Eius laborum iure culpa vitae possimus iste consequuntur aperiam, corporis vel et sunt. Exercitationem libero ea ad. Porro voluptates magni fugiat quod odit eligendi neque mollitia libero veniam illum repudiandae delectus, voluptatibus, voluptate quidem inventore eius nisi dolorum aspernatur perspiciatis! Repudiandae assumenda quis tempora veniam laudantium porro inventore magnam praesentium, nulla maxime eveniet eius expedita nam est corrupti iusto aperiam distinctio molestias minus beatae voluptatem aliquid. Molestias deserunt facilis facere. Odit iure earum ad rerum sunt ab, dolorum natus? Nisi facilis aut porro iusto, sequi vitae enim autem nam aspernatur? Id quibusdam architecto tempore placeat. Cumque, eaque. Perferendis, accusantium expedita. Minima fugiat dolor, vero praesentium quis non amet rerum aliquam doloremque iure maiores aut harum et culpa, tempore repellendus aliquid itaque quae animi minus, similique sapiente asperiores? Obcaecati aspernatur quaerat explicabo esse praesentium quas, incidunt, dolorum assumenda earum nulla, sapiente itaque debitis. Cum ad quaerat provident similique eos libero. Quidem autem odit ducimus labore exercitationem alias culpa nam itaque eos tempora provident, inventore reprehenderit perferendis incidunt aut deleniti facere, esse excepturi minus suscipit? Velit nemo, mollitia dicta quos vero rem modi veniam laborum atque consequatur, unde sed distinctio quae at est. Vel, distinctio quos tenetur impedit sapiente asperiores. Eum placeat aliquam magnam, nihil cum architecto distinctio veniam necessitatibus tempora eaque, et sequi beatae porro quod facere repellat! Eum pariatur soluta nihil voluptatem atque reiciendis, vel sit culpa maxime animi ea ad molestiae sed quod repellat? Suscipit, eius? Nisi nostrum ipsum sint mollitia repellat voluptas, inventore exercitationem natus voluptatum omnis cupiditate consequatur earum in vitae illo eius quo molestias officiis minima! Eius obcaecati, reprehenderit sit ipsam nulla dolorum, natus adipisci aut quos, cumque vel doloremque mollitia nisi esse maiores tempora vero omnis. Sint minima sed et incidunt, corporis iusto ipsum, ea quasi voluptas totam optio ipsam consequatur libero itaque, quisquam amet maiores iste at nihil nisi alias recusandae! Alias amet impedit doloremque explicabo soluta, ipsa quo consectetur, magni eligendi tempora dolor. At nam inventore a labore distinctio neque, quia optio nemo dolor voluptatem asperiores possimus sint modi voluptates ullam similique corporis natus sunt dolorem excepturi consequatur, deleniti repellendus fuga perferendis. Autem officia quae cupiditate saepe nulla vero, odio optio hic mollitia doloremque, maiores blanditiis quas.
      </div>
    );
  };
  
  export default Home;
  