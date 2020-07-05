import React,{ useState, useEffect } from 'react';
import { fetchDailyData } from '../api/api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './charts.module.css';

const Chart = ( {data: { confirmed, recovered, deaths }, country }) => {

    const [dailyData, setDailyData] = useState([]);

useEffect( () => {
    const fetch = async () => {
        setDailyData(await fetchDailyData());
    }
    fetch();
},[]);

const linechart = (
    dailyData.length
     ?
    (
    <Line 
        data={{
            labels: dailyData.map(({date}) => date),
            datasets: [{
                data: dailyData.map(({confirmed})=> confirmed),
                label: 'Confirmed',
                borderColor: '#3333ff',
                fill: true,
            },
            {
                data: dailyData.map(({deaths})=> deaths),
                label: 'Deaths',
                borderColor: '#ff3333',
                backgroundColor: 'rgba(255,0,0,0.5)',
                fill: true,
            }]
        }}

    />) : null
    );

    const barChart = (
        confirmed ? (
            <Bar 
            data={{
                labels: [ 'Infected', 'Recovered', 'Deaths'],
                datasets: [{
                    label: 'People',
                    backgroundColor: [
                        'rgb(92, 92, 255)',
                        'rgb(0, 216, 36)',
                        'rgb(255, 0, 0)'
                    ],
                    data: [confirmed.value, recovered.value, deaths.value]
                }]
            }}
            options={{
                legend: { display: false},
                title: { display: true, text: `Current State in ${country}`}
            }}
            />
        ) : null
    ) 

    return(
        <div className={styles.container}>
            {country ? barChart : linechart}
        </div>
    )
}
export default Chart;