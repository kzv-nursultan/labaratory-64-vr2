import React, {useState, useEffect} from 'react';
import axiosPosts from '../../axiosPosts';
import PostsFromApi from '../../components/PostsFromApi/PostsFromApi';

const GetPosts = () => {
    const [posts, setPosts] = useState({});

    useEffect(()=>{
        const fetchData = async () => {
            const response = await axiosPosts.get('/blog.json');
            console.log(response);
            setPosts(response.data);
        };
        fetchData().catch(console.error);
    },[]);  

    const list = (
        <div>
            {Object.keys(posts).map(key=>(
                <PostsFromApi
                key={key} 
                title={posts[key]['post']['title']}
                text={posts[key]['post']['text']}
                id={key}/>
            ))}
        </div>
    );

    return(
        <>
        {list}
        </>
    );
};

export default GetPosts;