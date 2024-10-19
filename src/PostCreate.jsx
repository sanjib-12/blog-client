import { useState } from "react";
import axios from "axios";

//component that handle the functionality of blogs posts.
const PostCreate = () => {
   const [title, setTitle] = useState("");
    
   const [isLoading, setIsLoading] = useState(false);
    
   const onSubmit = async (event) => {
      event.preventDefault();
      console.log('one');


      try {
         setIsLoading(true);
         await axios.post("http://localhost:4000/posts", {
            title,
         });
         setIsLoading(false);
         setTitle("");
         
      } catch (error) {
         console.log(error);
      }
      console.log(two);


   };

   if(isLoading) {
      return "Loading ...."
   }

   return (
      <div>
         <form onSubmit={onSubmit}>
            <div className="form-group">
               <label className="my-2"> Title</label>
               <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-control my-2"
               />
            </div>
            <button className="btn btn-primary my-2"> Submit</button>
         </form>
      </div>
   );
};

export default PostCreate;
