import Sidebar from '../../components/dashboard/Sidebar';
import Header from '../../components/dashboard/Header';
import eImg from '../../imgs/dashbord/e.png'

const Eshterak = () => {
    return (
        <div className="dashboard-container ml">
            <div className='d-none d-lg-block'><Sidebar/></div>
            <div className="main-content">
                <Header />
                <div className='bg-light rounded-4 p-4 justify-content-end'>
                    <img className='p-clear img-fluid' src={eImg}></img>
                </div>
            </div>
        </div>
    );
};

export default Eshterak;