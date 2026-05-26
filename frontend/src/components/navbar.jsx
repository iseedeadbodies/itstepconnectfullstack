import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Box className="navbar">
      <Typography variant="h2" className="logo">
        ITSTEP Connect
      </Typography>

      <Box className="nav-buttons">
        <Button component={Link} to="/login" variant="contained">
          Login
        </Button>

        <Button component={Link} to="/register" variant="contained">
          Register
        </Button>

        <Button component={Link} to="/profile" variant="contained">
          Profile
        </Button>

        <Button component={Link} to="/posts" variant="contained">
          Posts
        </Button>

        <Button component={Link} to="/clubs" variant="contained">
          Clubs
        </Button>

        <Button component={Link} to="/news" variant="contained">
          News
        </Button>

        <Button component={Link} to="/friends" variant="contained">
          Friends
        </Button>

        <Button component={Link} to="/search" variant="contained">
          Search
        </Button>

        <Button component={Link} to="/navigation" variant="contained">
          Navigation
        </Button>

        <Button component={Link} to="/admin" variant="contained">
          Admin
        </Button>
      </Box>
    </Box>
  );
}

export default Navbar;