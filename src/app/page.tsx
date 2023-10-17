import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDoc,
  query,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "./firebase";
import Stripe from "stripe";
import ProductCard from "@/components/cards/ProductCard";

async function getStripeProducts() {
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
    apiVersion: "2023-10-16",
  });
  const res = await stripe.prices.list({
    expand: ["data.product"],
  });
  const prices = res.data;
  return prices;
}

export default async function Home() {
  const products = await getStripeProducts();
  // const [items, setItems] = useState<any[]>([]);
  // const [newItem, setNewItem] = useState({ name: "", price: "" });
  // const [total, setTotal] = useState(0);

  // // Add item to database
  // const addItem = async (e: any) => {
  //   e.preventDefault();
  //   if (newItem.name !== "" || newItem.price !== "") {
  //     //setItems([...items, newItem]);
  //     await addDoc(collection(db, "items"), {
  //       name: newItem.name.trim(),
  //       price: newItem.price,
  //     });
  //     setNewItem({ name: "", price: "" });
  //   }
  // };

  // // Read items from database
  // useEffect(() => {
  //   const q = query(collection(db, "items"));
  //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //     let itemsArr: any[] = [];
  //     querySnapshot.forEach((doc) => {
  //       itemsArr.push({ ...doc.data(), id: doc.id });
  //     });
  //     setItems(itemsArr);

  //     // Read total from itemsArr
  //     const calculateTotal = () => {
  //       const totalPrice = itemsArr.reduce(
  //         (sum, item) => sum + parseFloat(item.price),
  //         0
  //       );
  //       setTotal(totalPrice);
  //     };
  //     calculateTotal();

  //     return () => unsubscribe();
  //   });
  // }, []);

  // // Delete items from database
  // const deleteItem = async (id: any) => {
  //   await deleteDoc(doc(db, "items", id));
  // };

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between sm:p-24 p-4">
    <main className="p-4 flex flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-[1000px] w-full mx-auto gap-4">
        {products.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })}
      </div>

      {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="text-4xl p-4 text-center">Expense Tracker</h1>
        <div className="bg-slate-800 p-4 rounded-lg text-white">
          <form className="grid grid-cols-6 items-center text-black">
            <input
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              className="col-span-3 p-3 border"
              type="text"
              placeholder="Enter Item"
            />
            <input
              value={newItem.price}
              onChange={(e) =>
                setNewItem({ ...newItem, price: e.target.value })
              }
              className="col-span-2 p-3 border mx-3"
              type="number"
              placeholder="Enter $"
            />
            <button
              onClick={addItem}
              className="text-white bg-slate-950 hover:bg-slate-900 p-3 text-xl"
              type="submit"
            >
              +
            </button>
          </form>
          <ul>
            {items.map((item, id) => (
              <li
                key={id}
                className="my-4 w-full flex justify-between bg-slate-950"
              >
                <div className="p-4 w-full flex justify-between">
                  <span className="capitalize">{item.name}</span>
                  <span>${item.price}</span>
                </div>
                <button
                  onClick={() => deleteItem(item.id)}
                  className="ml-8 p-4 border-l-2 border-slate-900 hover:bg-slate-900 w-16"
                >
                  X
                </button>
              </li>
            ))}
          </ul>
          {items.length > 0 && (
            <div className="p- flex w-full justify-between">
              <span>Total</span>
              <span>${total}</span>
            </div>
          )}
        </div>
      </div> */}
    </main>
  );
}
