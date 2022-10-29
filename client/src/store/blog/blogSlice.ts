import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AnyIfEmpty } from "react-redux";
import { getUserBlogs, IPostUserBlog, postUserBlog } from "../../services/service";
import { RootState } from "../index";

interface BlogType{
    title : string ; 
    description : string ; 
    owner : string ;
}

interface IState {
    blogs : BlogType[];
    loading : string; 
}

export const fetchBlogs = createAsyncThunk(
    "blogs/fetchBlogs",
    async () => {
        const res =  await getUserBlogs();
        return res.data;
    }
)


export const postBlog = createAsyncThunk(
    "blogs/fetchBlogs",
    async (data:IPostUserBlog,{rejectWithValue}) => {
        try{
            const res =  await postUserBlog(data)
            return res.data;
        }
        catch(err){
            return rejectWithValue((err as Error).message)
        }
    }
)

const initialState = {
    blogs :[],
    loading:'idle'
} as IState

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers : {

    },
    extraReducers : (builder:ActionReducerMapBuilder<IState>) => {
        builder
        .addCase(fetchBlogs.fulfilled,(state:any,action:any)=>{
            console.log(action.payload)
            state.blogs = action.payload.blogs;
            state.loading ="success"
        })
        .addCase(fetchBlogs.pending,(state:any,action:any)=>{
            // state.blogs = action.blogs;
            state.loading = 'pending'
        })
        .addCase(fetchBlogs.rejected,(state:any,action:any)=>{
            // state.blogs = action.blogs;
            state.loading = 'rejected'
        })
    }
})


export const selectBlogList = (state : RootState) => state.blog.blogs;
export const selectLoading = (state : RootState) => state.blog.loading;

export default blogSlice.reducer;
