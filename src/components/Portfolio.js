import React from 'react'
import Footer from './Footer'
import { Grid, Card } from '../styles/PortfolioStyles'

const Portfolio = () => {
  return (
    <div>
      <Grid>
        <Card className='card'>
          Work 1
        </Card>
        <Card className='card'>
          Work 2
        </Card>
        <Card className='card'>
          Work 3
        </Card>
        <Card className='card'>
          Work 4
        </Card>
      </Grid>

      <Footer />
    </div>
  )
}

export default Portfolio