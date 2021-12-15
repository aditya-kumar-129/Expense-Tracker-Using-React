import classes from "./Card.module.css";

const Card = (props) => {
  return (
    // Here we have used ${props.className} in order to use the className that is present in the element that iis being surrounded by the <Card></Card>
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
