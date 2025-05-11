import { styled } from "styled-components";


export const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90rem;
  margin-left: auto;
  margin-right: auto;
  background: ${(props) => props.theme["base-background"]};         
`