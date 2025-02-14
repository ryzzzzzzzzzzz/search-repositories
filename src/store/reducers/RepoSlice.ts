import {IRepo} from "../../modules/IRepo.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchRepo} from "./ActionCreators.ts";

interface RepoState {
    repos: IRepo[],
    loadingStatus: 'idle' | 'loading' | 'error',
    error: string
}

const initialState: RepoState = {
    repos: [],
    loadingStatus: 'idle',
    error: ''
}

export const repoSlice = createSlice({
    name: 'repo',
    initialState,
    reducers: {
        addRepo: (state, action: PayloadAction<IRepo>) => {
            state.repos.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRepo.fulfilled, (state, action) => {
                state.loadingStatus = 'idle';
                state.error = '';
                state.repos = action.payload;
            })
            .addCase(fetchRepo.pending, (state) => {
                state.loadingStatus = 'loading';
            })
            .addCase(fetchRepo.rejected, (state, action) => {
                state.loadingStatus = 'error';
                state.error = action.payload;
            })
    }
})

export const {addRepo} = repoSlice.actions;
export default repoSlice.reducer