import React, {useState, useEffect} from 'react';
import { Alert, Button } from 'reactstrap';
import axiosPosts from '../../axiosPosts';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';

const ReadOnePost = props => {
    const [post, setPost] = useState({});

    useEffect(()=>{
        const fetchData = async() => {
            console.log(props.match.params.id + '.json')
            const response = await axiosPosts.get('/blog/' + props.match.params.id + '/post/.json');
            console.log(response.data);
            setPost(response.data)

        };
        fetchData().catch(console.error);
    },[props.match.params.id]);

    const deletePost = async () => {
        const response = await axiosPosts.delete('/blog/' + props.match.params.id + '/post/.json');
        props.history.push({
            pathname:'/'
        });
    }

    return (
        <div>
            <NavBar/>
            <div className='container'>
                <Alert color="danger">
                    <h4 className="alert-heading">{post.title}</h4>
                    <p>
                        {post.text}
                    </p>
                    <hr />
                    <p className="mb-0">
                        additional text
                     </p>
                     <p>
                         <Button color="warning" className='m-2'>
                             Edit
                         </Button>
                         <Button color="danger" onClick={deletePost}>
                             Delete
                         </Button>
                     </p>
                </Alert>
            </div>
            <Footer/>
        </div>
    );
};

export default ReadOnePost;