import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'
import axios from 'axios'
import {motion} from 'framer-motion'

function Global() {

    const [total, setTotal] = useState([])

    useEffect(() => {
        axios.get('https://api.covid19api.com/world/total')
            .then(res => setTotal(res.data))
    },[])


    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className='donat' >
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