import React, { useState, useEffect} from 'react'; 
import { NativeSelect, FormControl} from '@material-ui/core';
import { fetchCountries } from '../api/api'; 
import styles from './country.module.css';


const Country = ({ handleChangeCountry }) => {

    const [ fetchedCountries, setFetchCountries] = useState([]);

    useEffect(()=>{
        const fetchApi = async () => {
            setFetchCountries( await fetchCountries());
        }
         fetchApi();
    }, [setFetchCountries])

    console.log(fetchedCountries)
    return ( 
    <div>
        <h3>Select Country</h3>
        <FormControl className={styles.container}>
            <NativeSelect defaultValue="" onChange={(e)=>{handleChangeCountry(e.target.value)}}>
                <option value="">Global</option>
                {fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>)
                }
            </NativeSelect>
        </FormControl>
    </div>
    )
}
export default Country;