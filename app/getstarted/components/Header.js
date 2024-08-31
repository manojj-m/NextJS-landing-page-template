import { Typography, Box, useTheme } from "@mui/material";
import { colours } from 'app/signin/themes';


const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = colours;
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors[1]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors[1]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
