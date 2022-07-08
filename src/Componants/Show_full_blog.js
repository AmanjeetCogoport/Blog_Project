import Navbar from "./Navbar";
import Nav from "./Nav";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import './../App.css'

let Show_full_blog = () => {

  const blog_id = useParams();


  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const getData = async (id) => {
    setError("");

    try {
        // console.log(blog_id)
        // alert("value of id : " + id);
      const data = await fetch(`http://127.0.0.1:3000/blogs/search_blog?id=${id}`);
      if (!data.ok) {
        throw new Error("Sorry something went wrong");
      }
      const jsonData = await data.json();
      setData(jsonData);
      // console.log(jsonData);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    // getData();
      // let id = Object.values(blog_id.id).pop();


      let id = blog_id.id;
      // alert(id);
      getData(id);
      console.log(data);
  }, []);

  return (
    <>

      <div className="" id="showBlogSection">
        <div className="mt-5" id="mainBlogSection">
          <h1 className="mb-4">{data.title}</h1>
          <p className="mb-4">{data.author_name}</p>
          <div className="container">
            <img id="imginFullBlog"
              src="https://blog.logrocket.com/wp-content/uploads/2022/06/build-task-tracker-with-solidjs-typescript-nocdn.png"
              alt=""
            />
          </div>

          <p className="mt-4">
            {data.content}
          </p>
        </div>
        

      </div>

      
    </>
  );
};

export default Show_full_blog;
