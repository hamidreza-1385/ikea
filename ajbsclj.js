




function ProductList() {
    return (
      <div className=" container  ">
        <div className="d-flex category-slider-container  category-tabs ">
          {products.map((product) => (
            <div className="col-md-6 col-lg-4" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    );
  }