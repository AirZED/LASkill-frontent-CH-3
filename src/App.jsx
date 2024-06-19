import Card from "./components/atoms/Card";
import Form from "./components/atoms/Form";
import Hero from "./components/molecules/Hero";
import Navbar from "./components/molecules/Nav";
import { useState, useRef } from "react";

function App() {
  // const nameRef = useRef();
  // const [name, setName] = useState("");

  // const changeNameHandler = (e) => {
  //   e.preventDefault();
  //   setName(nameRef.current.value);
  // };
  "";
  const [products, setProducts] = useState([
    {
      name: "Noteworthy technology acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order",
    },
  ]);

  const addProductHandler = (name, description) => {
    const newProduct = { name: name, description: description };
    setProducts((prev) => [...prev, newProduct]);
  };

  return (
    <div>
      {/* <Navbar /> */}
      <Form onAddProduct={addProductHandler} />

      <div className="flex pt-[1rem]">
        {products.map((el, id) => {
          return <Card product={el} key={id} />;
        })}
      </div>
      {/* <div className="mt-[2rem] p-3 border-1 border-black border rounded-md">
        <h2>{name ? name : "Input a name"}</h2>
        <form action="submit" onSubmit={changeNameHandler}>
          <input
            ref={nameRef}
            type="text"
            className="border border-black outline-none px-2 py-1"
          />
          <button className="bg-red-900 text-white px-2 py-1">
            Change Name
          </button>
        </form>
      </div> */}
    </div>
  );
}

export default App;
