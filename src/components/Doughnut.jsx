import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { motion } from 'framer-motion'
import Cards from './Cards'
import CustomHook from '../CustomHook'


function Donat(props) {

    const { data } = CustomHook({ confirmed: props.data.Global.NewConfirmed, recovered: props.data.Global.NewRecovered, deaths: props.data.Global.NewDeaths,  })
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='donat'>
            <Cards data={data} />
            <Doughnut data={{
                datasets: [{
                    data: [data.confirmed, data.recovered, data.deaths],
                    backgroundColor: [
                        'rgba(0, 0, 255, 0.5)',
                        'rgba(0, 255, 0, 0.5)',
                        'rgba(255, 0, 0, 0.5)'],
                }],
                labels: [
                    'Daily Confirmed',
                    'Daily Recovered',
                    'Daily Deaths'
                ],
            }} />
        </motion.div>
    )
}


export default Donat