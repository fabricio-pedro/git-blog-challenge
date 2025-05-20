import { ProfileContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faBuilding } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import {client as clientHttp} from "../../api/client";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons/faUserFriends";

interface Profile{
  name: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  followers: number;
  login: string;
}

export function Profile( ) {

  const [profile, setProfile] = useState<Profile>({} as Profile);
  
  async function fetchProfile() {
    const response = await clientHttp.get('/users/fabricio-pedro');
    setProfile(response.data);
  }
  useEffect(() => {
    fetchProfile();
  }, []);
  
 
  return(
     
    <ProfileContainer>
      <img src={profile.avatar_url}  className="avatar" />
      <div className="bio">
        <div className="info">
          <h2>{profile.name}</h2>
        <a href={profile.html_url} >
            <span>GitHub</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
          </a>
        </div>
        <div className="description">
        <p>{profile.bio}</p>     
        <div className="misc">  
          <span><FontAwesomeIcon icon={faGithub} size="xl" />  {profile.login}</span>
          <span><FontAwesomeIcon icon={faBuilding} /> SoftL@b</span>

           <span><FontAwesomeIcon icon={faUserFriends}/> {profile.followers}</span>
          </div>
        </div>
        
       </div> 
    </ProfileContainer>

  );

}