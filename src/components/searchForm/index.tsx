import { SearchFormContainer } from "./styles";



export function SearchForm() {  
    return (
        <SearchFormContainer>
            <div className="title">
                <h2>Publicações</h2>
                <span>6 publicações</span>
            </div>
            <input className="search" type="text" placeholder="Buscar conteúdo" />
        </SearchFormContainer>
    )
}