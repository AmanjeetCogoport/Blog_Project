import { useEffect } from "react";
import { useState } from "react";
import { Link} from "react-router-dom";
import Show_full_blog from "./Show_full_blog";
import './../App.css'
import {Routes, Route, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Main from "./Main";
import swal from 'sweetalert';



let Blog_card = (props) => {

  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [del, setDel] = useState([]);

  // const navigate = Navigate();
  const navigate = useNavigate();



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

  let readBlog = (id) =>{
    // alert("button_clicked : "+id)
    // let mainid = Object.values(id).pop();
    // navigate(`/blog/${mainid}`);
    
    let data = JSON.stringify(id);
    let d1 = data.split('-');
    let finalData = Object.values(d1).pop();
    let lastData = finalData.slice(0,-1);
    
    // alert(lastData);
    navigate(`/blog/${lastData}`);

  }

  let readMoreBlog = (id) =>{
    let data = JSON.stringify(id);
    let d1 = data.split('-');
    let finalData = Object.values(d1).pop();
    let lastData = finalData.slice(0,-1);
    
    // alert(lastData);
    navigate(`/blog/${lastData}`);
  }

  let deleteBlog = (id) => {
    let dat = JSON.stringify(id);
    let d1 = dat.split('-');
    let finalData = Object.values(d1).pop();
    let lastData = finalData.slice(0,-1);

    let mainid = lastData;
    // alert(mainid)
    let updatedData = data.filter( (id) => id !== mainid);

    if(window.confirm("Are you sure?? You want to delete this blog.")){
      axios.delete(`http://127.0.0.1:3000/blogs/delete-blog/${mainid}` ).then(
     (data)  => getData()
      ).then( (resp) => {
        // alert("your blog deleted Successfully..")
      })
    }

    swal("Good Job!", "your blog deleted Successfully..", "success");
    console.log(data);
  
  }

  let editBlog = (id) => {
    let dat = JSON.stringify(id);
    let d1 = dat.split('-');
    let finalData = Object.values(d1).pop();
    let lastData = finalData.slice(0,-1);

    // let mainid = lastData;
    // alert(mainid);

    // work needed
    navigate(`/edit-blog/${lastData}`)

  }


  return (
    <>

 <Main />

    <div className="container mt-5 border-bottom pb-3">
        <h2 className="mb-3"><span className="border-bottom border-3 pb-1 border-dark">Featured Blog</span></h2>
        </div>

        <div className="card-columns d-flex flex-wrap justify-content-around  container mt-4">
                {/* <Blog_card /> */}

                { data.map((d, index) => {
            
            return(
   
             
               <div className="card mb-4" id={d.id}>
               <img
                 className="card-img-top"
                 src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=600"
                 alt="Card image cap"
               />
               <div className="card-body">
                 <h5 className="card-title">{d.title}</h5>
                 
                 <p className="card-text" itemType="link" onClick={(e) => readMoreBlog(e.currentTarget.id)}  id={`more-btn-${d.id}`}>{d.content}   {'  '} <span style={{ 'color': "blue", 'backgroundColor': "transparent" }}>more...</span></p>
   
                 <button onClick={(e) => readBlog(e.currentTarget.id)} id={`read-btn-${d.id}`} className="btn mx-2 btn-success blog_card_id">
                   Read
                 </button>
   
                 <button id={`delete-btn-${d.id}`} onClick={(e) => deleteBlog(e.currentTarget.id)} className="btn mx-2 btn-danger blog_card_id">
                   Delete
                 </button>

                 <button id={`edit-btn-${d.id}`} onClick={(e) => editBlog(e.currentTarget.id)} className="btn mx-2 btn-primary blog_card_id">
                   Edit
                 </button>
   
                 {/* <Link to={`/blog/${1}`} className="btn btn-primary blog_card_id">
                   Update
                 </Link> */}
               </div>
             </div>
             
   
             
           )
         })
       }



        </div>


           
    </>
  );
};

export default Blog_card;
