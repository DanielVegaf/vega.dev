import React from 'react'
import Footer from './Footer'
import { GridContainer, Grid, Card } from '../styles/PortfolioStyles'

const Portfolio = () => {
  return (
    <GridContainer>
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
    </GridContainer>
  )
}

export default Portfolio