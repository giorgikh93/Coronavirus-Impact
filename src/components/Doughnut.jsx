import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import {motion} from 'framer-motion'

function Donat(props) {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className='donat'>
            <Doughnut  data={{
                datasets: [{
                    data: [props.data.NewConfirmed, props.data.NewRecovered, props.data.NewDeaths],
                    backgroundColor: [
                        'rgba(0, 0, 255, 0.5)',
                        'rgba(0, 255, 0, 0.5)',
                        'rgba(255, 0, 0, 0.5)'],
                }],
                labels: [
                    'Daily Confirmed',
                    'Daily Recovered',
                    'Daily Deaths'
                ]
            }} />
        </motion.div>
    )
}


export default Donat