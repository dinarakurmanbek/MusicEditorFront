import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Editor } from '../components/editor/Editor'
import Home from '../components/home/Home'
import Project from '../components/project/Project'
import { PathsMap } from './paths/MainPaths'

export const PagesRouter = () => {
    return (
        <Routes>
            <Route path={PathsMap.home.get()} element={<Home />} />
            <Route path={PathsMap.project.get()} element={<Project />} />
            <Route path={PathsMap.edit.get()} element={<Editor />} />
        </Routes>
    )
}