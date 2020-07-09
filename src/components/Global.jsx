import React, { useState, useEffect, } from 'react'
import { Doughnut } from 'react-chartjs-2'
import axios from 'axios'
import { motion } from 'framer-motion'
import Cards from './Cards'
import CustomHook from '../CustomHook'



function Global() {
    const [total, setTotal] = useState([])

    const {data} = CustomHook({confirmed :total.TotalConfirmed, recovered: total.TotalRecovered, deaths: total.TotalDeaths})
    
    useEffect(() => {
        axios.get('https://api.covid19api.com/world/total')
        .then(res => setTotal(res.data))
    }, [])
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='donat' >
            <Cards data={data}/>
            <Doughnut data={{
                datasets: [{
                    data: [total.TotalConfirmed, total.TotalRecovered, total.TotalDeaths],
                    backgroundColor: [
                        'rgba(0, 0, 255, 0.5)',
                        'rgba(0, 255, 0, 0.5)',
                        'rgba(255, 0, 0, 0.5)'],
                }],
                labels: [
                    'Total Confirmed',
                    'Total Recovered',
                    'Total Deaths'
                ]
            }} />
        </motion.div >
    )
}

export default Global