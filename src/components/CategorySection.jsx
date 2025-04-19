import React, { useState } from 'react';
import { categoryTabs, categoryData } from '../data/categories';
import '../../src/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CategorySection = () => {
  const [activeTab, setActiveTab] = useState('shop-products');

  return (
    <div className="category-section mx-5">
      {/* Tabs */}
      <div className="category-tabs bord-b">
        {categoryTabs.map(tab => (
          
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={` tab-button ${activeTab === tab.key ? 'active' : ''}`}
          >
            <FontAwesomeIcon icon={tab.icon} className="me-2" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Category Items */}
      <div className="category-slider-container my-3 category-tabs z-500">
        <div className="category-slider">
          {categoryData[activeTab].map((cat, idx) => (
            <div className="category-item mx-3 my-3" key={idx}>
              <section className='img-cat-cont text-center'>
                <img className='img-cat h-2' src={cat.img} />
                <span className='pp ht'>{cat.title}</span>
                

              </section>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
//