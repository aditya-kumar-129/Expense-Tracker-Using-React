import styles from "./ErrorModel.module.css";
import Card from "./Card";
import Button from "./Button";
import ReactDom from "react-dom";

const BackDrop = (props) => {
  return (
    // When you use the below line then in that case when u click on the backdrop space the rror message will automatically go
    <div className={styles.backdrop} onClick={props.onConfirm} />
    // When you use the below line then in that case when u click only on the button that appear in the error message then only the error message will go
    // <div className={styles.backdrop} />
  );
};

const ModelOverlay = (props) => {
  return (
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
  );
};

const ErrorModel = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <BackDrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModelOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModel;
