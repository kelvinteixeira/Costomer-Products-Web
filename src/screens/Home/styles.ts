import styled from "@emotion/styled";
import { Box, Grid } from '@mui/material'

export const PageContent = styled(Box)`
  width: 100vw;
  height: 100vh;

  display: grid;
  place-items: center;
`;

export const CardContainer = styled(Grid)`
  width: 50rem;
  height: 15rem;

  padding: 1rem;

  border: 1px solid #8f8fb7;
  border-radius: .5rem;
  
  background-color: #a2a1ca;
`