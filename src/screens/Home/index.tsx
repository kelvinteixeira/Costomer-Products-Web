import { Button } from '@mui/material'
import { CardButtons, CardContainer, CardContent, PageContent, CardTitle } from './styles'

export function Home() {
  return (
    <PageContent>
      <CardContainer >
        <CardContent>
          <CardTitle variant='h5'>O que deseja cadastrar?</CardTitle>
          <CardButtons >
            <Button variant='contained' color='inherit'>
              Novo cliente
            </Button>

            <Button variant='contained' color='inherit'>
              Novo produto
            </Button>
          </CardButtons>
        </CardContent>
      </CardContainer>
    </PageContent>
  )
}