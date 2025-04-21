import Sidebar from '../../components/dashboard/Sidebar';
import Header from '../../components/dashboard/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faContactCard, faI } from '@fortawesome/free-solid-svg-icons';
import PersianDateWidget from '../../components/dashboard/Date';
import VazayefList from '../../components/dashboard/Vazayef';
import MizKarV from '../../components/dashboard/MizKarV';
import TicketV from '../../components/dashboard/TicketV';
import '../../index.css';




const Dashboard = () => {
    return (
        <div className="dashboard-container ml">
            <div className='d-none d-lg-block'><Sidebar/></div>
            <div className="main-content">
                <Header />
                <div className='bg-light rounded-4 p-4 justify-content-end'>
                    <section className='d-flex justify-content-end bg-primary text-white align-items-center p-2 rounded-2 w-auto m-3'>شماره موبابل شما به درستی ثبت نشده است . لطفا در اصرا وقت به تصخیخ ان اقدام نمایید <FontAwesomeIcon className='bg-white text-primary p-2 m-2 rounded-2' icon={faContactCard}/></section>
                    <div className='d-flex justify-content-end'>
                        <div className='m-3 d-flex justify-content-end col-lg-4 col-5'><VazayefList/></div>
                        <div className='m-3 d-flex justify-content-end col-lg-4 col-5'><PersianDateWidget/></div>
                    </div>
                    <div className='d-lg-flex d-block justify-content-end'>
                        <div className='m-3 d-flex justify-content-end col-lg-5 col-10'><MizKarV/></div>
                        <div className='m-3 d-flex justify-content-end col-lg-5 col-10'><TicketV/></div>
                    </div>
                    <div className='d-lg-flex d-block justify-content-end'>
                        <div className='m-3 d-flex justify-content-end col-lg-5 col-10'><MizKarV/></div>
                        <div className='m-3 d-flex justify-content-end col-lg-5 col-10'><TicketV/></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;