import React, {useState, useEffect} from 'react';
import Spinner from '../../components/Spinner/Spinner';
import axiosPosts from '../../axiosPosts';
import PostsFromApi from '../../components/PostsFromApi/PostsFromApi';


const GetPosts = () => {
    const [posts, setPosts] = useState({});
    const [loading, setLoading] = useState(false);  

    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axiosPosts.get('/blog.json');
                setPosts(response.data);
            } finally {
                setLoading(false);
            }
        };
        fetchData().catch(console.error);
    },[])

    let list = (
        <p>
            no messages yet
        </p>
    );

    if(posts !== null) {
       list = (
        <div>
        {Object.keys(posts).map(key=>(
            <PostsFromApi
            key={key} 
            title={posts[key]['post']['title']}
            text={posts[key]['post']['text']}
            id={key}
            date={posts[key]['post']['date']}/>
        ))}
    </div>
       )
    };

    if(loading) {
        list = <Spinner/>
    };

    return(
        <>
        {list}
        </>
    );
};

export default GetPosts;