import React, {useState, useEffect} from 'react';
import { Alert, Button } from 'reactstrap';
import axiosPosts from '../../axiosPosts';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import Spinner from '../../components/Spinner/Spinner';

const ReadOnePost = props => {
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const fetchData = async() => {
            setLoading(true);
            try{
                const response = await axiosPosts.get('/blog/' + props.match.params.id + '/post/.json');
                setPost(response.data)
            } finally {
                setLoading(false);
            };
        };
        fetchData().catch(console.error);
    },[props.match.params.id]);

    const EditHandler = () => {
        props.history.push({
            pathname: '/edit/' + (props.match.params.id)
        });
    };

    const deletePost = async () => {
        setLoading(true);

        try {
            await axiosPosts.delete('/blog/' + props.match.params.id + '/post/.json');
        } finally {
            setLoading(false);
            props.history.push({
                pathname:'/'
            });
        }
    };

    let alert = (
        <Alert color="danger">
                    <h4 className="alert-heading">{post.title}</h4>
                    <p>
                        {post.text}
                    </p>
                    <hr />
                    <p className="mb-0">
                        <strong>Created: </strong>{post.date}
                    </p>
                     <p>
                         <Button color="warning" className='m-2' onClick={EditHandler}>
                             Edit
                         </Button>
                         <Button color="danger" onClick={deletePost}>
                             Delete
                         </Button>
                     </p>
                </Alert>
    );

    if(loading){
        alert = <Spinner/>
    }

    return (
        <div>
            <NavBar/>
            <div className='container'>
               {alert}
            </div>
            <Footer/>
        </div>
    );
};

export default ReadOnePost;