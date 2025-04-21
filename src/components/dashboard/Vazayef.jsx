import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link } from 'react-router-dom';

function VazayefList() {
    return (
        <div className="d-flex align-items-start border rounded p-3 shadow-sm bg-light justify-content-end w-100" >
            <div >
                <h6 className="text-success mb-1 text-end px-1 py-2">لیست وظایف</h6>
                <div className="fw-bold text-end mx-lg-4 mx-1">2 کار</div>
                <div className="text-muted text-end mx-lg-4 mx-1">1کار انجام نشده</div>
                <Link to={'/listvazayef'}><div className="text-secondary mt-1 text-decoration-underline">مشاهده</div></Link>
            </div>
            <div className="bg-success text-white rounded-3 d-flex align-items-center justify-content-center me-3" style={{ width: '30px', height: '30px' }}>
                <i className="bi bi-list-check p-1"></i> {/* نیاز به Bootstrap Icons دارد */}
            </div>
        </div>
    );
}

export default VazayefList;