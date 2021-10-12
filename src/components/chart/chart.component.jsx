import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
  } from "recharts";
  
  import "./chart.styles.scss";
  
  const data = [
    {
      date: "Dec",
      amount: 500,
    },
    {
      date: "Jan",
      amount: 500,
    },
    {
      date: "Fab",
      amount: 500,
    },
    {
      date: "Mar",
      amount: 800,
    },
    {
      date: "Apr",
      amount: 800,
    },
    {
      date: "May",
      amount: 1000,
    },
    {
      date: "Jun",
      amount: 1000,
    },
    {
      date: "Jul",
      amount: 1200,
    },
    {
      date: "Aug",
      amount: 1200,
    },
    {
      date: "Sep",
      amount: 1200,
    },
    {
      date: "Oct",
      amount: 1650,
    },
    {
      date: "Nov",
      amount: 2000,
    },
  ];
  
  export default function Chart() {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#007BFF" stopOpacity={0.9} />
              <stop offset="40%" stopColor="#007BFF" stopOpacity={0.5} />
              <stop offset="75%" stopColor="#007BFF" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <Area dataKey="amount" stroke="#007BFF" fill="url(#color)" type="monotone" />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tickMargin={15}
            //   tick={{ stroke: "#000" }}
          />
          <YAxis
            dataKey="amount"
            axisLine={false}
            tickLine={false}
            tickFormatter={(number) => `$${number}`}
            tickMargin={15}
            //   tick={{ stroke: "#000" }}
          />
          <Tooltip content={<CustomTooltip />} />
          <CartesianGrid opacity="0.3" vertical={false} />
        </AreaChart>
      </ResponsiveContainer>
    );
  
    function CustomTooltip({ active, payload, label }) {
      if (active) {
        return (
          <div className="tooltippy">
            <div className="amount-container">
              <span>Total</span>
              <span>${payload[0].payload.amount}</span>
              {console.log(payload)}
            </div>
            <hr />
            <div className="date-container">{label}</div>
          </div>
        );
      }
  
      return null;
    }
  }
  