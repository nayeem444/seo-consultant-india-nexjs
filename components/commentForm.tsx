import React from "react";
import { useState } from "react";


export default function commentForm({postId}){

    const [submitStatus, setSubmitStatus] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');
    const [alertColor, setAlertColor] = useState('');
  
    const handleSubmit = async function(event) {
        event.preventDefault();

        setSubmitStatus(true);
        setResponseMessage('Your commenting is being submitted...');
        setAlertColor('bg-yellow-500');

        let data = {
            author: event.target.author.value,
            authorEmail: event.target.authorEmail.value,
            content: event.target.content.value.replace(/\n/g, "\\n"),
            postId: event.target.postId.value,
        };

        const jsonData = JSON.stringify(data);

        const response = await fetch('/api/comments', {
            method: 'POST',
            body: jsonData,
        });

        const result = await response.json();

        console.log(result);

        setSubmitStatus(true);
        setResponseMessage(result.message);

        if(response.ok) {
            setAlertColor('bg-green-500');
        }
        else {
            setAlertColor('bg-red-500');
        }

    }


    


return(
  
    <div className="border border-gray-300 p-4 rounded-lg max-w-xl mx-auto mt-40">
    <h2 className="text-lg font-medium mb-2">Leave a comment</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
          type="text" id="author" name="author" />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
          type="email" id="authorEmail" name="authorEmail" />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="comment">
          Comment
        </label>
        <textarea
          rows={4}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
          name="content" id="content" />
      </div>
      <input type="hidden" name="postId" id="postId" value={postId} />

      <div className="flex justify-end">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit">
          Post Comment 
        </button>
      </div>
    </form>
</div>
   
)

}