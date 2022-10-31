import { ActionReducerMapBuilder, createAsyncThunk, createSlice, isRejected, isRejectedWithValue } from "@reduxjs/toolkit";
import { AnyIfEmpty } from "react-redux";
import { getUserBlogs, IPostUserBlog, postUserBlog ,getUserBlog } from "../../services/service";
import { RootState } from "../index";

interface BlogType{
    _id: string;
    title : string ; 
    description : string ; 
    owner : string ;
    ownerName:string;
    createdAt: string;
}

interface IState {
    blogs : BlogType[];
    loading : string; 
    fetchedBlog: BlogType;
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

export const fetchBlog = createAsyncThunk(
    "blogs/fetchBlog",
    async (id:string)=>{
       
            const res = await getUserBlog(id);
            
            return res.data;
        
    }
)
const initialBlog = {
    _id:'',
    title : '' ,
    description : '',
    owner : '',
    ownerName: '',
    createdAt: ''

}

const initialState = {
    blogs :[],
    loading:'idle',
    fetchedBlog: initialBlog
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
    
        .addCase(fetchBlog.fulfilled,(state:any,action:any)=>{
            console.log(action.payload)
            state.fetchedBlog= action.payload;
            state.loading ="success"
        })
        .addCase(fetchBlog.pending,(state:any,action:any)=>{
            // state.blogs = action.blogs;
            state.loading = 'pending'
        })
        .addCase(fetchBlog.rejected,(state:any,action:any)=>{
            // state.blogs = action.blogs;
            state.loading = 'rejected'
        })
    }
})


export const selectBlogList = (state : RootState) => state.blog.blogs;
export const selectLoading = (state : RootState) => state.blog.loading;
export const selectBlog= (state : RootState) => state.blog.fetchedBlog;

export default blogSlice.reducer;
