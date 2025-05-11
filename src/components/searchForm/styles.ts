import styled from 'styled-components';

export const SearchFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    width: 864px;
    margin: 1rem auto;
  
    
    div.title{
        display:flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        h2{
            font-size: 1.125rem;
            color: ${(props) => props.theme['base-title']};
            line-height: 1.375rem;
            font-weight: 700;
            margin-bottom: 0.5rem;  
        }
      
    }
    input.search{
        width: 100%;
        height: 3rem;
        font-size: 1rem;
        border-radius: 6px;
        border: 1px solid ${(props) => props.theme['base-border']};
        background-color: ${(props)=> props.theme['base-input']};
        padding: 1rem 0.75rem;
        color: ${(props) => props.theme['base-text']};
        line-height: 160%;
        &::placeholder{
            color: ${(props) => props.theme['base-label']};
        }
        &:focus{
            outline: 1px solid ${(props) => props.theme['blue']};
            background-color: ${(props) => props.theme['base-input']}; 
            
    }
}



   `