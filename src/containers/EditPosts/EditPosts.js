import React, { useState, useEffect } from 'react';
import { Button, Card, CardBody } from 'reactstrap';
import moment from 'moment';
import axiosPosts from '../../axiosPosts';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import Spinner from '../../components/Spinner/Spinner';

const EditPosts = props => {
    const [newPost, setNewPost] = useState({
        title:'',
        text:'',
        });
    const [loading, setLoading] = useState(false);

        useEffect(()=>{
            const fetchData = async () =>{
                setLoading(true);
                try{
                    const response = await axiosPosts.get('/blog/' + props.match.params.id + '/post/.json');
                    setNewPost(response.data);
                } finally {
                    setLoading(false);
                };
            };

            fetchData().catch(console.error);
        },[props.match.params.id]);
    
        const changeHandler = event => {
            const name = event.target.name;
            const value = event.target.value;
    
            setNewPost(prevState=>({
                ...prevState,
                [name]:value,
                date:moment().format("DD-MM-YYYY hh:mm:ss")
            }));
        };
    
        const submitHandler = async e => {
            e.preventDefault();
            setLoading(true);

            const blog = {
                post:{...newPost}
            };

            try {
                await axiosPosts.put('/blog/' + props.match.params.id + '.json', blog);     
            } finally {
                setLoading(false);
            };
        };

        let card = (
            <Card>
            <h3>Add Post</h3>
            <CardBody>
            <form className='d-flex flex-column justify-content-center'
            onSubmit={(e)=>submitHandler(e)}>
               <h5>Title:</h5>

            <input type="text" 
            placeholder="Input title" 
            name='title'
            value={newPost.title}
            onChange={(e)=>changeHandler(e)} 
            required/>
                <h5>Text:</h5>

            <textarea 
            type="text" 
            placeholder="Input Text"
            name='text'
            value={newPost.text} 
            onChange={(e)=>changeHandler(e)} 
            required/>
            <Button type='submit'>
                    <strong>
                        SAVE
                    </strong>
            </Button>
        </form>
            </CardBody>
        </Card>
        );

        if(loading) {
            card = <Spinner/>
        }

    return(
        <div>
            <NavBar/>
            <div className='container text-center m-5'>
               {card}
            </div>
           <Footer/>
        </div>
    );
};

export default EditPosts;