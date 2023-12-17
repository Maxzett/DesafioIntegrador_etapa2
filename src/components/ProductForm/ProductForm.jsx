import { useState } from "react";
import { ProductFormDictionary } from "../../utils/ProductFormDictionary";
import { toast } from "react-toastify";
import "./ProductForm.css";

const ProductForm = ({ fetchData }) => {
  const [productFormValues, setProductFormValues] = useState({
    name: "",
    image: "",
    description: "",
    old_price: 0,
    new_price: 0,
  });
  const handleUpdateProductFormValues = (value, inputReference) => {
    if (inputReference === ProductFormDictionary.NAME) {
      setProductFormValues((prevState) => ({ ...prevState, name: value }));
    }
    if (inputReference === ProductFormDictionary.IMAGE) {
      setProductFormValues((prevState) => ({ ...prevState, image: value }));
    }
    if (inputReference === ProductFormDictionary.DESCRIPTION) {
      setProductFormValues((prevState) => ({...prevState, description: value }));
    }
    if (inputReference === ProductFormDictionary.NEW_PRICE) {
      setProductFormValues((prevState) => ({ ...prevState, new_price: value }));
    }
    if (inputReference === ProductFormDictionary.OLD_PRICE) {
      setProductFormValues((prevState) => ({ ...prevState, old_price: value }));
    }
    if (inputReference === ProductFormDictionary.IMAGE) {
      setProductFormValues((prevState) => ({ ...prevState, image: value }));
    }
  };

  const handleSubmitForm = async () => {
    try {
      const response = await fetch(
        "https://65678e4d64fcff8d7310950f.mockapi.io/All_Products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productFormValues),
        }
      );

      if (!response.ok) {
        throw new Error("Error al agregar un producto.");
      }
      try {
        await fetchData();
      } catch (error) {
        toast.error("Error al actualizar los datos.");
      }
      toast.success("Producto Agregado con éxito.");
    } catch (error) {
      toast.error("Error al agregar un producto.");
    }
  };

  return (
    <div className="productform">
      <form>
        <h1>Update</h1>
        <div className="productform_fields">
          <input
            type="text"
            placeholder={"Name"}
            onChange={(e) =>
              handleUpdateProductFormValues(
                e.target.value,
                ProductFormDictionary.NAME
              )
            }
          />
          <input
            type="text"
            placeholder={"Description"}
            onChange={(e) =>
              handleUpdateProductFormValues(
                e.target.value,
                ProductFormDictionary.DESCRIPTION
              )
            }
          />
          <input
            type="number"
            placeholder={"New Price"}
            onChange={(e) =>
              handleUpdateProductFormValues(
                e.target.value,
                ProductFormDictionary.NEW_PRICE
              )
            }
          />
          <input
            type="number"
            placeholder={"Old Price"}
            onChange={(e) =>
              handleUpdateProductFormValues(
                e.target.value,
                ProductFormDictionary.OLD_PRICE
              )
            }
          />
          <input
            type="file"
            placeholder={"Photo"}
            onChange={(e) =>
              handleUpdateProductFormValues(
                e.target.value,
                ProductFormDictionary.IMAGE
              )
            }
          />
        </div>
        <button onClick={handleSubmitForm}>Agregar Producto</button>
      </form>
    </div>
  );
};

export default ProductForm;
