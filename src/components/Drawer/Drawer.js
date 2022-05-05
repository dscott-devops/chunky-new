import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ChatArea from "../ChatArea/ChatArea";
import { useMediaQuery } from "react-responsive";
import { BsFillChatRightTextFill } from "react-icons/bs";
import { Grid } from "@mui/material";
import CustomAppBar from "./AppBar";
import { Link, useNavigate } from "react-router-dom";

const drawerWidth = 260;
const toolbar = 80;
const chatWidth = 300;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //   my query

  const [chatOpen, setChatOpen] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 780px)" });

  useEffect(() => {
    if (isMobile) {
      setChatOpen(true);
    } else {
      setChatOpen(false);
    }
  }, [isMobile]);

  const hendleNavigate = () => {
    navigate("/home");
    console.log("Home");
  };

  
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {props.userLoginData.map((text, index) => (
          <ListItem button key={text.username}>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>

            <Link to={`/teams/${text.category}/${text.username}`}>
              {console.log(`/teams/${text.category}/${text.username}`)}
              <Typography>
                {text.first_name} {text.last_name}
              </Typography>
            </Link>

          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem button onClick={hendleNavigate}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Typography>Home</Typography>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background: "#000" }}
      >
        <CustomAppBar
          handleDrawerToggle={handleDrawerToggle}
          userLoginData={props.userLoginData}
        />
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "#000",
              color: "#fff !important",
              "& svg": {
                fill: "#fff",
              },
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "#000",
              color: "#fff !important",
              "& svg": {
                fill: "#fff",
              },
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
          width: { md: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {/* <CustomAppBar /> */}
        <Toolbar />
        <Grid
          item
          container
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: "100vh",
            position: "relative",
          }}
        >
          <Box>
            <div
              className={`${isMobile ? "col-start-1" : "col-start-2"} ${
                chatOpen ? (isMobile ? "col-end-5" : "col-end-4") : "col-end-5"
              } transition duration-500`}
            >
              {props.children}
            </div>
          </Box>

          <Box
            sx={{
              width: "100%",
              // display:{xs:'none',md:'block'},
              maxWidth: chatOpen && `${chatWidth}px`,
              height: "100vh",
              position: "fixed",
              right: "0px",
              top: `${toolbar}px`,
              mt: { xs: -3, md: -2 },
            }}
            //  className='w-full md:w-[25%] min-w-[25%] h-full fixed right-0'
          >
            <ChatArea
              user={props.user}
              isLoggedin={props.isLoggedin}
              sources={props.sources}
              chatOpen={chatOpen}
              setChatOpen={setChatOpen}
            />
          </Box>
        </Grid>

        {!chatOpen && (
          <div
            className="absolute bottom-5 right-5 md:bottom-10 md:right-10 bg-black rounded-full p-3 cursor-pointer"
            onClick={() => setChatOpen(true)}
          >
            <BsFillChatRightTextFill size={20} color="white" />
            <span className="absolute top-0 right-0 px-2 py-1 text-xs font-bold leading-none text-red-100 transform bg-red-600 rounded-full">
              9
            </span>
          </div>
        )}
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
