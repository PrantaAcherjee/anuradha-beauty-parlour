import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';


const Order = () => {

  const {id} = useParams();

      return (
        <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item>
               
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                   This ID is {id}
                  </Typography>
                  
                   
                </Grid>
                <Grid item>
                   
                </Grid>
              </Grid>
              <Grid item>
                 
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      );
};

export default Order;