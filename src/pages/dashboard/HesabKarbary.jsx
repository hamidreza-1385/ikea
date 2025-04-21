import Sidebar from '../../components/dashboard/Sidebar';
import Header from '../../components/dashboard/Header';
import hImg from '../../imgs/dashbord/h.png'
const HesabKarbary = () => {
    return (
        <div className="dashboard-container ml">
            <div className='d-none d-lg-block'><Sidebar/></div>
            <div className="main-content">
                <Header />
                <div className='bg-light rounded-4 p-4 justify-content-end'>
                    <img className='p-clear img-fluid' src={hImg}></img>
                </div>
            </div>
        </div>
    );
};

export default HesabKarbary;



        