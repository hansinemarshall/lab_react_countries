const Country = ({country, index, visitCountry, visited}) => {

    return(
        <>
            <div className="country-element">
                <h3>{country.name.common}</h3>
                <p>Capital city: {country.capital}</p>
                <p>Population: {country.population}</p>
                <p>Flag: {country.flag}</p>
                {!visited && (
                    <input 
                    type="checkbox"
                    id="visited"
                    onClick={() => visitCountry(index)}
                    />
                )}
            </div>
        
        </>
    )
}

export default Country;