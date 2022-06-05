import React from 'react'
import {
  GridContainer,
  GridTitle,
  Grid,
  Card,
  CardMain,
  CardTitle,
  CardContentText,
  CardContentLinks,
  CardLink,
  CardText
} from './PortfolioStyles'

const Portfolio = () => {
  return (
    <GridContainer>
      <GridTitle>
        <h3>Algunos proyectos que he realizado:</h3>
      </GridTitle>
      <Grid>

        <Card first>
          <CardMain>
            <CardTitle>
              <h3>App de tareas</h3>
            </CardTitle>
            <CardContentText>
              <CardText>
                Este es un proyecto de una aplicación de tareas enfocada a la administración de pequeñas tareas diarias.
              </CardText>
            </CardContentText>
            <CardContentLinks>
              <CardLink target="_blank" href='https://github.com/DanielVegaf/react-tasks'>Leer Case Study</CardLink>
              <CardLink target="_blank" href='https://reactasks.netlify.app/'>Ver pagina</CardLink>
            </CardContentLinks>
          </CardMain>
        </Card>

        <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          Creating more works...
        </Card>

        {/* <Card third>
            Work 3
          </Card>

          <Card fourth>
            Work 4
          </Card> */}

      </Grid>

    </GridContainer>
  )
}

export default Portfolio