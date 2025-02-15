import {IRepo} from "../../modules/IRepo.ts";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchRepo = createAsyncThunk(
    'repo/fetchAll',
    async ({user, currentPage}) => {
        try {
            const response = await fetch<IRepo[]>(`https://api.github.com/users/${user}/repos?per_page=20&page=${currentPage}`)
            return response.json()
        } catch {
            return 'Failed to load repositories'
        }
    }
)