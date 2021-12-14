import CourseInput from "./components/CourseGoals/CourseInput";
import CourseGoalList from "./components/CourseGoals/CourseGoalList";
import "./App.css";
import { useState } from "react";
const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);
  console.log(courseGoals);

  const addGoalHandler = (enteredText) => {
    if (enteredText.length > 0) {
      setCourseGoals((prevGoals) => {
        // The unshift() method is used to add one or more elements to the beginning of the given array
        const updatedGoals = [...prevGoals];
        updatedGoals.unshift({
          text: enteredText,
          id: Math.random().toString(),
        });
        return updatedGoals;
      });
    }
  };

  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((x) => x.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">{content}</section>
    </div>
  );
};

export default App;
