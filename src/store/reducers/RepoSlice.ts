import {IRepo} from "../../modules/IRepo.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchRepo} from "./ActionCreators.ts";

interface RepoState {
    repos: IRepo[],
    loadingStatus: 'idle' | 'loading' | 'error',
    error: string,
    user: string,
    currentPage: number
}

const initialState: RepoState = {
    repos: [],
    loadingStatus: 'idle',
    error: '',
    user: 'ryzzzzzzzzzzz',
    currentPage: 1,
}

export const repoSlice = createSlice({
    name: 'repo',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<IRepo>) => {
            state.user = action.payload;
            state.repos = []
            state.currentPage = 1;
        },
        incrementPage: (state) => {
            state.currentPage = state.currentPage + 1;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRepo.fulfilled, (state, action) => {
                state.loadingStatus = 'idle';
                state.error = '';
                state.repos = state.repos.concat(action.payload);
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

export const {addUser, incrementPage} = repoSlice.actions;
export default repoSlice.reducer