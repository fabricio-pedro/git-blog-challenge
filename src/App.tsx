import { Header } from "./components/Header"
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/searchForm";

import { Wrapper } from "./components/Wrapper";
import { Posts } from "./pages/Posts";

function App() {

  return (
    <Wrapper> 
     <Header />
     <Profile />
     <SearchForm />
     <Posts />
    </Wrapper>
      
     
  
  )
}

export default App
