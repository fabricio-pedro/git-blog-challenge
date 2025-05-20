import { useContext } from "react";
import { PostCard, PostsContainer } from "./styles";
import { IssuesContext } from "../../contexts/IssuesContext";

export function Posts() {
     const { issues } = useContext(IssuesContext);       
    return (
        <PostsContainer>
            {
                 issues.map((issue) => {
                 return <a href="#" key={issue.id}> <PostCard >
                        <h2>{issue.title}</h2>
                        <p>{issue.body.slice(0,135)}...</p>
                        </PostCard>
                        </a>
              })
            }
                 </PostsContainer>
    );
}