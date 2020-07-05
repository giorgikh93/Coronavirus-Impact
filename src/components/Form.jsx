import React from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'

function Form(props){
    return(
        <FormControl style={{margin:'50px 0'}}>
        <NativeSelect defaultValue='Global' onChange={(e) => props.handleCountryChange(e.target.value)}>
          <option value='Global'>Global</option>
          {props.countries.map((country, index) =><option key={index} value={country.Country}>{country.Country}</option> )}
        </NativeSelect>
      </FormControl>
    )
}
export default Form