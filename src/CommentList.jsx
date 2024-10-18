//this will display list of comments on the Comment.
//It will take postId as a props
//

import { useState, useEffect } from "react";
import axios from "axios";

const CommentList = ({postId}) => {
   const [comments, setComments] = useState({});

   const fetchComments = async () => {
      const res = await axios.get(
         `http://localhost:4001/posts/${postId}/comments`
      );

      setComments(res.data);
   };

   useEffect(() => {
      fetchComments();
   }, []);

   const renderedComments = Object.values(comments).map((comment) => {
      return <li key={comment.id}>{comment.content}</li>;
   });

   return <ul>{renderedComments}</ul>;
};



export default CommentList;
