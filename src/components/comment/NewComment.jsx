import React from 'react'
import './comment.css'

function NewComment(props) {
    return (
        <form>
            <h3 class="pull-left">New Comment</h3>
            <button type="submit" class="btn btn-normal pull-right">Submit</button>
            <fieldset>
                <div class="row">
                    <div class="col-sm-3 col-lg-2 hidden-xs">
                        <img class="img-responsive" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                    </div>
                    <div class="form-group col-xs-12 col-sm-9 col-lg-10">
                        <textarea class="form-control" id="message" placeholder="Your message" required=""></textarea>
                    </div>
                </div>
            </fieldset>
        </form>
    )
}


export default NewComment