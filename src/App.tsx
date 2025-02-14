import './App.css'
import {useAppSelector} from "./hooks/redux.ts";
import Repo from "../components/Repo.tsx";
import Input from "../components/Input";

function App() {
    const {repos, loadingStatus, error} = useAppSelector(state => state.repoReducer);

    return (
        <>
            <Input/>
            {loadingStatus === 'loading' && <h1>..................</h1>}
            {error && <h1>{error}</h1>}
            {repos.map(function (repo) {
                return (
                    <div className='repo'>
                        <Repo repo={repo} key={repo.id} />
                    </div>
                )
            })}
        </>
    )
}

export default App
