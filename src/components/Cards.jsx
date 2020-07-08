import React, {useContext} from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup'
import {Consumer} from '../useColorTheme'

function Cards(props){
    const {theme} = useContext(Consumer)


  const {confirmed,recovered,deaths} = props.data
    return(
        <div className='cards'>
    <Grid container spacing={3} justify='center'>
                <Grid item component={Card} xs={12} md={3} className='infected'>
                    <CardContent  >
                        <Typography color='textSecondary' gutterBottom >
                            INFECTED
                        </Typography>
                        <Typography variant='h5'>
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
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom >
                            RECOVERED
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
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom >
                            DEATHS
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