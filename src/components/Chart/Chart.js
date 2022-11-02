import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const valueArray = props.data.map((data) => data.value);
    const maxValue = Math.max(...valueArray);
  return (
    <div className="chart">
      {props.data.map((data) => {
        return <ChartBar
          key={data.label}
          value={data.value}
          label={data.label}
          maxValue={maxValue}
        />;
      })}
    </div>
  );
};

export default Chart;