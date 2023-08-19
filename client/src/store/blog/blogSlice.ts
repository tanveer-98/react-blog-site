import { ActionReducerMapBuilder, createAsyncThunk, createSlice, isRejected, isRejectedWithValue } from "@reduxjs/toolkit";
import { AnyIfEmpty } from "react-redux";
import { getUserBlogs, IPostUserBlog, postUserBlog ,getUserBlog, getAllBlogs, getAllBlogsWithLimit, getSuggestedBlogs, updateUserProfile, updateLike, updateDisLike, fetchDistinctTags } from "../../services/service";
import { RootState } from "../index";

export interface BlogType{
    _id: string;
    title : string ; 
    description : string ; 
    owner : string ;
    ownerName:string;
    createdAt: string;
    profileurl:string;
    likes:number;
    dislikes:number;
   
}

interface IState {
    blogsAllLimit:BlogType[],
    blogsAll: BlogType[];
    blogs : BlogType[];
    blogsSuggested:BlogType[];
    loading : string; 
    fetchedBlog: BlogType;
    blogTags:string[]
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

export const fetchAllBlogs  = createAsyncThunk(
    "blogs/fetchAllBlogs",
    async ()=>{
        const res = await getAllBlogs();
        return res.data;
    }
);

export const fetchAllBlogs_withLimit = createAsyncThunk(
    "blogs/fetchAllBlogs_withLimit",
    async (index:Number)=>{
        //console.log("index: ",index)
       
        const res = await getAllBlogsWithLimit(index.toString());
        // console.log(res.data)
        // console.log("hello")
        return res.data;
    }
);
export const fetchSuggestedBlogs  = createAsyncThunk(
    "blogs/fetchSuggestedBlogs", 
    async (index:Number)=>{
        const res = await getSuggestedBlogs(index.toString());
        // console.log(res)
        return res.data;
    }  
)


export const updateDislike_  = createAsyncThunk(
    "blogs/updateDisLike", 
    async (id:string) =>{
        const res = await updateDisLike(id);
        return res.data;
    }
)

export const updateLike_  = createAsyncThunk(
    "blogs/updateLike", 
    async (id:string) =>{
        const res = await updateLike(id);
        return res.data;
    }
)

export const fetchDistictTags_  = createAsyncThunk(
    "blogs/fetchDistictTags", 
    async () =>{
        const res = await fetchDistinctTags();
        console.log("FETCH DISTINCT TAGS SLICE ") 
        console.log(res.data.tags)
        return res.data;
    }
)

// export const up

// export const updateUserProfile_ = createAsyncThunk(
//     "users/updateUserProfile",
//     async (index:Number)=>{
//         const res = await updateUserProfile(index.toString());
//         return res.data;
//     }
// )

const initialBlog = {
    _id:'',
    title : '' ,
    description : '',
    owner : '',
    ownerName: '',
    createdAt: '',
    profileurl:'',
    likes: 0 ,
    dislikes : 0,
}

const initialState = {
    blogsAllLimit:[],
    blogsAll:[],
    blogs :[],
    blogsSuggested:[],
    loading:'idle',
    fetchedBlog: initialBlog,
    blogTags:[]
   

} as IState

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers : {
        clearBlogs: (state:any ,action:any) => {
            state.blogsAll = action.payload;
            state.blogsAllLimit = action.payload;
        },
        updateProfile : (state:any,action:any)=>{
            updateUserProfile(action.payload)
            .then(()=>{
                window.localStorage.setItem('profileurl',action.payload);
            })
            .catch(err=>console.log((err as Error).message))
        }

    },
    extraReducers : (builder:ActionReducerMapBuilder<IState>) => {
        builder
        .addCase(fetchBlogs.fulfilled,(state:any,action:any)=>{
            //console.log(action.payload)
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
            //console.log(action.payload)
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
        .addCase(fetchAllBlogs.fulfilled,(state:any,action:any)=>{
            //console.log(action.payload)
            state.blogsAll= action.payload;
            state.loading ="success"
        })
        .addCase(fetchAllBlogs.pending,(state:any,action:any)=>{
            // state.blogs = action.blogs;
            state.loading = 'pending'
        })
        .addCase(fetchAllBlogs.rejected,(state:any,action:any)=>{
            // state.blogs = action.blogs;
            state.loading = 'rejected'
        })
        .addCase(fetchAllBlogs_withLimit.fulfilled,(state:any,action:any)=>{
            //console.log(action.payload)
            state.blogsAllLimit.push(...action.payload);
            console.log(action.payload)
            state.loading ="success"
        })
        .addCase(fetchAllBlogs_withLimit.pending,(state:any,action:any)=>{
            // state.blogs = action.blogs;
            state.loading = 'pending'
        })
        .addCase(fetchAllBlogs_withLimit.rejected,(state:any,action:any)=>{
            // state.blogs = action.blogs;
            state.loading = 'rejected'
        })
        .addCase(fetchSuggestedBlogs.fulfilled,(state:any,action:any)=>{
            //console.log(action.payload)
            state.blogsSuggested.push(...action.payload);
            state.loading ="success"
        })
        .addCase(fetchSuggestedBlogs.pending,(state:any,action:any)=>{
            // state.blogs = action.blogs;
            state.loading = 'pending'
        })
        .addCase(fetchSuggestedBlogs.rejected,(state:any,action:any)=>{
            // state.blogs = action.blogs;
            state.loading = 'rejected'
        })
        .addCase(updateDislike_.fulfilled,(state:any,action:any)=>{
            //console.log(action.payload)
            state.blogsSuggested.push(...action.payload);
            state.loading ="success"
        })
        .addCase(updateDislike_.pending,(state:any,action:any)=>{
            // state.blogs = action.blogs;
            state.loading = 'pending'
        })
        .addCase(updateDislike_.rejected,(state:any,action:any)=>{
            // state.blogs = action.blogs;
            state.loading = 'rejected'
        })
        
        .addCase(updateLike_.fulfilled,(state:any,action:any)=>{
            //console.log(action.payload)
            state.blogsSuggested.push(...action.payload);
            state.loading ="success"
        })
        .addCase(updateLike_.pending,(state:any,action:any)=>{
            // state.blogs = action.blogs;
            state.loading = 'pending'
        })
        .addCase(updateLike_.rejected,(state:any,action:any)=>{
            // state.blogs = action.blogs;
            state.loading = 'rejected'
        })
        .addCase(fetchDistictTags_.fulfilled,(state:any,action:any)=>{
            //console.log(action.payload)
            // console.log("BLOGS : "+action.payload.tags)
            state.blogsTags = action.payload;
            state.loading ="success"
        })
        .addCase(fetchDistictTags_.pending,(state:any,action:any)=>{
            // state.blogs = action.blogs;
            state.loading = 'pending'
        })
        .addCase(fetchDistictTags_.rejected,(state:any,action:any)=>{
            // state.blogs = action.blogs;
            state.loading = 'rejected'
        })
       
    
    }
})

export const {clearBlogs,updateProfile} =  blogSlice.actions;


export const selectBlogList = (state : RootState) => state.blog.blogs;
export const selectLoading = (state : RootState) => state.blog.loading;
export const selectBlog= (state : RootState) => state.blog.fetchedBlog;
export const selectAllBlogs = (state : RootState) => state.blog.blogsAll;
export const selectAllBlogsLimit = (state : RootState) => state.blog.blogsAllLimit;
export const selectBlogsSuggested = (state : RootState) => state.blog.blogsSuggested;
export const selectBlogTags = (state: RootState) => state.blog.blogTags;

export default blogSlice.reducer;
