import React, {useState, useEffect} from 'react';
import {fetchCountries} from '../../api';
import {FormControl, NativeSelect} from '@material-ui/core';

import styles from './CountryPicker.module.css';

const CountryPicker = ({handleCountryChange}) => {
    const [countries, setCountries] = useState([]);
    
    useEffect(() => {
        (async () => {
            setCountries(await fetchCountries());
        })()
    }, []);
    
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="global">Global</option>
                {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;