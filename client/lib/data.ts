type Post={
    StuId:string;
    FirstName:string;
    SisiID:string;
}
let posts : Post[]=[];

export const getPosts = () => posts;

export const addPost = (post:Post)=>{
    posts.push(post);
}

