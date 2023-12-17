import ReactModal from "react-modal";
import "./CartModal.css";
import { FaTrashCan, FaXmark } from "react-icons/fa6";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";

const CartModal = ({ isOpen, setIsOpen }) => {
  const { cartItems, removeFromCart, getTotalCartAmount } = useContext(CartContext);
  const closeModal = () => setIsOpen(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = cartItems.reduce((allItems, item) =>{
        return allItems + item.new_price
    },0)
    setTotal(newTotal);
}, [cartItems]);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "50%",
      height: "50%",
      color: "black",
      padding: 0,
    },
  };
  return (
    <ReactModal isOpen={isOpen} style={customStyles}>
      <div className="modal_container">
        <div className="modal_header">
          <h1>Cart Modal</h1>
            <FaXmark style={{ cursor: "pointer" }} onClick={closeModal}/>
          
        </div>
        <h4>Your products:</h4>
        <div className="modal_cartitems">
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.name} - ${item.new_price} -{" "}
                  <FaTrashCan
                    style={{ cursor: "pointer" }}
                    onClick={() => removeFromCart(item.id)}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <p>El carrito está vacío.</p>
          )}
        </div>
        <div className="modal_total">
        <h2>Total amount: ${total} USD</h2>
        <button>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </ReactModal>
  );
};

export default CartModal;
