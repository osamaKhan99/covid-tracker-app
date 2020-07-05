import React from 'react';
import { Grid, Card, CardContent , Typography } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './cards.module.css';
import cx from 'classnames';

const card = ({ data: { confirmed, recovered, deaths, lastUpdate }}) => {
    if (!confirmed){
        return 'Loading Data .....'
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center"> 
                <Grid item component={Card} xs={12} md={3}  className={cx(styles.card, styles.confirmed)} >
                        <CardContent>
                            <Typography variant="h5" gutterBottom>Confirmed<br/>Cases</Typography>
                            <Typography variant="h5"><CountUp start={1000} end={confirmed.value} duration={2} separator=','/></Typography>
                            <Typography>{new Date(lastUpdate).toDateString()}</Typography>
                        </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>Recovered<br/>Cases</Typography>
                            <Typography variant="h5"><CountUp start={1000} end={recovered.value} duration={2} separator=','/></Typography>
                            <Typography>{new Date(lastUpdate).toDateString()}</Typography>
                        </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>Total<br/>Deaths</Typography>
                            <Typography variant="h5"><CountUp start={1000} end={deaths.value} duration={2} separator=','/></Typography>
                            <Typography>{new Date(lastUpdate).toDateString()}</Typography>
                        </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default card;