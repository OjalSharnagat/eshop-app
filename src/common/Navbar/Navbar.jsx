import * as React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { InputBase, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingCart } from "@mui/icons-material";
import { styled, alpha } from "@mui/material/styles";

export default function Navbar() {
  
  const { isAuthenticated, isAdmin, logout } = useContext(AuthContext);

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight: "28px",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));


 


  return (
    <Box sx={{ flexGrow: 1 }} display="flex" justifyContent="space-between">
      <AppBar position="static">
        <Toolbar>
          {/* Logo */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">
              <ShoppingCart fontSize="large" />
            </Link>
          </Typography>

          {isAuthenticated ? (
            <>
              <Box p={2} display="flex" justifyContent="space-between">
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>

                <Button color="inherit" component={Link} to="/">
                  Home
                </Button>
                {isAdmin && (
                  <Button color="inherit" component={Link} to="/products">
                    Add Products
                  </Button>
                )}
                <Button color="inherit">Log Out</Button>
              </Box>
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/signup">
                Sign Up
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
