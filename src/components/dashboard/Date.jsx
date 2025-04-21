import React, { useState, useEffect } from 'react';
import moment from 'jalali-moment';
import 'bootstrap-icons/font/bootstrap-icons.css'

function PersianDateWidget() {
    const [currentDate, setCurrentDate] = useState(moment());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(moment()); // به‌روزرسانی تاریخ و زمان
        }, 1000);

        return () => clearInterval(interval); // جلوگیری از Memory Leak
    }, []);

    return (
        <div className="d-flex align-items-start border rounded p-3 shadow-sm bg-light justify-content-end w-100" >
            <div>
                <h6 className="text-orange mb-1 text-end px-4 py-2">تاریخ</h6>
                <div className="fw-bold">{currentDate.format('dddd jD jMMMM')}</div> {/* دوشنبه 27 اسفند */}
                <div className="text-muted">{currentDate.format('jYYYY/jMM/jDD')}</div> {/* 1402/12/27 */}
                <div className="text-secondary mt-1">{currentDate.format('HH:mm:ss')}</div> {/* 17:10:32 */}
            </div>
            <div className="bg-orange text-white rounded-3 d-flex align-items-center justify-content-center me-3" style={{ width: '30px', height: '30px' }}>
                <i className="bi bi-calendar p-1"></i> {/* نیاز به Bootstrap Icons دارد */}
            </div>
        </div>
    );
}

export default PersianDateWidget;