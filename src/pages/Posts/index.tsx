import { PostCard, PostsContainer } from "./styles";

export function Posts() {       
    return (
        <PostsContainer>
         <PostCard>
            <h2>Post Title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut erat nec ligula facilisis tincidunt.</p>
            <a href="#">Read more</a>
         </PostCard>
            <PostCard>
                <h2>Another Post Title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut erat nec ligula facilisis tincidunt.</p>
                <a href="#">Read more</a>
            </PostCard>
            <PostCard>
                <h2>Yet Another Post Title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut erat nec ligula facilisis tincidunt.</p>
                <a href="#">Read more</a>
            </PostCard>

        </PostsContainer>
    );
}