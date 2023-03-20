import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context)
    throw new Error("useCart debe estar dentro del CartContextProvider");
  return context;
};

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (product, cantidad, userId = 1) => {
    //verificar si el producto exite
    const productFound = cart.findIndex((el) => el.id === product.id);

    //si no existe lo creas y lo guardas
    if (productFound === -1) {
      //crear un producto
      const newProduct = {
        ...product,
        cantidad: Number(cantidad),
        userId,
      };
      setCart([...cart, newProduct]);
    } else {
      //si existe aumenta su cantidad
      addCantidad(product.id, cantidad);
    }
  };

  //aumentar y disminuir la cantidad de un producto
  const addCantidad = (id, cantidad) => {
    const newCart = cart.map((el) => {
      if (el.id === id) {
        if (cantidad > 0) {
          el.cantidad += Number(cantidad);
        }
        if (cantidad < 0 && el.cantidad > 1) {
          el.cantidad += Number(cantidad);
        }
      }
      return el;
    });
    setCart(newCart);
  };

  const setCantidad = (id, cantidad) => {
    const newCart = cart.map((el) => {
      if (el.id === id) {
        el.cantidad = Number(cantidad);
      }
      return el;
    });
    setCart(newCart);
  };

  const removeProduct = (id) => {
    const newProductos = cart.filter((el) => el.id !== id);
    setCart(newProductos);
  };

  const verTotal = () => {
    const productoPagar = cart.filter((el) => {
      el.pagar = el.cantidad * el.precio;
      return el;
    });

    const total = productoPagar.reduce((acumulador, currentValue) => {
      return acumulador + currentValue.pagar;
    }, 0);

    return total;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        addCantidad,
        removeProduct,
        setCantidad,
        verTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
