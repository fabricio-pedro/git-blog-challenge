import styled from 'styled-components';

export const PostsContainer = styled.main`
    display: grid;
    width: 65%;
    margin: 0.5rem auto; 
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 2rem;
    
    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        width: 100%;
        padding: 1rem;
    }
    
`;

export const PostCard = styled.div`
    width: 26rem;
    height: 16.25rem;
    background: ${(props) => props.theme['base-post']};
    color: ${(props) => props.theme['base-text']};
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    h2 {
        font-size: 1.25rem;
        color: ${(props) => props.theme['base-title']};
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 1rem;
        color: ${(props)=>props.theme['base-text']};
        line-height:160%;
    }

    a {
        display: inline-block;
        margin-top: 1rem;
        color: #007bff;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
    &:hover {
      border: 1px solid ${(props) => props.theme['base-span']};
      transition: 0.2s;
    
    }
    
    
`;