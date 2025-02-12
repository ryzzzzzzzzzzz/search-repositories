import { createSlice } from '@reduxjs/toolkit'

export interface repoState {
    id: number,
    repoName: string,
    desc?: string,
    link: string,
    stars: number | null,
    lastUpdate: string
}

const initialState: repoState =
    {
        id: 0,
        repoName: '',
        desc: '',
        link: '',
        stars: null,
        lastUpdate: ''
    }


export const repoSlice = createSlice({
    name: 'repo',
    initialState,
    reducers: {
        addRepo: (state) =>
        {
            state.id += 1;
            state.repoName = 'Test';
            state.desc = 'test';
            state.link = 'test';
            state.stars = 5;
            state.lastUpdate = '12.02.24';
        },
    },
})

// Action creators are generated for each case reducer function
export const { addRepo } = repoSlice.actions

export default repoSlice.reducer