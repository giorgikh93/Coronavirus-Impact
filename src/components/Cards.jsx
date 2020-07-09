import React, { useContext, } from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup'
import { Consumer } from '../useColorTheme'
import axios from 'axios'


function Cards(props) {

    const { theme } = useContext(Consumer)
    // const [data, setData] = useState({})


    const { confirmed, recovered, deaths } = props.data

    // useEffect(() => {
    //     axios.get("https://api.covid19api.com/summary")
    //         .then(res => setData(res.data))
    // }, [])
    // const dat = data.Countries !== undefined ? data.Countries.find(country => country.Country === props.country) : ''



    //   const { TotalConfirmed: confirmed, TotalRecovered: recovered, TotalDeaths: deaths } = dat


    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = mm + '-' + dd + '-' + yyyy;
    return (
        <div className='cards'>
            <Grid container spacing={3} justify='center'  >
                <Grid item component={Card} xs={12} md={3} className='infected' >
                    <CardContent className={theme === 'dark' ? 'darkImportant' : ''}>
                        <Typography color='textSecondary' gutterBottom className={theme === 'dark' ? 'darkImportant' : ''}>
                            INFECTED
                        </Typography>
                        <Typography>
                            <span>{new Date(today).toDateString()}</span>
                        </Typography>

                        <Typography variant='h5' >

                            <CountUp
                                start={0}
                                end={confirmed !== undefined ? confirmed : 0}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color='textSecondary'></Typography>
                        <Typography variant='body2'>Number of active cases of Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className='recovered'>
                    <CardContent className={theme === 'dark' ? 'darkImportant' : ''}>
                        <Typography color='textSecondary' gutterBottom className={theme === 'dark' ? 'darkImportant' : ''}>
                            RECOVERED
                        </Typography>
                        <Typography>
                            <span>{new Date(today).toDateString()}</span>
                        </Typography>
                        <Typography variant='h5'>
                            <CountUp
                                start={0}
                                end={recovered !== undefined ? recovered : 0}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color='textSecondary'></Typography>
                        <Typography variant='body2'>Number of recoveries from Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className='deaths'>
                    <CardContent className={theme === 'dark' ? 'darkImportant' : ''}>
                        <Typography color='textSecondary' gutterBottom className={theme === 'dark' ? 'darkImportant' : ''}>
                            DEATHS
                        </Typography>
                        <Typography>
                            <span>{new Date(today).toDateString()}</span>
                        </Typography>
                        <Typography variant='h5'>
                            <CountUp
                                start={0}
                                end={deaths !== undefined ? deaths : 0}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color='textSecondary'></Typography>
                        <Typography variant='body2'>Number of Deaths caused Covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}


export default Cards