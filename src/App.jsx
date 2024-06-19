import Card from "./components/atoms/Card";
import Form from "./components/atoms/Form";
import Hero from "./components/molecules/Hero";
import Navbar from "./components/molecules/Nav";
import { useState, useRef } from "react";

function App() {
  const nameRef = useRef();
  // const [name, setName] = useState("Franklin");

  // console.log(name);

  // const changeNameHandler = (e) => {
  //   e.preventDefault();
  //   setName(nameRef.current.value);
  // };

  const [products, setProducts] = useState([]);

  const addProductHandler = (name, description) => {
    const newProduct = { name: name, description: description, id: Date.now() };
    setProducts((prev) => [...prev, newProduct]);
  };

  const removeProductHandler = (id) => {
    setProducts((prev) => prev.filter((el) => el.id !== id));
  };

  return (
    <div>
      {/* <div className="mt-[2rem] p-3 border-1 border-black border rounded-md">
        <h2>{name}</h2>
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

      <Navbar />
      <Form onAddProduct={addProductHandler} />
      <div className="flex pt-[1rem] flex-wrap">
        {products.length === 0 && <p>No products found</p>}
        {products.map((el, id) => {
          return (
            <Card
              onRemoveProduct={removeProductHandler}
              product={el}
              key={id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
