import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const valueArray = props.dataPoint.map((x) => x.value);
  const totalMaximum = Math.max(...valueArray);
  return (
    <div className="chart">
      {props.dataPoint.map((x) => (
        <ChartBar
          key={x.label}
          value={x.value}
          maxValue={totalMaximum}
          label={x.label}
        />
      ))}
    </div>
  );
};

export default Chart;
