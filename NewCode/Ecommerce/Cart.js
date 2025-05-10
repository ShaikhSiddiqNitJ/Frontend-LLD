
const Cart = ({ cart, removeProduct, increaseQuantity, decreaseQuantity }) => {
    return (
      <div
        style={{
          width: "20%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>CART</h2>
  
        {cart.length === 0 && <p>Cart is Empty...</p>}
  
        {cart.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                width: "70%",
                padding: "10px",
              }}
            >
              <img width="100%" src={item.thumbnail} alt={item.title} />
  
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div>{item.title}</div>
  
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    onClick={() => increaseQuantity(item)}
                    style={{
                      border: "1px solid black",
                      borderRadius: "5px",
                      padding: "0 5px",
                      backgroundColor: "lightgreen",
                      textAlign: "center",
                      fontSize: "12px",
                      height: "fit-content",
                      margin: "0 5px",
                      cursor: "pointer",
                      color: "#000",
                    }}
                  >
                    +
                  </div>
                  <div>{item.quantity}</div>
                  <div
                    onClick={() => decreaseQuantity(item)}
                    style={{
                      border: "1px solid black",
                      borderRadius: "5px",
                      padding: "0 5px",
                      backgroundColor: "lightgreen",
                      textAlign: "center",
                      fontSize: "12px",
                      height: "fit-content",
                      margin: "0 5px",
                      cursor: "pointer",
                      color: "#000",
                    }}
                  >
                    -
                  </div>
                  <div>{item.totalPrice}</div>
                </div>
              </div>
  
              <button
                onClick={() => removeProduct(item)}
                style={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  padding: "5px",
                  backgroundColor: "lightcoral",
                  width: "fit-content",
                  margin: "5px",
                  fontSize: "12px",
                  cursor: "pointer",
                }}
              >
                REMOVE
              </button>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default Cart;
  
  
  