import styled from "styled-components";
import { useProvider } from "../../Hooks/useProvider";

const StyledProgressbar = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Circle = styled.circle`
  fill: none;
  stroke-width: 10;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;

const Text = styled.text`
  font-size: 0.9em;
  text-anchor: middle;
  dominant-baseline: middle;
  fill: ${(props) => (props.theme === "dark-theme" ? "#000" : "#fff")};
`;

function CircularProgressbar({ percent }) {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  const { theme } = useProvider();

  return (
    <StyledProgressbar>
      <svg width="100" height="100">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#40d808", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#dcd001", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <Circle cx="50" cy="50" r={radius} stroke="#e6e6e6" />
        <Circle
          cx="50"
          cy="50"
          r={radius}
          stroke="url(#gradient)"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
        <Text theme={theme} x="50" y="50">
          {`${percent}%`}
        </Text>
      </svg>
    </StyledProgressbar>
  );
}

export default CircularProgressbar;
