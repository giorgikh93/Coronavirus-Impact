import React, { useState } from 'react'


const Context = React.createContext()


function Provider(props) {

    const [theme, setTheme] = useState('light')


    function changeColorTheme(e) {
        if (e.target.checked) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    return (
        <Context.Provider value={{ changeColorTheme, theme }}>
            {props.children}
        </Context.Provider>
    )
}


export { Provider, Context as Consumer }