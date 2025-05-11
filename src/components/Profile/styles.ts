import { styled } from "styled-components";

export const ProfileContainer = styled.aside`

 width: 54rem;
 height: 13.25rem;
 background: ${(props) => props.theme['base-profile']};
 color: ${(props) => props.theme['base-text']};
 display: flex;
 margin: 2rem auto;
 border-radius: 10px;
 box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
 margin-top: -4rem;
 img.avatar{
        width: 9.25rem;
        height: 9.25rem;
        border-radius: 16px;
        margin-top: 2.5rem;
        margin-left: 2rem;
 }

 div.bio{
  
   .info{
        display: flex;
        justify-content: space-between;
        padding: 1.5rem;
        align-items: center;

        h2{
            font-size: 1.5rem;
            color: ${(props) => props.theme['base-title']};
            margin-bottom: 0.5rem;
        }

        a{
            display: flex;
            align-items: center;
            text-decoration: none;
            color: ${(props) => props.theme['blue']};
            font-size: 1rem;
            font-weight: bold;
            line-height: 1.625rem;
            gap: 0.5rem;
            transition: color 0.2s;

            &:hover{
                border-bottom: 1px solid ${(props) => props.theme['blue']};
            }       

        }

   }
   
   .description{
        font-size: 1rem;
        color: ${(props) => props.theme['base-text']};  
        line-height: 1.5rem;
        margin-bottom: 1rem;
        padding: 0 1.5rem;
        margin-bottom: 2rem;
        text-align: justify;
   }

    
 }










`