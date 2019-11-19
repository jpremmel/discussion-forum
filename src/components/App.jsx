import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
import DiscussionBoard from './DiscussionBoard';
import Header from './Header';
import Moment from 'moment';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPostList: []
    };
    this.handleAddingNewPost = this.handleAddingNewPost.bind(this);
    this.handleLikes = this.handleLikes.bind(this);
    this.handleDislikes = this.handleDislikes.bind(this);
  }

  handleAddingNewPost(newPost){
    var newMasterPostList = this.state.masterPostList.slice();
    newPost.formattedWaitTime = (newPost.timePosted).fromNow(true);
    newMasterPostList.push(newPost);
    this.setState({masterPostList: newMasterPostList});
  }
  handleLikes(i){
    console.log(this.state.masterPostList)
   var copyMList = this.state.masterPostList
   copyMList[i].likes = copyMList[i].likes + 1 
   this.setState({masterPostList: copyMList})
  }
  handleDislikes(i){
    var copyMList = this.state.masterPostList

   copyMList[i].dislikes = copyMList[i].dislikes + 1 
   this.setState({masterPostList: copyMList})
  }

  componentDidMount(){
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updatePostElapsedTime(),
      60000
    );
  }
  updatePostElapsedTime(){
    console.log("check");
    let newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.forEach((post) =>
      post.formattedWaitTime = (post.timePosted).fromNow(true)
    );
    this.setState({masterPostList: newMasterPostList})
  }
  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }


  render() {
    return(
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/discussion' render={()=><DiscussionBoard 
            onNewPostCreation={this.handleAddingNewPost} 
            postList={this.state.masterPostList}
            onNewLike={this.handleLikes}
            onNewDislike={this.handleDislikes}/>} />
        </Switch>
      </div>
    );
  }

}

export default App;