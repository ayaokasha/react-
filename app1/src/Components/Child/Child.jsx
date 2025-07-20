import React from "react";

export default function Child(props) {
  let { code, price, category, count, onSale , id} = props.productDetils;
  return (
    <>
      <div className="col-lg-4">
        <div className="bg-light text-dark p-4 position-relative">
          <h4>name : {code}</h4>
          <h4>price: {price}</h4>
          <h4>category : {category}</h4>
          <h4>count : {count}</h4>

          {onSale && <div className="sale p-1 position-absolute top-0 end-0 bg-danger text-white fs-4">sale</div>}
       
       <button onClick={()=>props.onDelete(id)} className="btn btn-outline-danger w-100 btn-sm mb-2"> Delete</button>
       <button onClick={()=>props.onUpdate(props.index , 1)} className="btn btn-outline-warning w-100 btn-sm mb-2">Update +</button>
       <button onClick={()=>props.onUpdate(props.index , -1)} className="btn btn-outline-success w-100 btn-sm mb-2">Update -</button>

        </div>
      </div>
    </>
  );
}
