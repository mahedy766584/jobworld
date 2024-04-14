import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WebDevelopment from './WebDevelopment';

const ReactTab = () => {
    return (
        <div className='max-w-screen-lg mx-auto py-16'>
            <Tabs>
                <TabList>
                    <div className='max-w-screen-lg mx-auto text-center '>
                        <Tab>Web Development</Tab>
                        <Tab>Graphic Design</Tab>
                        <Tab>Digital Marketing</Tab>
                    </div>
                </TabList>

                <TabPanel>
                    <div>
                        <WebDevelopment />
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReactTab;