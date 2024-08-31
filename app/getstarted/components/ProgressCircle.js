import { Box, useTheme } from "@mui/material";
import { colours } from 'app/signin/themes';

const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  const theme = useTheme();
  const colors = colours;
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(${colors[1]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors[1]} ${angle}deg 360deg),
            ${colors[1]}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;
