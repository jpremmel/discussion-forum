import React from 'react';
import PropTypes from 'prop-types';
import 'materialize-css/dist/css/materialize.min.css';

function Post(props) {

  function handleLikeClick(){
    props.onNewLike(props.index);
  }
  function handleDislikeClick(){
    props.onNewDislike(props.index);
  }
  var btnStyle = {
    backgroundColor: 'white',
    color: 'black',
    marginLeft: '5px',
    marginRight: '5px',
    marginTop: '10px',
    marginBottom: '10px'
  };
  return (
    <div>
      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{props.content}</span>
              <p>Likes: {props.likes} </p>
              <p>Dislikes: {props.dislikes} </p>
              <p>Posted: {props.formattedWaitTime} ago</p>
              <p>
                <button style={btnStyle} className="btn-small waves-effect waves-light" onClick={handleLikeClick}><i className="material-icons left">thumb_up</i>Like</button>
                <button style={btnStyle} className="btn-small waves-effect waves-light" onClick={handleDislikeClick}><i className="material-icons left">thumb_down</i>Dislike</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Post.propTypes = {
  content: PropTypes.string.isRequired,
  likes: PropTypes.number,
  dislikes: PropTypes.number,
  onNewLike: PropTypes.func,
  onNewDislike: PropTypes.func,
  index: PropTypes.number,
  formattedWaitTime: PropTypes.string.isRequired
};

export default Post;