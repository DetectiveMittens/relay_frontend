import '../index.css';
import SocialMessage from '../components/SocialMessage';
import { useState, useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';
import NewPostForm from '../components/NewPostForm';
import NewPostButton from '../components/NewPostButton';




function DMs() {

  //pop-up 'Modal' related stuff
  const [newPostText,setNewPostText] = useState("...");
  const [creatingPost,setcreatingPost] = useState(false);
  const [shouldFetchData, setShouldFetchData] = useState(true);

  //hardcoded data array for element loop of messages
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(()=>{
    if(shouldFetchData){
    console.log('useEffect called');
    fetch('http://localhost:8000/api/posts')
      .then( (response) => {return response.json();}).then ( (data) => {
         console.log(data.all_posts[0]);
         setChatMessages(data.all_posts.reverse());
      });
    }

    setShouldFetchData(false);

  });



  function makePost(post_message){
    setcreatingPost(false);
    console.log(post_message);

    var body_string = JSON.stringify({username : "Namey", message : post_message})

    fetch('http://localhost:8000/api/newpost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body_string
      
    })
    .then(response => {
      if (response.ok) {
        // Handle success
        console.log(response);
        setShouldFetchData(true);
        setChatMessages(chatMessages);

      } else {
        throw new Error('Something went wrong');
      }
    })
    .catch(error => {
      console.error(error);
    });

  }



  useEffect(()=>{
    console.log("creatingPost has changed state");
  },[creatingPost]);

 
  return (
    <div>
      <div className="flex-wrap">

      {!creatingPost ? (<NewPostButton setcreatingPost={setcreatingPost}/>)
                  : (<NewPostForm makePost={makePost}/>)
      }

      {//display all the posts we have loaded into our 'chatMessages' array variable
        
        chatMessages.map( (data) => { return(
            <SocialMessage 
              key={uuidv4()}
              username={data.username} 
              message={data.message} 
              timestamps={data.timestamps} 
              other={data.other} />
          )})
      }

      </div>
    </div>
  );
}

export default DMs;
