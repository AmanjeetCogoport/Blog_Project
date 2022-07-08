import { useEffect } from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Show_full_blog from "./Show_full_blog";
import './../App.css'

let Blog_card = (props) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  // const navigate = Navigate();

  const getData = async () => {
    setError("");

    try {
      const data = await fetch("http://127.0.0.1:3000/blogs");
      if (!data.ok) {
        throw new Error("Sorry something went wrong");
      }
      const jsonData = await data.json();
      setData(jsonData);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  let goToBlogPage = (id) =>{
    // console.log(id);
    
    // navigate('/blog/' + id)
  }


  return (
    <>


           { data.map((d, index) => {
            
         return(

          
          <Link to={`/blog/{}`}>
            <div className="card mb-4" id={d.id}>
            <img
              className="card-img-top"
              src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{d.title}</h5>
              
              <p className="card-text">{d.content.slice(0, 80)} <Link id="linkId" to={`/blog/${1}`}>  {'  '} more...</Link></p>

              <Link to={`/blog/${1}`} className="btn mx-2 btn-success blog_card_id">
                Read
              </Link>

              <Link to={`/blog/${1}`} className="btn mx-2 btn-danger blog_card_id">
                Delete
              </Link>

              <Link to={`/blog/${1}`} className="btn btn-primary blog_card_id">
                Update
              </Link>
            </div>
          </div>
          
          </Link>

          
        )
      })
    }
    </>
  );
};

export default Blog_card;
