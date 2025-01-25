import { useSelector } from "react-redux";

export default function AddToCart() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  return (
    <div className={` bdr mb-10 ${darkMode ? "bg-slate-900 " : ""}`} >

    <div className={`margin  mb-20 ${darkMode ? "text-white" : ""} `}>
        <div className="flex  h-5 w-28 justify-between py-20">
          <span className="opacity-50 ">Home</span>
          <span>/</span>
          <span>Cart</span>
        </div>
      <div className=" flex flex-col gap-10 ">

        <div className="flex h-20 items-center justify-between px-10  shadow1">
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Subtotal</span>
        </div>
        <div className="flex h-24 items-center  justify-between px-10 shadow1">
          <span>Product</span>
          <span>$650</span>
          <span className="h-11 w-16 text-center ">
            <input
              type="number"
              className="h-11 w-16 bdr rounded p-2"
              placeholder="01"
            />
          </span>

          <span>$650</span>
        </div>
        <div className="flex h-24 items-center  justify-between px-10 shadow1">
          <span>Product</span>
          <span>$550</span>
          <span className="h-11 w-16 text-center ">
            <input
              type="number"
              className="h-11 w-16 bdr rounded p-2"
              placeholder="01"
            />
          </span>

          <span>$1100</span>
        </div>
      </div>
      <div className="h-14 w-full flex justify-between mt-6">
        <div className="h-14 w-52 border-[1px]  bg-center font-medium rounded border-[gray]">
          Return To Shop
        </div>
        <div className="h-14 w-52 border-[1px]  bg-center font-medium rounded border-[gray]">
          Update Cart
        </div>
      </div>

      <div className="h-80  w-full flex justify-between mt-20 flex-wrap overflow-hidden">
        <div className=" h-14 w-[527px] flex justify-between">
          <input
            type="text"
            className="h-14 border-[1px] w-[300px]  rounded px-5 border-[gray]"
            placeholder="Coupon Code"
          />
          <button className="w-52 h-14 rounded  bg-primary text-white">
            Apply Coupon
          </button>
        </div>

<div className="w-[470px] h-80 border-[2px] border-[gray] rounded flex flex-col gap-4 justify-center px-6">
<h2 className="text-[20px] font-medium">Cart Total</h2>

<div className="border-b pb-4 flex justify-between">
<span>Subtotal:</span>
<span>$1750</span>
</div>

<div className="border-b pb-4 flex justify-between">
<span>Shipping:</span>
<span>Free</span>
</div>

<div className="flex justify-between">
<span>Total:</span>
<span>$1750</span>
</div>

<button className="h-14 w-64 bg-primary rounded mx-auto bg-center text-white">Procees to checkout</button>

</div>

      </div>
    </div>
    </div>
  );
}
