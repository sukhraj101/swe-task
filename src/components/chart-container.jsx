import React, { useState } from 'react';
import { Tabs, Tab, Box, Paper, Button } from '@mui/material';
import PollIcon from '@mui/icons-material/Poll';
import TableChartIcon from '@mui/icons-material/TableChart';
import DownloadIcon from '@mui/icons-material/Download';
import BillHighChart from './chart';
import BillTable from './table';
import { saveAs } from 'file-saver';

const TabPanel = ({ children, value, index }) => (
  <div role="tabpanel" hidden={value !== index}>
    {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
  </div>
);

const ChartContainer = () => {
  const [value, setValue] = useState(0);
  const tableData = [
    { date: Date.UTC(2018, 11, 1), month: 'Dec 2018', average: 175, penalty: 'No Penalty' },
    { date: Date.UTC(2019, 0, 1), month: 'Jan 2019', average: 172, penalty: 'Incentive' },
    { date: Date.UTC(2019, 1, 1), month: 'Feb 2019', average: 177, penalty: 'Penalty' },
    { date: Date.UTC(2019, 2, 1), month: 'Mar 2019', average: 190, penalty: 'Incentive' },
    { date: Date.UTC(2019, 3, 1), month: 'Apr 2019', average: 173, penalty: 'No Penalty' },
    { date: Date.UTC(2019, 4, 1), month: 'May 2019', average: 186, penalty: 'Incentive' },
    { date: Date.UTC(2019, 5, 1), month: 'Jun 2019', average: 180, penalty: 'Penalty' },
    { date: Date.UTC(2019, 6, 1), month: 'Jul 2019', average: 194, penalty: 'Incentive' },
    { date: Date.UTC(2019, 7, 1), month: 'Aug 2019', average: 164, penalty: 'No Penalty' },
    { date: Date.UTC(2019, 8, 1), month: 'Sep 2019', average: 168, penalty: 'Penalty' },
    { date: Date.UTC(2019, 9, 1), month: 'Oct 2019', average: 174, penalty: 'Incentive' },
    { date: Date.UTC(2019, 10, 1), month: 'Nov 2019', average: 168, penalty: 'No Penalty' },
    { date: Date.UTC(2019, 11, 1), month: 'Dec 2019', average: 192, penalty: 'Incentive' },
  ];

  const exportToCSV = () => {
    const headers = ['Month', 'Average Power Factor (%)', 'PF Incentive / PF Penalty'];
    const rows = tableData.map(({ month, average, penalty }) => [month, average, penalty]);
    const csvContent = [headers.join(','), ...rows.map((row) => row.join(','))].join('\n');
    saveAs(new Blob([csvContent], { type: 'text/csv;charset=utf-8;' }), 'table_data.csv');
  };

  return (
    <Paper>
      <Tabs
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        aria-label="tabs"
        sx={{
          margin: 2,
          '.MuiTab-root': {
            textTransform: 'none',
            fontWeight: 'bold',
            color: 'gray',
            minWidth: 'initial',
            border: '1px solid #d0d0d0',
            borderTopLeftRadius: '4px',
            borderBottomLeftRadius: '4px',
            padding: '4px 16px',
            '&.Mui-selected': { color: '#333', backgroundColor: '#e7e7e7' },
          },
          '.MuiTab-root + .MuiTab-root': {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            borderTopRightRadius: '4px',
            borderBottomRightRadius: '4px',
          },
          '.MuiTabs-indicator': { display: 'none' },
        }}
      >
        <Tab icon={<PollIcon />} aria-label="chart" />
        <Tab icon={<TableChartIcon />} aria-label="table" />
      </Tabs>

      <TabPanel value={value} index={0}>
        <BillHighChart tableData={tableData.map(({ date, average }) => [date, average])} />
        <Box sx={{ pt: 2 }}>
            <Button variant="text" onClick={exportToCSV} sx={{ color: "secondary.main" }} startIcon={<DownloadIcon />}>
                Export to CSV
            </Button>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BillTable />
      </TabPanel>
    </Paper>
  );
};

export default ChartContainer;
