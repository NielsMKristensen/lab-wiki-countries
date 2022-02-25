import { Link, NavLink } from 'react-router-dom';
import { Routes, Route, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import countriesJSON from './../countries.json';

function CountryDetails(props) {
  // const [countryData, setCountryData] = useState(countriesJSON);
  const [foundCountry, setFoundCountry] = useState();
  const { id } = useParams();
  //   console.log("TEST", countyData)
  //   console.log("ID", id)

  console.log('found country', [foundCountry]);

useEffect(() => {
     const countryFound = countriesJSON.find((countryObj) => {
          //return console.log("Alpha", countryObj.alpha3Code)
          return countryObj.alpha3Code === id;
      });

      if (countryFound){
          //console.log("TEST",countryFound)
          setFoundCountry(countryFound);
      }
    }, [id]);
    
    return (

        
        <div>
            <h1>TEST</h1>
            <h4>{foundCountry.name.common}</h4>
        </div>

    )
}

export default CountryDetails;


//   const countryFound = countriesJSON.find((countryObj) => {
//     //return console.log("Alpha", countryObj.alpha3Code)
//     return countryObj.alpha3Code === id;
//     });
//     setFoundCountry(countryFound);

//{foundCountry.0.name.common}



// if (countryFound){
  //     //console.log("TEST",countryFound)
  //     setFoundCountry(countryFound);
  // }
  // useEffect(() => {
  //     const countryFound = countryData.find((countryObj) => {
  //         //return console.log("Alpha", countryObj.alpha3Code)
  //         return countryObj.alpha3Code === id;
  //     });

  //     if (countryFound){
  //         //console.log("TEST",countryFound)
  //         setFoundCountry(countryFound);
  //     }
  //   }, [id]);

  //   console.log ("DFG",foundCountry)


  // <div className="col-5">
    //   <div className="list-group">
    //     <div className="col-7">
    //       <p>Here</p>
    //       {foundCountry && (
    //         <>
    //           <h1>TEST</h1>
    //           <table className="table">
    //             <thead></thead>
    //             <tbody>
    //               <tr>
    //                 <td></td>
    //                 <td>Paris</td>
    //               </tr>
    //               <tr>
    //                 <td>Area</td>
    //                 <td>
    //                   551695 km
    //                   <sup>2</sup>
    //                 </td>
    //               </tr>
    //               <tr>
    //                 <td>Borders</td>
    //                 <td>
    //                   <ul>
    //                     <li>
    //                       <a href="/AND">Andorra</a>
    //                     </li>
    //                     <li>
    //                       <a href="/BEL">Belgium</a>
    //                     </li>
    //                     <li>
    //                       <a href="/DEU">Germany</a>
    //                     </li>
    //                     <li>
    //                       <a href="/ITA">Italy</a>
    //                     </li>
    //                     <li>
    //                       <a href="/LUX">Luxembourg</a>
    //                     </li>
    //                     <li>
    //                       <a href="/MCO">Monaco</a>
    //                     </li>
    //                     <li>
    //                       <a href="/ESP">Spain</a>
    //                     </li>
    //                     <li>
    //                       <a href="/CHE">Switzerland</a>
    //                     </li>
    //                   </ul>
    //                 </td>
    //               </tr>
    //             </tbody>
    //           </table>
    //         </>
    //       )}
    //     </div>
    //   </div>
    // </div>