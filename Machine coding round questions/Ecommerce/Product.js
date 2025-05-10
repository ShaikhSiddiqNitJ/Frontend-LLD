
const Product = ({ products, addToCart, cart }) => {
    return (
      <div
        style={{
          width: "80%",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {products.map((product) => {
          const isInCart = cart.some((item) => item.id === product.id);
          return (
            <div key={product.id} style={{ margin: "10px" }}>
              <img
                width="100%"
                height={300}
                src={product.thumbnail}
                alt={product.title}
              />
  
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "5px 15px",
                }}
              >
                <div>{product.title}</div>
                <div>{product.price}</div>
              </div>
  
              <div>
                <button
                  style={{
                    border: "1px solid black",
                    borderRadius: "5px",
                    padding: "5px",
                    backgroundColor: "lightgreen",
                    width: "fit-content",
                    margin: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() => addToCart(product)}
                  disabled={isInCart}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default Product;
  