import {IRepo} from "../../modules/IRepo.ts";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchRepo = createAsyncThunk(
    'repo/fetchAll',
    async (name) => {
        try {
            const response = await fetch<IRepo[]>('https://api.github.com/users/' + name + '/repos')
            return response.json()
        } catch {
            return 'Failed to load repositories'
        }
    }
)