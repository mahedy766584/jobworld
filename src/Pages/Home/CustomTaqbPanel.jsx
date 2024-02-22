import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import WebDevelopment from './WebDevelopment';
import GraphicDesign from './GraphicDesign';
import DigitalMarketing from './DigitalMarketing';

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

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <div className='flex justify-center items-center'>
                    <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Web Development" {...a11yProps(0)} />
                            <Tab label="Graphic Design" {...a11yProps(1)} />
                            <Tab label="Digital Marketing" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                </div>
                <CustomTabPanel value={value} index={0}>
                    <div>
                        <WebDevelopment />
                    </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <GraphicDesign/>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <DigitalMarketing/>
                </CustomTabPanel>
            </Box>
        </div>
    );
}