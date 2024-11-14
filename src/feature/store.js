import newsreducer from './newsSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store= configureStore({
    reducer:{
        newsslice:newsreducer,
    }
})