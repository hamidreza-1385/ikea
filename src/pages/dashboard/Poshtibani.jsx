import Sidebar from '../../components/dashboard/Sidebar';
import Header from '../../components/dashboard/Header';
import TicketDashboard from '../../components/dashboard/TicketDashboard';

const Poshtibani = () => {
    return (
        <div className="dashboard-container ml">
            <div className='d-none d-lg-block'><Sidebar/></div>
            <div className="main-content">
                <Header />
                <div className='bg-light rounded-4 p-4 justify-content-end'>
                <TicketDashboard/>
                </div>
            </div>
        </div>
    );
};

export default Poshtibani;