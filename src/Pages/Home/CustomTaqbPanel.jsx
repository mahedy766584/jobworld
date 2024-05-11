import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import WebDevelopment from './WebDevelopment';
import GraphicDesign from './GraphicDesign';
import DigitalMarketing from './DigitalMarketing';
import UseQuery from '../../Utils/UseQuery';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
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

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function CustomTaqbPanel() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Item One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <WebDevelopment />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <GraphicDesign />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                {/* <DigitalMarketing/> */}
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eum optio praesentium, obcaecati rerum nisi dignissimos, ullam blanditiis magni maxime vitae recusandae exercitationem accusantium nihil impedit fugiat iste distinctio a.</h1>
            </CustomTabPanel>
        </Box>
    );
}