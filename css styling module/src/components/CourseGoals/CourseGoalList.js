import CourseGoalItem from "./CourseGoalItem";
import styles from './CourseGoalList.module.css';
// Here we have used props because from App.js we have to pass the array contents
const CourseGoalList = (props) => {
  return (
    <ul className={styles['goal-list']}>
      {props.items.map((x) => (
        <CourseGoalItem key={x.id} id={x.id} onDelete={props.onDeleteItem}>
          {x.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
