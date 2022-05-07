import * as React from 'react';
import { useState, useEffect, Fragment } from "react";
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from "axios"


const client = axios.create({
  baseURL: "https://chunkysports.com/api/v1",
});


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function TeamMaintenance() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const [sources,setSources] = useState([])
  const getSub = (subcategory) => {
    console.log("CommentID", subcategory)
    return sources
      .filter((source) => source.attributes.subcategory === subcategory)
      .sort(
        (a, b) =>
          a.attributes.subcategory - b.attributes.subcategory
      );
  };



  useEffect(() => {
    
    async function getSources() {
      const response = await client.get("/sourcenames");
      setSources(response.data.data);
      console.log("Reponse Data", response);
    }

    getSources();
  }, []);

  return (
    <Box sx={{ bgcolor: 'background.paper', width: 1000 }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="NFL" {...a11yProps(0)} />
          <Tab label="NBA" {...a11yProps(1)} />
          <Tab label="MLB" {...a11yProps(2)} />
          <Tab label="NHL" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
     
        <TabPanel value={value} index={0} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Item Four
        </TabPanel>
     
    </Box>
  );
}
