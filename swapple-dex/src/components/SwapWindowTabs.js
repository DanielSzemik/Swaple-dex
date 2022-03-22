import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './react-tabs.css';

const SwapWindowTabs = () => {
    const liquidityClicked = () => {
        console.log('click')
    }
    return (
        <Tabs>
            <TabList>
                <Tab><div className="Exchange">Exchange</div></Tab>
                <Tab><div className="Liquidity">Liquidity</div></Tab>
            </TabList>
        
            <TabPanel>
                <div className="Rectangle-8"></div>
            </TabPanel>
            <TabPanel>
                <div className="Rectangle-8"></div>
            </TabPanel>
        </Tabs>
    )
}

export default SwapWindowTabs;