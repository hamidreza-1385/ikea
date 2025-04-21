import Sidebar from '../../components/dashboard/Sidebar';
import Header from '../../components/dashboard/Header';
import mImg from '../../imgs/dashbord/m.png'
const MizKar = () => {
    return (
        <div className="dashboard-container ml">
            <div className='d-none d-lg-block'><Sidebar/></div>
            <div className="main-content">
                <Header />
                <div className='bg-light rounded-4 p-4 justify-content-end'>
                    <img className='p-clear img-fluid' src={mImg}></img>
                </div>
                
            </div>
        </div>
    );
};

export default MizKar;