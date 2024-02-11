
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {

    const showGptSearch = useSelector(store=> store.gpt.showGptSearch);
    useNowPlayingMovies();
    usePopularMovies();
    return <div>
        <Header/>
        {showGptSearch?<GPTSearch/>:(
            <>
             <MainContainer/>
            <SecondaryContainer/>
            </>
        )}
       
    </div>
}
export default Browse