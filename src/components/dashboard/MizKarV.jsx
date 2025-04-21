import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link } from 'react-router-dom';

function MizKarV() {
    return (
        <div className="border rounded p-3 shadow-sm bg-light w-100" >
            <div className='d-flex border-b justify-content-between'>
                <i className='bi bi-plus p-1'></i>
                <Link className='icon-h custom-link' to={'/mizkar'}><p>میز های کار</p></Link>
                <i className="bi bi-calendar p-1"></i>
            </div>
            <div>
                <Link className='custom-link' to={'/mizkar'}><div className='d-flex justify-content-between align-items-center '>
                    <section className='my-3 mx-5'><i className='bi bi-play bg-banafsh rounded-2 p-1'></i></section>
                    <section className='my-3 mx-5'><p className='p-clear'>mizkar1</p><p className='text-success p-clear text-end'>فعال</p></section>
                </div></Link>
                <Link className='custom-link' to={'/mizkar'}><div className='d-flex justify-content-between align-items-center '>
                    <section className='my-3 mx-5'><i className='bi bi-play bg-banafsh rounded-2 p-1'></i></section>
                    <section className='my-3 mx-5'><p className='p-clear'>mizkar2</p><p className='text-success p-clear text-end'>فعال</p></section>
                </div></Link>
            </div>
        </div>
    );
}

export default MizKarV;