"use client";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddBoxIcon from "@mui/icons-material/AddBox";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ViewDashboard from "./ViewDashboard";
import AddStudent from "./AddStudents";
import ViewIssues from "./ViewIssues";
import SysAdminView from "./SysAdminView";
import StudentFeedback from "./StudentFeedback";
import RaiseAIssue from "./RiseAIssue";
import { Button } from "@mui/material";
import { signOut } from "next-auth/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import axios from "axios";
const drawerWidth = 240;
ChartJS.register(ArcElement, Tooltip, Legend);
function AdministrationDrawer(props) {
  const { window, drawerValue, role } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [currentTab, setCurrentTab] = React.useState("Dashboard");
  const [reviews, setReviews] = React.useState([]);
  const [messData, setMessData] = React.useState(null);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  React.useEffect(() => {
    (async () => {
      const { data: response } = await axios.get("/api/issue");
      if (response.data) {
        const messReview = response.data.filter((element) => {
          return element.type === "MESS";
        });
        const internetReview = response.data.filter((element) => {
          return element.type === "INTERNET";
        });
        const sweeperReview = response.data.filter((element) => {
          return element.type === "SWEEPER";
        });
        const laundryReview = response.data.filter((element) => {
          return element.type === "LAUNDRY";
        });
        const finalData = {
          MESS: messReview,
          INTERNET: internetReview,
          SWEEPER: sweeperReview,
          LAUNDRY: laundryReview,
        };
        const messData = {
          labels: Object.keys(JSON.parse(finalData.MESS[0].stars)),

          datasets: [
            {
              label: "Mess Review",
              data: finalData.MESS.map((element) => {
                return Object.values(JSON.parse(element.stars));
              })[0],
              backgroundColor: ["red", "blue", "yellow", "green"],
              borderWidth: 1,
            },
          ],
        };
        setMessData(messData);
        setReviews(finalData);
      }
    })();
  }, []);
  console.log(reviews.MESS);
  const drawer = (
    <div>
      <Toolbar />
      <img
        className=" block mx-auto my-auto  w-20 h-20"
        loading="lazy"
        src="/assets/warden.png"
        alt="Student"
      />
      <h3 className="pt-2 pb-3  text-center">Name</h3>

      <Divider />
      <List>
        {drawerValue.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => setCurrentTab(text)}>
              <ListItemIcon>
                {index % 3 === 0 ? (
                  <DashboardIcon />
                ) : index % 3 === 1 ? (
                  <AddBoxIcon />
                ) : (
                  <RemoveRedEyeIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Divider />
      <div className=" text-black text-[18px] absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
        Quality Forum
      </div>
    </div>
  );
  console.log(currentTab);
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} id="administrationdrawer">
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h8" noWrap sx={{ flexGrow: 1, color: "#fff" }}>
            {role} DASHBOARD
          </Typography>
          <Button
            onClick={signOut}
            sx={{
              color: "whitesmoke",
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {currentTab === "AddStudents" && <AddStudent />}
        {currentTab === "View Issues" && <ViewIssues />}
        {currentTab === "SysAdminView" && <SysAdminView />}
        {currentTab === "Feedback" && <StudentFeedback />}
        {currentTab === "RaiseAIssue" && <RaiseAIssue />}
      </Box>
    </Box>
  );
}

AdministrationDrawer.propTypes = {
  window: PropTypes.func,
};

export default AdministrationDrawer;
