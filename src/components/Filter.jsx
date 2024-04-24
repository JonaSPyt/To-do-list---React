
function Filter({filter,setFilter,setSort}){
    return(
        <div className="filter">
            <h2>Filtrar:</h2>
            <div className="filter-options">
                <div>
                    <p>Status:</p>
                    <select value={filter} onChange={(e)=>setFilter(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incopleted">Imcompletas</option>
                    </select>
                </div>
                <div>
                    <p>Ordem alfabética:</p>
                    <button className="Buttons" onClick={() => setSort("Asc")}>Ascendente</button>
                    <button className="Buttons" onClick={() => setSort("Desc")}>Descendente</button>
                </div>
            </div>
        </div>
    )
}

export default Filter