import TaskList from "../../components/dashboard/VazayefV/TaskList";
import TaskForm from "../../components/dashboard/VazayefV/TaskForm";
import Sidebar from '../../components/dashboard/Sidebar';
import Header from '../../components/dashboard/Header';
const ListVazayef = () => {
  return (
    <div className="dashboard-container ml">
            <div className='d-none d-lg-block'><Sidebar/></div>
            <div className="main-content">
                <Header />
                <div className="bg-light rounded-4 p-4 justify-content-end d-lg-flex d-block">
                  <div className="col-lg-5 col-11 border p-4 m-3 mx-5 bg-white"><TaskForm /></div>
                  <div className="col-lg-6 col-11"><h1 className="text-2xl font-bold text-center mb-4">لیست کارها</h1><TaskList /></div>
                  
                </div>
            </div>
        </div>
  );
};
 export default ListVazayef;