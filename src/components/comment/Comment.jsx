
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './comment.css'


function Comment(props) {
    return (
        <>
            <section className="content-item" id="comments">
                <div className='container'>
                    <div className='row'>
                        <div className='col sm-8'>
                            <form className='form'>
                                <div className='row'>
                                    <div className='col'>
                                        <h3 className="float-none">New Comment</h3>
                                    </div>
                                    <div className='col'>
                                        <button type="submit" className="btn btn-primary float-end">Submit</button>
                                    </div>
                                </div>
                                <div className='container-fluid'>
                                    <div className='row'>
                                        <div className="col-md-2 hidden-xs">
                                            <img style={{ maxWidth: 100 }} className="media-object" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                                        </div>
                                        <div className="col-md-10 form-group">
                                            <textarea className="form-control" id="message" placeholder="Your message" required></textarea>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <h3>4 Comments</h3>


                            {/* <!-- COMMENT 2 - START --> */}
                            <div className="d-flex media">
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
                            </div>
                            {/* <!-- COMMENT 2 - END --> */}

                            {/* <!-- COMMENT 3 - START --> */}
                            <div className="d-flex media">
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
                            </div>
                            {/* <!-- COMMENT 3 - END --> */}

                            {/* <!-- COMMENT 4 - START --> */}
                            <div className="d-flex media">
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
                            </div>
                            {/* <!-- COMMENT 4 - END --> */}

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Comment