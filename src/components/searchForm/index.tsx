import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import { useContext } from "react";
import { IssuesContext } from "../../contexts/IssuesContext";



export function SearchForm() {  
    const {register, handleSubmit} =useForm();
    const {getIssues} = useContext(IssuesContext);
  

    return (
        <SearchFormContainer onSubmit={handleSubmit((data) => {
            getIssues(data.conteudo);
        
        })}> 
            <div className="title">
                <h2>Publicações</h2>
                <span>6 publicações</span>
            </div>
            <input {...register("conteudo", {required:true})} className="search" type="text" placeholder="Buscar conteúdo"  />
        </SearchFormContainer>
    )
}