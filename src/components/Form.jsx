import React, { useContext } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import { Consumer } from '../useColorTheme'

function Form(props) {
  const { theme } = useContext(Consumer)
  return (
    <FormControl style={{ margin: '50px 0', }}>
      <NativeSelect id={`${theme==='dark' ? 'darkForm' : ''}`}  defaultValue='Global' onChange={(e) => props.handleCountryChange(e.target.value)}>
        <option value='Global'>Global</option>
        {props.countries.map((country, index) => <option style={{color:'black'}} key={index} value={country.Country} >{country.Country}</option>)}
      </NativeSelect>
    </FormControl>
  )
}
export default Form