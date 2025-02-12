import React from 'react'
import type { RootState } from '../../src/app/store'
import { useSelector, useDispatch } from 'react-redux'
import { addRepo } from './repoSlice'

export function Repo() {
    const repo = useSelector((state: RootState) => state.repo)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button
                    aria-label="Bup"
                    onClick={() => dispatch(addRepo())}
                >
                    Get Repositories
                </button>
                <div className="repoItem">
                    <span>{repo.id}</span>
                    <span>{repo.repoName}</span>
                    <span>{repo.desc}</span>
                    <span>{repo.link}</span>
                    <span>{repo.stars}</span>
                    <span>{repo.lastUpdate}</span>
                </div>
            </div>
        </div>
    )
}