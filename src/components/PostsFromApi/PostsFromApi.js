import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';

const PostsFromApi = props => {
    let history = useHistory();

    const OnClickHandler = () => {
        history.push({
            pathname: '/more/' + (props.id)
        });
    };

    return(
        <div className="alert alert-success" role="alert">
            <h4 className="alert-heading">{props.title}</h4>
            <p>{props.text}</p>
            <hr/>
            <p className="mb-0">And here will be date</p>
            <div style={{width:'320px'}} className="d-flex">            
                <Button color="danger" className='m-2' onClick={OnClickHandler}>
                    Read More    
                </Button>             
            </div>
        </div>
    );
};

export default PostsFromApi;