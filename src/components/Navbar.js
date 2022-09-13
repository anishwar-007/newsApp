import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "80vw",
  },
  title: {
    flexGrow: 1,
  },
  compIcon: {
    height: 50,
    objectFit: "contain",
    borderRadius: "20",
    marginRight: 10,
  },
  name: {
    marginRight: 60,
    fontSize: 16,
  },
  yoyo: {
    marginRight: 70,
    backgroundColor: "rgb(25,27,28)",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <img
            src="https://static-exp1.licdn.com/sc/h/9a9u41thxt325ucfh5z8ga4m8"
            alt="intern"
            className={classes.compIcon}
          />
          <Typography variant="h6" className={classes.title}>
            Mechfuse News
          </Typography>
          <Typography variant="h6" className={classes.name}>
            Hi, {user.email}
          </Typography>

          <Button
            color="inherit"
            className={classes.yoyo}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
