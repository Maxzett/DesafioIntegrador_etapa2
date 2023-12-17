import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { FaCartShopping, FaTrashCan } from "react-icons/fa6";
import { CartContext } from "../../context/CartContext";
import './Item.css'

const Item = ({ product, fetchProductsData }) => {
  const { addToCart } = useContext(CartContext)
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  const handleDelete = async (id) => {
    try {
      setIsDeleteLoading(true);
      const response = await fetch(
        `https://65678e4d64fcff8d7310950f.mockapi.io/All_Products/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) throw new Error("El producto no se pudo eliminar.");
      toast.success("Producto eliminado con éxito.");
      fetchProductsData();
      setIsDeleteLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("El producto no se pudo eliminar.");
      setIsDeleteLoading(false);
    }
  };
  return (
    <div>
      {isDeleteLoading ? (
        <p>Eliminando producto...</p>
      ) : (
        <>
          <div className="item">
            <img src={product.image} alt="" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <div className="item_price">
              <p className="item_price_new">${product.new_price}</p>
              <p className="item_price_old">${product.old_price}</p>
            </div>
          <div className="item_button_container">
            <button className="item_add_btn" onClick={() => addToCart(product)}>
              <FaCartShopping />
              {" "}
              Add to Cart
              
            </button>
            <button className="item_remove_btn" onClick={() => handleDelete(product.id)}>
              {" "}
              <FaTrashCan />
            </button>
          </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Item;