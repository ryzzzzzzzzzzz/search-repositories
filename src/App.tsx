import './App.css'
import {useAppDispatch, useAppSelector} from "./hooks/redux.ts";
import Repo from "../components/Repo.tsx";
import Input from "../components/Input";
import {fetchRepo} from "./store/reducers/ActionCreators.ts";
import {useEffect, useRef, useState} from "react";
import {incrementPage} from "./store/reducers/RepoSlice.ts";

function App() {
    const dispatch = useAppDispatch();
    const {repos, loadingStatus, error, user, currentPage} = useAppSelector(state => state.repoReducer);
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        const stop = Array.isArray(repos) && repos.length%20;
        const handleScroll = () => {
            if (document.documentElement.getBoundingClientRect().bottom < 630 && stop === 0) {
                if (page === currentPage) {
                    dispatch(incrementPage());
                    setTimeout(() => {
                        setPage(prev => prev + 1)
                    }, 100)
                }
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [repos]);

    useEffect(() => {
        dispatch(fetchRepo({user, currentPage}))
    }, [user, currentPage])

    return (
        <div id='conteiner'>
            <Input/>
            {loadingStatus === 'loading' && <h1>Loading ...</h1>}
            {error && <h1>{error}</h1>}
            {repos.map(function (repo) {
                return (
                    <div className='repo'>
                        <Repo repo={repo} key={repo.id}/>
                    </div>
                )
            })}
        </div>
    )
}

export default App
