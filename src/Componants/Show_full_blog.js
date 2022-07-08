import Navbar from "./Navbar";
import Nav from "./Nav";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

let Show_full_blog = () => {
  const blog_id = useParams();


  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const getData = async () => {
    setError("");

    try {
        console.log(blog_id)
      const data = await fetch(`http://127.0.0.1:3000/blogs/search_blog?id=${blog_id}`);
      if (!data.ok) {
        throw new Error("Sorry something went wrong");
      }
      const jsonData = await data.json();
      setData(jsonData);
    //   console.log(data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    // getData();
    alert(blog_id)
  }, []);

  return (
    <>

      <div className="" id="showBlogSection">
        <div className="mt-5" id="mainBlogSection">
          <h1 className="mb-4">Title of Blog </h1>
          <div className="container">
            <img
              src="https://blog.logrocket.com/wp-content/uploads/2022/06/build-task-tracker-with-solidjs-typescript-nocdn.png"
              alt=""
            />
          </div>

          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            molestiae quibusdam. Optio esse quod rem aspernatur voluptatem
            facilis recusandae voluptas nostrum quasi aliquid dolorem, ad soluta
            modi laboriosam praesentium deserunt?
          </p>
        </div>
        

      </div>

      
    </>
  );
};

export default Show_full_blog;
