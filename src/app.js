import React, { Component } from 'react';
import Cards from './components/Cards/cards';
import Country from './components/SelectCountry/country';
import Charts from './components/Charts/charts';
import { fetchedApi } from './components/api/api';
import  styles  from './app.module.css';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import logo from './images/covid-19.png';

class App extends Component {

    state = {
        data: [],
        country: '',
    }

    async componentDidMount(){
        const fethceddata = await fetchedApi();

        this.setState({
            data: fethceddata,
        })
    }
    handleChangeCountry = async (country) => {
        const fethcedData = await fetchedApi(country);
        this.setState({
            data: fethcedData,
            country: country
        })
    }
    render(){
        const { data, country } = this.state
        return(
            <div className={styles.container}>
                <img className={styles.logo} src={logo} alt="logo"/>
                <Cards data={data}/>
                <img className={styles.icon} src={icon1} alt="icon"/>
                <Country  handleChangeCountry={this.handleChangeCountry} />
                <img className={styles.icon2} src={icon2} alt="icon"/>
                
                <img className={styles.icon3} src={icon3} alt="icon"/>
                <Charts data={data} country={country}/>

            </div>
        )
    }
}

export default App;