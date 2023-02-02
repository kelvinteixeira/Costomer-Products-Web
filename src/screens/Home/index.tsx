import Typography from '@mui/material/Typography'
import { CardContainer, PageContent } from './styles'

export function Home() {
  return (
    <PageContent>
      <CardContainer >
        <Typography align='center' variant='h4'>O que deseja cadastrar?</Typography>
      </CardContainer>
    </PageContent>
  )
}