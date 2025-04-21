import React, { useState } from 'react';
import { categoryTabs, categoryData } from '../data/categories';
import '../../src/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CategoryPop = () => {
  const [activeTab, setActiveTab] = useState('shop-products');

  const handleTabClick = (key) => {
    setActiveTab(prev => (prev === key ? null : key));
  };

  return (
    <div className=" category-section mx-2">
      {/* Tabs */}
      <div className="flex flex-col category-tab bord-b">
        {categoryTabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => handleTabClick(tab.key)}
            className={`tab-button ${activeTab === tab.key ? 'active' : ''}ََ`}
          >
            <div className="det">
            <FontAwesomeIcon icon={tab.icon} className="me-2" />
            <span>{tab.label}</span>
            
            </div>
          </button>
        ))}
      </div>

      {/* Category Items */}
      {activeTab && (
        <div className="category-slider-container my-3 category-tabs z-500">
          <div className="category-slider">
            {categoryData[activeTab].map((cat, idx) => (
              <div className="category-item mx-3 my-3" key={idx}>
                <section className='img-cat-cont text-center '>
                  <img className='img-cat h-2' src={cat.img} alt={cat.title} />
                  <span className='pp ht'>{cat.title}</span>
                </section>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className='bg-light py-4  px-2 mtat'><span>Downlod and shop in the IKEA app</span></div>
    </div>
  );
};

export default CategoryPop;