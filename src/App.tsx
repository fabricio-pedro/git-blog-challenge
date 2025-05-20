import { Header } from "./components/Header"
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/searchForm";

import { Wrapper } from "./components/Wrapper";
import { IssuesProvider } from "./contexts/IssuesContext";
import { Posts } from "./pages/Posts";

function App() {

  return (
    
    <Wrapper>
    <IssuesProvider> 
     <Header />
     <Profile />
     <SearchForm />
     <Posts />
    </IssuesProvider>
    </Wrapper>
      
     
  
  )
}

export default App
