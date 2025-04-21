import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link } from 'react-router-dom';

function TicketV() {
    return (
        <div className="border rounded p-3 shadow-sm bg-light w-100" >
            <div className='d-flex border-b justify-content-between'>
                <i className='bi bi-plus p-1'></i>
                <Link className='icon-h custom-link' to={'/poshtibani'}><p>تیکت ها</p></Link>
                <i className="bi bi-ticket p-1"></i>
            </div>
            <div>
                <Link className='custom-link' to={'/poshtibani'}><div className='d-flex justify-content-between align-items-center '>
                    <section className='my-3 mx-5'>مشاهده</section>
                    <section className='my-3 mx-5'><p className='p-clear'>خرید دامنه</p><p className='text-success p-clear text-end'>17:00</p></section>
                </div></Link>
                <Link className='custom-link' to={'/poshtibani'}><div className='d-flex justify-content-between align-items-center '>
                    <section className='my-3 mx-5'>مشاهده</section>
                    <section className='my-3 mx-5'><p className='p-clear'>خرید دامنه</p><p className='text-success p-clear text-end'>17:00</p></section>
                </div></Link>
            </div>
            
        </div>
    );
}

export default TicketV;