export function Button(props) {
  return (
    <button
      onClick={props.onclick}
      type={props.type ? props.type : "button"}
      className="bg-red-500 text-black p-1 pt-[1px] font-black"
    >
      {props.content}
    </button>
  );
}
