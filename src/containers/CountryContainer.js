import { useEffect, useState } from "react"
import Country from "../components/Country";


const CountryContainer = () => {
   
    const [countryList, setCountryList] = useState([]);
    const [visitedCountryList, setVisitedCountryList] = useState([]);
    

    const loadCountryData = async () =>{
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountryList(data);
    }

    useEffect(() => {
        loadCountryData();
    }, [])

    const visitCountry = (index) => {
        const visitedCountryId = visitedCountryList.findIndex(
            (country) => country.name.common === countryList[index].name.common
        );

        if(visitedCountryId === -1) {
            setVisitedCountryList([...visitedCountryList, countryList[index]]);
        } else {
            setVisitedCountryList(
                visitedCountryList.filter((country, i)=> i !== visitedCountryId)
            );
        }
    }

    return (
        <>
        <h2 className="title">Countries</h2>
        <section className="country-list">
        {countryList.map((country, index) => (
            <Country key={country.name.common} index={index} country={country} visitCountry={visitCountry}/>
        ))}
        </section>
        <section className="visited-list">
            <h3>Visited Countries</h3>
            {visitedCountryList.map((country, index) => (
                <Country key={country.name.common} index={index} country={country} visitCountry={visitCountry} visited={true}/>
            ))}
        </section>
        </>
    )
}

export default CountryContainer;