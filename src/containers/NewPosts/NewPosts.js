import React, { useState } from 'react';
import { Button, Card, CardBody } from 'reactstrap';
import axiosPosts from '../../axiosPosts';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';



const NewPosts = props => {
    console.log(props)
    const [newPost, setNewPost] = useState({
    title:'',
    text:''
    });

    const changeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;

        setNewPost(prevState=>({
            ...prevState,
            [name]:value
        }));
    };

    const submitHandler = async e => {
        e.preventDefault();
        const blog = {
            post:{...newPost}
        };
        try {
            await axiosPosts.post('/blog.json', blog);      
        } finally {
            console.log('posted');
            setNewPost({
            title:'',
            text:''
            });
        };
    };

    
    return(
        <div>
            <NavBar/>
            <div className='container text-center m-5'>
                <Card>
                    <h3>Add New Post</h3>
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
            </div>
            <Footer/>
        </div>
    );
};

export default NewPosts;