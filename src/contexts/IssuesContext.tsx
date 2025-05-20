import { createContext, useEffect, useState } from "react";
import { client } from "../api/client";

interface IssueProviderProps{
 children: React.ReactNode;
}


interface Issue{
   id:number; 
   title:string;
   body:string;

}

interface IssueContextType{
    issues: Array<Issue>;
    getIssues: (query?:string) => Promise<void>;
   


}


const issuesUrl=import.meta.env.VITE_GITHUB_ISSUES_URL;

  
export const IssuesContext = createContext({} as IssueContextType);


export function IssuesProvider({ children }: IssueProviderProps) {
   
    const [issues, setIssues] = useState([]);
    const getIssues = async (q?:string) => {

        if(!q){
            q="";
        }
    

        
        try {
            const response = await client.get(`https://api.github.com/search/issues?q=${q}%20repo:fabricio-pedro/git-blog-challenge+is:issue`);
            console.log("this is the response"+response.data.items.length);
            
            setIssues(response.data.items);
        } catch (error) {
            console.error("Error fetching issues:", error);
        }
    };

    useEffect(() => {
        getIssues();
    }, []);

 return(
   <IssuesContext.Provider value={{ issues,getIssues }}>  
        {children}
    </IssuesContext.Provider>
    );

}