import React, { useState } from "react";
import Child from "../Child/Child.jsx";

export default function Parent() {
  const [count, setCount] = useState(0);

  const [products, setProduct] = useState([
    {
      id: 12345678,
      code: "toshipa c3",
      price: 2300,
      category: "tv",
      onSale: false,
      count: 23,
    },
    {
      id: 12345679,
      code: "samsung qled",
      price: 4500,
      category: "tv",
      onSale: true,
      count: 15,
    },
    {
      id: 12345680,
      code: "lg ultra hd",
      price: 3800,
      category: "tv",
      onSale: false,
      count: 30,
    },
    {
      id: 12345681,
      code: "sony bravia",
      price: 5200,
      category: "tv",
      onSale: true,
      count: 10,
    },
    {
      id: 12345682,
      code: "sharp smart",
      price: 2900,
      category: "tv",
      onSale: false,
      count: 18,
    },
    {
      id: 12345683,
      code: "panasonic led",
      price: 3100,
      category: "tv",
      onSale: true,
      count: 25,
    },
  ]);

  function deleteProuduct(productId) {
    //deep copy structuredClone
    let newProducts = structuredClone(products);
    //update copy with filtering id
    newProducts = newProducts.filter((product) => product.id != productId);
    //setState
    setProduct(newProducts);
  }

  function updateProuduct(productIndex , step) {
    let newProducts = structuredClone(products);

    newProducts[productIndex].count += step ;

    setProduct(newProducts);
  }

  return (
    <>
      <h2>Parent Component {count} </h2>

      <div className="container bg-dark text-white p-3">
        <div className="row g-4">
          {products.map((product, index) => (
            <Child
              productDetils={product}
              index={index}
              onDelete={deleteProuduct}
              onUpdate={updateProuduct}
            />
          ))}
        </div>
      </div>
    </>
  );
}
