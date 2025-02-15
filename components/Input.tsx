import {useState} from "react";
import {useAppDispatch} from "../src/hooks/redux.ts";
import {addUser} from "../src/store/reducers/RepoSlice.ts";

const Input = () => {
    const [user, setUser] = useState('ryzzzzzzzzzzz');
    const dispatch = useAppDispatch();

    const handleChange = e => setUser(e.target.value);

    const handleKeyDown = e => {
        if (e.keyCode === 13) {
            dispatch(addUser(user))
        }
    }

    return(
        <div>
            <input
                type="text"
                placeholder="Enter GiyHub user name"
                autoFocus={true}
                value={user}
                spellCheck={false}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <button className='btn' onClick={() => {
                dispatch(addUser(user));
            }}>
                Get repositories
            </button>
        </div>
    )
}

export default Input