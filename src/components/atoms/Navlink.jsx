const Navlink = (props) => {
  const { name, href } = props;
  return <a href={href}>{name}</a>;
};

export default Navlink;
