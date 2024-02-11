import { useDispatch, useSelector } from "react-redux"
import lang from "../utils/languageConstants"
import { useRef } from "react"
import openai from "../utils/openai"
import { API_OPTIONS } from "../utils/constants"
import { addGptMovieResult } from "../utils/gptSlice"

const GptSearchBar = () =>{
    const dispatch = useDispatch();
    const searchText = useRef(null)
    const langKey = useSelector(store=> store.config.lang)
    const searchMovieTMDB = async(movie) =>{
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
        const json = await data.json()
        return json.results

    }
    const handleGptSearchClick = async()=>{
        const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query :" + searchText.current.value + ". Give me only 5 movie names, comma separated like the example result given ahead. Example Result: Bahubali, Jersey, Don, Hanuman, Adi Purush"
       const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
          });
          
          const gptMovies = gptResults.choices?.[0]?.message?.content.split(",")
          const promiseArray = gptMovies.map(movie=>searchMovieTMDB(movie))

          const tmdbResults =await Promise.all(promiseArray)
          console.log(tmdbResults);

          dispatch(addGptMovieResult({movieNames: gptMovies, movieResults:tmdbResults}));
    }
 return <div className="pt-[10%] flex justify-center">
    <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>(e.preventDefault())}>
        <input type="text" className="p-4 m-4 col-span-9" ref={searchText} placeholder={lang[langKey].gptSearchPlaceHolder}></input>
        <button className="py-2 m-4 px-4 bg-red-700 text-white rounded-lg col-span-3" onClick={handleGptSearchClick}>{lang[langKey].search}</button>
    </form>
 </div>
}
export default GptSearchBar