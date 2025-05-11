import { styled } from "styled-components";


export const HeaderContainer = styled.header`
  display: flex;
 
  
 
 `

export const HeaderContent = styled.div`
  background-color: ${(props) => props.theme["blue-dark"]};
  display: flex;
  padding: 2rem 0 0 2rem;
  width: 100%;
  height: 18rem;
  max-width: 90rem;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;


  img{
    width: 9.25rem;
    height: 6.125rem;
    margin-bottom: 4rem;
  
  }


`  

