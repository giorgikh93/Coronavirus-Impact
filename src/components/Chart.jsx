import React from 'react'
import { Line } from 'react-chartjs-2'
import {motion} from 'framer-motion'
import CustomHook from '../CustomHook'
import Cards from './Cards'

function Chart(props) {

    const {data} = CustomHook({ confirmed:props.country[props.country.length-2].Confirmed, recovered:props.country[props.country.length-2].Recovered, deaths:props.country[props.country.length-2].Deaths})

      console.log(data)
    return (
        props.country ?
        <motion.div  initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className='container'>
            <Cards data={data} country={props.country[0].Country}/>
          <Line data={{
                labels: props.country.map(data => data.Date.slice(0, 10)),
                datasets: [{
                    data: props.country.map((data) => data.Confirmed),
                    label: 'confirmed',
                    borderColor: 'rgba(0, 0, 255, 0.5)',
                    fill: true,
                },
                {
                    data: props.country.map(data => data.Recovered),
                    label: 'recovered',
                    borderColor: 'rgba(0, 255, 0, 0.5)',
                    fill: true,
                },
                
                {
                    data: props.country.map(data => data.Deaths),
                    label: 'deaths',
                    borderColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,
                }
                ]

            }} />
        </motion.div>  : null
    )
}


export default Chart