import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import swal from "sweetalert";
// import axios from "axios";

let Edit_Blog = (props) => {
  let navigate = useNavigate();

  const blog_id = useParams();
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const [authorName, setAuthorName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const getData = async (id) => {
    setError("");

    try {
      // console.log(blog_id)
      // alert("value of id : " + id);
      const data1 = await fetch(
        `http://127.0.0.1:3000/blogs/search_blog?id=${id}`
      );
      if (!data1.ok) {
        throw new Error("Sorry something went wrong");
      }
      const jsonData = await data1.json();
      setData(jsonData);
      // console.log(jsonData);

      setAuthorName(jsonData.author_name);
      setContent(jsonData.content);
      setTitle(jsonData.title);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    // getData();
    // let id = Object.values(blog_id.id).pop();
    let id = blog_id.id;
    //   alert(id);

    getData(id);
  }, []);

  let editBlog = () => {
    // alert(authorName)
    let id = blog_id;
    // console.log(id.id)

    let author_name = document.getElementById("author").value;
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;

    if (authorName.length != 0) {
      if (title.length != 0) {
        if (content.length != 0) {
          // console.log(title);

          axios
            .put(`http://127.0.0.1:3000/blogs/update_blog/${id.id}`, {
              author_name: author_name,
              title: title,
              content: content,
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });

          // alert("Your blog is edited successfully.")
          // navigate("/blog")

          // if(swal("Good job!", "Your Blog Edited Success Fully", "success")){
          //   navigate('/blog');
          // }

          swal("Good job!", "Your Blog Edited Success Fully", "success").then(
            (resp) => {
              console.log("working fine");
            }
          );
        } else {
          // alert("content can't be empty.");
          swal("Oops!", "Content can't be empty", "warning");
        }
      } else {
        // alert("title of your blog can't be empty.");
        swal("Oops!", "Title of your blog can't be empty.", "warning");
      }
    } else {
      // alert("author name is empty..");
      swal("Oops!", "Author name is empty...", "warning");
    }

    navigate("/blog");
  };

  return (
    <>
      {/* <div class="alert alert-success" role="alert">
  This is a success alert—check it out!
</div> */}

      <section id="contact">
        <div className="contact-box">
          <div className="contact-links">
            <h2>Create Blog</h2>
            <div className="links">
              <div className="link">
                <a>
                  <img
                    src="https://i.postimg.cc/m2mg2Hjm/linkedin.png"
                    alt="linkedin"
                  />
                </a>
              </div>
              <div className="link">
                <a>
                  <img
                    src="https://i.postimg.cc/YCV2QBJg/github.png"
                    alt="github"
                  />
                </a>
              </div>
              <div className="link">
                <a>
                  <img
                    src="https://i.postimg.cc/W4Znvrry/codepen.png"
                    alt="codepen"
                  />
                </a>
              </div>
              <div className="link">
                <a>
                  <img
                    src="https://i.postimg.cc/NjLfyjPB/email.png"
                    alt="email"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <form>
              <div className="form-item">
                <input
                  type="text"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  id="author"
                  name="user_name"
                  required
                />
                <label>Author Name :</label>
              </div>
              <div className="form-item">
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  name="user_email"
                  required
                />
                <label>Title :</label>
              </div>
              <div className="form-item">
                <textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  name="message"
                  rows={6}
                  required
                ></textarea>
                <label>Content :</label>
              </div>
              {/* <button className="submit-btn" >Send</button> */}
              <input
                className="submit-btn"
                type="submit"
                onClick={() => editBlog()}
                value="Update Blog"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Edit_Blog;
