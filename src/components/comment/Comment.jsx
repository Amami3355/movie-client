
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import CommentService from '../../services/CommentService'
import './comment.css'


function Comment(props) {
    const [comments, setComments] = useState([])

    function handleSubmit(e) {
        const text = document.getElementById('text').value
        alert(props.movieId + " " + text)

        CommentService.createComment(props.movieId, text);
        CommentService.getMovieComments(props.movieId)
            .then(res => setComments(res))
            .catch(error => setComments([]))
        document.getElementById('text').value = "";
    }

    useEffect(() => {
        console.log('wwwww')
        CommentService.getMovieComments(props.movieId)
            .then(res => setComments(res))
            .catch(error => setComments([]))
    }, [])

    return (
        <>
            <section className="content-item" id="comments">
                <div className='container'>
                    <div className='row'>
                        <div className='col sm-8'>
                            <form className='form'>
                                <h3 className="float-none pl-5">New Comment</h3>
                                <div className='container-fluid'>
                                    <div className='row'>
                                        <div className="col-md-2 hidden-xs">
                                            <img style={{ maxWidth: 100 }} className="media-object" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                                        </div>
                                        <div class="container col-md-10 form-group">
                                            <textarea class="form-control" id="text" name="text" placeholder="Type in your message" rows="5"></textarea>
                                            <h6 class="float-end" id="count_message"></h6>
                                            <button class="btn btn-info float-end" type="button"
                                                onClick={handleSubmit}>Post New Message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <h3> Comments</h3>
                            {
                                comments.reverse().map(comment => (
                                    <div className="d-flex media">
                                        <a className="float-none" href="#"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" /></a>
                                        <div className="flex-grow-1 ms-3">
                                            <h4 className="media-heading">John Doe</h4>
                                            <p>{comment.text}</p>
                                            <ul className="d-inline list-unstyled list-inline media-detail float-none">
                                                <li className='list-inline-item'>27/02/2014</li>
                                                <li className='list-inline-item'>13</li>
                                            </ul>
                                            <ul className="d-inline list-unstyled list-inline media-detail float-end">
                                                <li className='list-inline-item'><a href="">Like</a></li>
                                                <li className='list-inline-item'><a href="">Reply</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                ))
                            }


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Comment


{/* <!-- COMMENT 2 - START --> */ }
{/* <div className="d-flex media">
                                <a className="float-none" href="#"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" /></a>
                                <div className="flex-grow-1 ms-3">
                                    <h4 className="media-heading">John Doe</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <ul className="d-inline list-unstyled list-inline media-detail float-none">
                                        <li className='list-inline-item'>27/02/2014</li>
                                        <li className='list-inline-item'>13</li>
                                    </ul>
                                    <ul className="d-inline list-unstyled list-inline media-detail float-end">
                                        <li className='list-inline-item'><a href="">Like</a></li>
                                        <li className='list-inline-item'><a href="">Reply</a></li>
                                    </ul>
                                </div>
                            </div> */}
{/* <!-- COMMENT 2 - END --> */ }

{/* <!-- COMMENT 3 - START --> */ }
{/* <div className="d-flex media">
                                <a className="float-none" href="#"><img className="media-object" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" /></a>
                                <div className="flex-grow-1 ms-3">
                                    <h4 className="media-heading">John Doe</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <ul className="d-inline list-unstyled list-inline media-detail float-none">
                                        <li className='list-inline-item'>27/02/2014</li>
                                        <li className='list-inline-item'>13</li>
                                    </ul>
                                    <ul className="d-inline list-unstyled list-inline media-detail float-end">
                                        <li className='list-inline-item'><a>Like</a></li>
                                        <li className='list-inline-item'><a>Reply</a></li>
                                    </ul>
                                </div>
                            </div> */}
{/* <!-- COMMENT 3 - END --> */ }

{/* <!-- COMMENT 4 - START --> */ }
{/* <div className="d-flex media">
                                <a className="float-none" href="#"><img className="media-object" src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" /></a>
                                <div className="flex-grow-1 ms-3">
                                    <h4 className="media-heading">John Doe</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <ul className="d-inline list-unstyled list-inline media-detail float-none">
                                        <li className='list-inline-item'>27/02/2014</li>
                                        <li className='list-inline-item'>13</li>
                                    </ul>
                                    <ul className="d-inline list-unstyled list-inline media-detail float-end">
                                        <li className='list-inline-item'><button className='btn' type='button' href="#">Like</button></li>
                                        <li className='list-inline-item'><button className='btn' type='button' href="#">Reply</button></li>
                                    </ul>
                                </div>
                            </div> */}
{/* <!-- COMMENT 4 - END --> */ }