// TabsComponent.tsx
import React, { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import EmployeeForm from '../components/EmployeeForm';
import TableComponent from '../components/TableComponent';
import {useEmployeeStore, initData} from '../store/store';
// import useFormStore from '../store/store';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

const TabsComponent: React.FC = () => {
  // const [value, setValue] = useState<number>(0);
  const { activeTab, tabName, setActiveTab, setTabName } = useEmployeeStore();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    // setValue(newValue);
    setActiveTab(newValue);
  };


  useEffect(() => {
    console.log("SET ACTIVE TAB")
    initData(); // Fetch initial data when the component mounts
  }, []);
  

  return (
    <div>
      <Tabs value={activeTab} onChange={handleChange} aria-label="tabs example">
        <Tab label="Empoyee List" id="tab-0" />
        <Tab label={tabName} id="tab-1" />
      </Tabs>
      <TabPanel value={activeTab} index={0}>
        <TableComponent/>
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
        <EmployeeForm />
      </TabPanel>
    </div>
  );
};


export default TabsComponent;
