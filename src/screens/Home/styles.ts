import styled from "@emotion/styled";
import { Box, Grid, Typography } from '@mui/material'

export const PageContent = styled(Box)`
  width: 100vw;
  height: 100vh;

  display: grid;
  place-items: center;
`;

export const CardContainer = styled(Grid)`
  padding: .5rem;

  border: 1px solid #fff;
  border-radius: .5rem;

  background-color: #a2a1ca;
`
export const CardContent = styled(Box)`
  width: 25rem; 
  display: grid;
  place-items: center;
  justify-content: center;
  align-items: center;
 
  padding: 1rem;

  border: 3px solid #8f8fb7;
  border-radius: .5rem;

`

export const CardTitle = styled(Typography)`
  text-align: center;
  margin-bottom: 2rem;
`;

export const CardButtons = styled(Box)`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr auto;
`;