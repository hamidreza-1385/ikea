import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar bg-light text-muted position-fixed left-4 top-4 mx-1 my-4 rounded-4 start-0">
            <h2>داشبورد متریال</h2>
            <ul className='bg-light '>
                <li className='my-4 h-sidebar-item'><Link className='custom-link ' to="/dashboard">داشبورد</Link></li>
                <li className='my-4 h-sidebar-item'><Link className='custom-link' to="/eshterak">اشتراک</Link></li>
                <li className='my-4 h-sidebar-item'><Link className='custom-link' to="/hesabkarbary">حساب کاربری</Link></li>
                <li className='my-4 h-sidebar-item'><Link className='custom-link' to="/mizkar">میز کار</Link></li>
                <li className='my-4 h-sidebar-item'><Link className='custom-link' to="/payamha">پیام ها</Link></li>
                <li className='my-4 h-sidebar-item'><Link className='custom-link' to="/listvazayef">لیست وظایف</Link></li>
                <li className='my-4 h-sidebar-item'><Link className='custom-link' to="/poshtibani">پشتیبانی</Link></li>
                <li className='my-4 h-sidebar-item'><Link className='custom-link' to="/didgah">دیدگاه</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;