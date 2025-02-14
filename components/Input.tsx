import {useState} from "react";
import {useAppDispatch} from "../src/hooks/redux.ts";
import {fetchRepo} from "../src/store/reducers/ActionCreators.ts";

const Input = () => {
    const [name, setName] = useState('');
    const dispatch = useAppDispatch();

    const handleChange = e => setName(e.target.value);

    const handleKeyDown = e => {
        if (e.keyCode === 13) {
            dispatch(fetchRepo(name))
        }
    }

    return(
        <div>
            <input
                type="text"
                placeholder="Enter GiyHub user name"
                autoFocus={true}
                value={name}
                spellCheck={false}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <button onClick={() => dispatch(fetchRepo(name))}>Get repositories</button>
        </div>
    )
}

export default Input