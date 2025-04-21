import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Dashboard from '../../pages/dashboard/Dashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import '../../index.css';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'demo' && password === '1234') {
            navigate('/dashboard'); // هدایت به صفحه داشبورد
        } else {
            alert('نام کاربری یا رمز عبور اشتباه است!');
        }
    };

    return (
        <div className="  login-container bg-log p-lg-3 p-1 justify-content-end">
            <div className='col-lg-5 col-11 bg-chgh rounded-5 text-center m-lg-5 m-2 p-lg-5 p-3 pt-5'>
            <div className='d-flex justify-content-center mb-5'><h2 className='text-white logh p-3'>ورود به حساب کاربری</h2></div>
            <form onSubmit={handleLogin} className='my-5'>
                <div>
                <input
                    className='inp inpf px-4 py-2 my-4'
                    type="text"
                    placeholder="userame : demo"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                </div>
                <div>
                <input
                    className='inp inpf px-4 py-2 my-4'
                    type="password"
                    placeholder="password : 1234"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                
                </div>
                <button className='mt-5 bg-white border-0 px-5 py-3 rounded-4 text-sp' type="submit"><FontAwesomeIcon icon={faRightFromBracket}/>ورود</button>
                {/* <Link to={'/dashboard'}><button type="submit"><FontAwesomeIcon icon={faRightFromBracket}/>ورود</button></Link> */}
            </form>
            </div>
        </div>
    );
};

export default Login;
