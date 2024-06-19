import { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

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
      <form className="space-y-6" action="submit" onSubmit={submitHandler}>
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

        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add product{" "}
        </button>
      </form>
    </div>
  );
};

export default Form;
