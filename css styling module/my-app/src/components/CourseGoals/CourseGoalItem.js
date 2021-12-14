import "./CourseGoalItem.css";
// Here i have to use props because I have to take the inputs from the CourseGoalList.js
const CourseGoalItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
