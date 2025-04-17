import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCamera } from '@fortawesome/free-solid-svg-icons';
import './SearchToggle.css';

const SearchBox = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [query, setQuery] = useState('');
  const boxRef = useRef(null);

  const history = ['OLIVBLAD']; // یا از localStorage بگیر بعداً

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setShowPopup(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  const [value, setValue] = useState('');

  const handleClear = () => {
    setValue('');
  };
  
  return (
    <div className="search-container" ref={boxRef}>
      {/* 🔍 باکس سرچ اصلی */}
      <div
        className="d-flex justify-content-between bg-search w-100 py-2 px-4 mx-5 rounded-5 border search-input-box"
        onClick={() => setShowPopup(true)}
      >
        <div className="d-flex align-items-center flex-grow-1">
          <FontAwesomeIcon icon={faSearch} className="me-2 text-secondary" />
          <span className="text-muted">What are you looking for?</span>
        </div>
        <FontAwesomeIcon icon={faCamera} className="text-secondary mt-1" />
      </div>

      {/* 📩 پاپ‌آپ زیر سرچ */}
      {showPopup && (
        <div className="search-popup bg-white shadow rounded mtt p-3 ll z-200">
          
          <div className="d-flex justify-content-between text-muted mb-2">
            <FontAwesomeIcon icon={faSearch} className="me-2 text-secondary mx-2" />
            <input className='w-100 mx-3 m-i-s border-0 bbb' value={value} onChange={(e) => setValue(e.target.value)} placeholder='What are you looking for?'/>
            <small onClick={handleClear} className="text-primary" style={{ cursor: 'pointer' }}>Clear</small>
            <FontAwesomeIcon icon={faCamera} className="text-secondary mx-2" />
          </div>
          {history.map((item, index) => (
            <div className="d-flex align-items-center mb-2" key={index}>
              <img src="/imgs/dasmal.png" alt="" width="40" className="me-2" />
              <div>
                <div className="fw-bold">{item}</div>
                <div className="text-muted small">plant mover</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBox;






