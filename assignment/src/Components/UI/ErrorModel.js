import styles from "./ErrorModel.module.css";
import Card from "./Card";
import Button from "./Button";

const ErrorModel = (props) => {
  return (
    <div>
      {/* When you use the below line then in that case when u click 
      on the backdrop space the rror message will automatically go  */}
      <div className={styles.backdrop} onClick={props.onConfirm} />
      {/* When you use the below line then in that case when u click only on the 
      button that appear in the error message then only the error message will go */}
      {/* <div className={styles.backdrop} /> */}

      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModel;
