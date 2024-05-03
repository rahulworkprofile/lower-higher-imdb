import { isDisabled } from "@testing-library/user-event/dist/utils";
import "./App.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(0);
  const [index1, setIndex1] = useState();
  const [index2, setIndex2] = useState();
  const [movie1, setMovie1] = useState({Poster: ""})
  const [movie2, setMovie2] = useState({Poster: ""})
  const [refresh, setRefresh] = useState(true)
  const [hidden, setHidden] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [is1Loading, set1Loading] = useState(true)
  const [is2Loading, set2Loading] = useState(true)
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 600);
  }

  useEffect(() => {
    if (!is1Loading && !is2Loading){
      setDisabled(false)
    }
    else if(is1Loading || is2Loading){
      setDisabled(true)
    }
  }, [is1Loading, is2Loading])

  useEffect(() => {
    handleResize()
  }, []);

  useEffect(()=>{
    console.log(isSmallScreen)
    console.log(` ${hidden?"display-none": isSmallScreen? "display": "display-on-hover"}`)
  }, [isSmallScreen])


  window.addEventListener('resize', handleResize);


  const navigate = useNavigate();

  useEffect(()=>{
    if(level >= 5){
      setDisabled(true)
      setTimeout(()=>{
        navigate("/result", {state: {score: score}});
      }, 2800)
    }
  }, [level])

  const movieIds = [
    ["tt0111161"],
    ["tt0068646"],
    ["tt0468569"],
    ["tt0071562"],
    ["tt0050083"],
    ["tt0108052"],
    ["tt0167260"],
    ["tt0110912"],
    ["tt0120737"],
    ["tt0060196"],
    ["tt0109830"],
    ["tt0137523"],
    ["tt0167261"],
    ["tt1375666"],
    ["tt0080684"],
    ["tt0133093"],
    ["tt0099685"],
    ["tt0073486"],
    ["tt0114369"],
    ["tt0047478"],
    ["tt0038650"],
    ["tt0102926"],
    ["tt0120815"],
    ["tt0317248"],
    ["tt0816692"],
    ["tt0118799"],
    ["tt0120689"],
    ["tt0076759"],
    ["tt0103064"],
    ["tt0088763"],
    ["tt0245429"],
    ["tt0253474"],
    ["tt0054215"],
    ["tt6751668"],
    ["tt0110413"],
    ["tt0110357"],
    ["tt0172495"],
    ["tt0120586"],
    ["tt0407887"],
    ["tt0114814"],
    ["tt0482571"],
    ["tt2582802"],
    ["tt0034583"],
    ["tt0095327"],
    ["tt0056058"],
    ["tt1675434"],
    ["tt0027977"],
    ["tt0064116"],
    ["tt0095765"],
    ["tt0047396"],
    ["tt0078748"],
    ["tt0021749"],
    ["tt0078788"],
    ["tt0209144"],
    ["tt1853728"],
    ["tt0082971"],
    ["tt0910970"],
    ["tt0405094"],
    ["tt0043014"],
    ["tt0050825"],
    ["tt0081505"],
    ["tt0032553"],
    ["tt4154756"],
    ["tt0051201"],
    ["tt0090605"],
    ["tt4633694"],
    ["tt0169547"],
    ["tt0057012"],
    ["tt1345836"],
    ["tt0364569"],
    ["tt0361748"],
    ["tt0086879"],
    ["tt2380307"],
    ["tt0114709"],
    ["tt7286456"],
    ["tt0112573"],
    ["tt0082096"],
    ["tt4154796"],
    ["tt0119698"],
    ["tt0087843"],
    ["tt0119217"],
    ["tt5311514"],
    ["tt0045152"],
    ["tt1187043"],
    ["tt0180093"],
    ["tt0057565"],
    ["tt0435761"],
    ["tt8267604"],
    ["tt0086190"],
    ["tt0062622"],
    ["tt0338013"],
    ["tt0105236"],
    ["tt0091251"],
    ["tt2106476"],
    ["tt0033467"],
    ["tt0022100"],
    ["tt0056172"],
    ["tt0053125"],
    ["tt0044741"],
    ["tt0052357"],
    ["tt0053604"],
    ["tt0211915"],
    ["tt0066921"],
    ["tt0036775"],
    ["tt0093058"],
    ["tt0086250"],
    ["tt8503618"],
    ["tt1255953"],
    ["tt0113277"],
    ["tt0056592"],
    ["tt0070735"],
    ["tt1049413"],
    ["tt1745960"],
    ["tt1832382"],
    ["tt0017136"],
    ["tt0075314"],
    ["tt0119488"],
    ["tt0095016"],
    ["tt0208092"],
    ["tt0097576"],
    ["tt0040522"],
    ["tt0986264"],
    ["tt8579674"],
    ["tt0363163"],
    ["tt5074352"],
    ["tt0059578"],
    ["tt0372784"],
    ["tt0012349"],
    ["tt0053291"],
    ["tt10272386"],
    ["tt0042192"],
    ["tt0993846"],
    ["tt6966692"],
    ["tt0055031"],
    ["tt0089881"],
    ["tt0112641"],
    ["tt0120382"],
    ["tt0457430"],
    ["tt0469494"],
    ["tt0105695"],
    ["tt0167404"],
    ["tt1130884"],
    ["tt0268978"],
    ["tt0107290"],
    ["tt0055630"],
    ["tt0040897"],
    ["tt0071853"],
    ["tt0057115"],
    ["tt0477348"],
    ["tt0266697"],
    ["tt0042876"],
    ["tt10872600"],
    ["tt0084787"],
    ["tt0266543"],
    ["tt0080678"],
    ["tt0071315"],
    ["tt0081398"],
    ["tt0434409"],
    ["tt0031381"],
    ["tt0120735"],
    ["tt2096673"],
    ["tt0046912"],
    ["tt1305806"],
    ["tt0347149"],
    ["tt5027774"],
    ["tt0050212"],
    ["tt0117951"],
    ["tt1392214"],
    ["tt1291584"],
    ["tt0116282"],
    ["tt1205489"],
    ["tt0096283"],
    ["tt0264464"],
    ["tt0405159"],
    ["tt0118849"],
    ["tt0083658"],
    ["tt0015864"],
    ["tt4729430"],
    ["tt0112471"],
    ["tt1201607"],
    ["tt2024544"],
    ["tt0047296"],
    ["tt0052618"],
    ["tt2278388"],
    ["tt2267998"],
    ["tt0050986"],
    ["tt0017925"],
    ["tt0107207"],
    ["tt0041959"],
    ["tt0072684"],
    ["tt0077416"],
    ["tt2119532"],
    ["tt0046268"],
    ["tt0353969"],
    ["tt0015324"],
    ["tt3011894"],
    ["tt0031679"],
    ["tt1392190"],
    ["tt0978762"],
    ["tt0050976"],
    ["tt0892769"],
    ["tt0198781"],
    ["tt3170832"],
    ["tt0073195"],
    ["tt0097165"],
    ["tt0118715"],
    ["tt0046438"],
    ["tt0019254"],
    ["tt1950186"],
    ["tt0395169"],
    ["tt0075148"],
    ["tt0091763"],
    ["tt0382932"],
    ["tt1895587"],
    ["tt0088247"],
    ["tt3315342"],
    ["tt0092005"],
    ["tt1979320"],
    ["tt0074958"],
    ["tt0381681"],
    ["tt0758758"],
    ["tt0032138"],
    ["tt0036868"],
    ["tt0048473"],
    ["tt0107048"],
    ["tt0070047"],
    ["tt0035446"],
    ["tt0317705"],
    ["tt0113247"],
    ["tt0325980"],
    ["tt0058946"],
    ["tt1028532"],
    ["tt0032551"],
    ["tt15097216"],
    ["tt0476735"],
    ["tt0245712"],
    ["tt0032976"],
    ["tt0061512"],
    ["tt4016934"],
    ["tt0053198"],
    ["tt0059742"],
    ["tt0025316"],
    ["tt0060827"],
    ["tt0079470"],
    ["tt0129167"],
    ["tt0071411"],
    ["tt1454029"],
    ["tt0103639"],
    ["tt0083987"],
    ["tt0099348"],
  ];

  useEffect(() => {
    setDisabled(true)
    setHidden(false)  
    set1Loading(true)
    set2Loading(true)

    const tempIndex1 = String(
      Math.floor(Math.random() * Math.floor(movieIds.length))
    );
    let tempIndex2;

    do {
      tempIndex2 = String(
        Math.floor(Math.random() * Math.floor(movieIds.length))
      );
    } while (tempIndex2 === tempIndex1);

    setIndex1(tempIndex1);
    setIndex2(tempIndex2);

    console.log(tempIndex1, tempIndex2);
  }, [refresh]);

  useEffect(() => {
    setDisabled(true)
    setHidden(false)
    set1Loading(true)
    set2Loading(true)
    
    document.querySelector(".poster--left").classList.remove("red-bg");
    document.querySelector(".poster--left").classList.remove("green-bg");
    document.querySelector(".poster--right").classList.remove("red-bg");
    document.querySelector(".poster--right").classList.remove("green-bg");


    fetch("https://www.omdbapi.com/?apikey=44dfdf1a&i=" + movieIds[index1] + "&r=json", {
      mode: "cors",
    })
      .then(function (response) {
        return response.json();
      })
      .then((data) => {setMovie1(data)
      set1Loading(false)
      });

    fetch("https://www.omdbapi.com/?apikey=44dfdf1a&i=" + movieIds[index2] + "&r=json", {
      mode: "cors",
    })
      .then(function (response) {
        return response.json();
      })
      .then((data) => {setMovie2(data)
        set2Loading(false)
      });

    setDisabled(false)
    
  }, [index1, index2]);

  function handleCheck(selected, notSelected){

    if (disabled){
      return
    }

    setDisabled(true)
    setHidden(true)

    if (movie1.imdbRating === movie2.imdbRating){
      document.querySelector(".poster--left").classList.add("green-bg");
      document.querySelector(".poster--right").classList.add("green-bg");
    }
    else if(movie1.imdbRating > movie2.imdbRating){
      document.querySelector(".poster--left").classList.add("green-bg");
      document.querySelector(".poster--right").classList.add("red-bg");
    }
    else{
      document.querySelector(".poster--left").classList.add("red-bg");
      document.querySelector(".poster--right").classList.add("green-bg");
    }

    if(selected.imdbRating >= notSelected.imdbRating){
      setScore(score + 100)
    }

    setLevel(level+1)
    
    setTimeout(()=>{

      setHidden(false)  
      setRefresh(!refresh)

      setDisabled(false)

    }, 3000)

  }

  function handleRetry(){
    setScore(0)
    setLevel(0)
    setRefresh(!refresh)
  }

  return (
    <div className="hero">
      <h1 className="heading-big">Higher/Lower IMDB</h1>

      <div className="poster--container">
        <div className={"poster--left " + (is1Loading?"skeleton--loading":"")} data-poster="movie1" onClick={() => handleCheck(movie1, movie2)}> {!is1Loading && <><img src={movie1.Poster} alt="" className={`fade-anim ${hidden?"fade-out":""}`} /> <p className={`${hidden?"display-none": isSmallScreen? "display": "display-on-hover"}`} >{movie1.Title}</p> <p className={`rating ${hidden? "fade-anim":"display-none"}`}>{movie1.Title}<br /><br /> Rating: {movie1.imdbRating}</p></>} </div>
        <div className={"poster--right " + (is2Loading?"skeleton--loading":"")} data-poster="movie2" onClick={() => handleCheck(movie2, movie1)}> {!is2Loading && <><img src={movie2.Poster} alt="" className={`fade-anim ${hidden?"fade-out":""}`}/> <p className={`${hidden?"display-none": isSmallScreen? "display": "display-on-hover"}`} >{movie2.Title}</p> <p className={`rating fade-anim ${hidden? "":"display-none"}`}>{movie2.Title}<br /><br /> Rating: {movie2.imdbRating}</p></>} </div>  
      </div>

      <div className="button--container">
        <button className="score-button">Your Score: {score}</button>
        <button className="retry-button" onClick={handleRetry}>⟳</button>
      </div>
    </div>
  );
}

export default App;