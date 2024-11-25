import React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Header from './components/header';
import { Container, Grid2, Grid, Paper, Stack, Typography } from '@mui/material';
import InfoCard from './components/info-card';
import BillDetails from './components/bill-details';
import home from './../public/home.png'
import ChartContainer from './components/chart-container';

function App() {
  const graphContent = (
    <Grid container direction="column" spacing={1.5}>
      <Grid item direction='col' spacing={3} className='graph-wrap'>
          <Box sx={{ backgroundColor: 'secondary.main', height: '120px' }} className="graph-box"></Box>
          <Box sx={{ backgroundColor: 'grey.main', height: '140px' }} className="graph-box"></Box>
      </Grid>
      <Grid item direction='col' spacing={3} className='graph-wrap border-0 text-center'>
          <Box>
              <Typography variant='body2' sx={{ textAlign: 'center', fontWeight: 'bold' }}>$257.88</Typography>
              <Typography variant="body1">Your Home</Typography>
          </Box>
          <Box>
              <Typography variant='body2' sx={{ textAlign: 'center', fontWeight: 'bold' }}>$389.29</Typography>
              <Typography variant="body1">Similar Home</Typography>
          </Box>
      </Grid>
    </Grid>
  );
  const billDetails = (
    <Stack
      direction="column"
      spacing={0.25}
    >
      <Typography variant="h6" sx={{ alignSelf: 'center' }}>
        ELECTRIC BILL
      </Typography>
      <Typography variant="h4" sx={{ color: 'grey.main', mb: 2, alignSelf: 'center', fontWeight: 600 }}>
        $90.00
      </Typography>
    </Stack>
  );

  return (
    <>
      <Box>
        <Header />
        <Box component="section" sx={{ py: 4, background: "#ffffff" }}>
          <Container className="custom">
            <Typography variant="h6" className='variant-title'>
              VPP Overview
            </Typography>
          </Container>
        </Box>

        <Container className="custom" sx={{ mt: 6, mb: 6 }}>
          <Typography variant="h6" sx={{ color: "#444444", mb: 2 }}>
            HERE'S A SUMMARY OF KEY INSIGHTS ABOUT YOUR USAGE
          </Typography>
          <Grid2 container spacing={4}>
            <Grid2 size={{ xs: 12, md: 8 }}>
              <Stack spacing={2}>
                <InfoCard
                  title="Electric Usage Compared to Others"
                  description="Your usage is lower than Similar homes around your area, keep doing your thing!"
                  linkText="See why this is happening"
                  linkHref="#"
                  graphContent={graphContent}
                />
                <InfoCard
                  title="Projected Electric Bill"
                  description={<span dangerouslySetInnerHTML={{ __html: `You are currently at <strong>$${90.00}</strong> of your Electric bill forecast. Your Projected Next bill is going to be around <strong>$${125}</strong> or <strong>$${128}</strong> ` }} />}
                  linkText="Learn More"
                  linkHref="#"
                  graphContent={billDetails}
                />
                <ChartContainer />
              </Stack>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <Paper elevation={4} sx={{ p: 4 }}>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  <Box>
                    <Typography variant="h6" sx={{ m: 0, textTransform: 'uppercase' }}>Your Home</Typography>
                    <Typography variant="body1">Account: 411003876454</Typography>
                  </Box>
                  {home && <img src={home} alt="home" style={{ maxWidth: '80px' }} />}
                </Box>
                <BillDetails />
              </Paper>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </>
  );
}

export default App;
