import { ProfileContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export function Profile() {
  return(
     
    <ProfileContainer>
      <img src="https://avatars.githubusercontent.com/u/17956940?v=4"  className="avatar" />
      <div className="bio">
        <div className="info">
          <h2>Rocketseat</h2>
        <a href="#" >
            <span>GitHub</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
          </a>
        </div>
        <div className="description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>     
        </div>
       </div> 
    </ProfileContainer>

  );

}