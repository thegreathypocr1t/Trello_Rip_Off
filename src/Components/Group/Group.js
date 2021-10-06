import "./Group.css";

const Group = (props) => {
  let styleClasses = props.isLast ? "group-main" : "group-main right-border";

  return <div className={styleClasses}></div>;
};

export default Group;
