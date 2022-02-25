import { Link, NavLink} from "react-router-dom";
import { useState, useEffect } from "react";


function CountriesList(props) {
    const [countyData, setCountyData] = useState([]);

    useEffect(() => {
        setCountyData(props.countries);
      }, [props.countries]);
    
      return (     
            <div className="col-5">
            <div className="list-group">
                {countyData.map ((country) => {
                    return (
                        <Link to={`/${country.alpha3Code}`}> 
                        {country.name.official}
                        </Link>                      
                    )
                })}
            </div>
            </div>      
  );
}
export default CountriesList;