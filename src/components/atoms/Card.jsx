import { Button } from "./Button";

function Card(props) {
  const removeProduct = () => {
    props.onRemoveProduct(props.product.id);
  };
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.product.name}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {props.product.description}
      </p>
      <Button onclick={removeProduct} content="Remove me" />
    </div>
  );
}

export default Card;
