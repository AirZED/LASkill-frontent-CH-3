import { useState } from "react";
import { Button } from "./Button";

const Form = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  console.log(name);

  function updateDescription(e) {
    setDescription(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    props.onAddProduct(name, description);
    setName("");
    setDescription("");
  }
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form className="space-y-6">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          Add Products
        </h5>
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name of choice"
            value={name}
            required
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Description
          </label>
          <textarea
            value={description}
            onChange={updateDescription}
            placeholder="Enter your description"
            required
          />
        </div>

        <Button onclick={submitHandler} type="button" content="Add Product" />
      </form>
    </div>
  );
};

export default Form;
