// "use client";
// import { useRef } from "react";
// import { useAppSelector, useAppDispatch, UseAppStore } from "../lib/hooks";
// import { initializeCount } from "@/lib/features/counter/counterSlice";
// export default function ProductName() {
//   // Initialize the store with the product information
//   const store = UseAppStore();
//   const initialized = useRef(false);
//   if (!initialized.current) {
//     // store.dispatch(initializeProduct(product));

//     initialized.current = true;
//   }
//   const name = useAppSelector((state) => state.product.name);
//   const dispatch = useAppDispatch();

//   return (
//     // <input
//     //   value={name}
//     //   onChange={(e) => dispatch(setProductName(e.target.value))}
//     // />
//     <>
//       <button onClick={}></button>
//     </>
//   );
// }
