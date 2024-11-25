import React from 'react';
import { Paper, Typography, Link, Grid } from '@mui/material';

const InfoCard = ({ title, description, linkText, linkHref, graphContent }) => {
  return (
    <Paper
        elevation={0}
        sx={{
            borderRadius: 2,
            overflow: 'hidden',
            border: '2px solid #e7e7e7',
            p: 4,
        }}
    >
        <Grid container spacing={1.5} direction={{ xs: 'column', sm: 'row' }}>
            <Grid item xs={12} sm={8}>
                <Grid container direction="column" spacing={1.5}>
                    <Grid item>
                        <Typography variant="h6" sx={{ m: 0, textTransform: 'uppercase' }}>
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1">{description}</Typography>
                    </Grid>
                    <Grid item>
                        <Link href={linkHref}>{linkText}</Link>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item 
                xs={12} 
                sm={4} 
                container 
                justifyContent="center"
                alignItems="center"
            >
                {graphContent && graphContent}
            </Grid>
        </Grid>
    </Paper>
  );
};

export default InfoCard;
