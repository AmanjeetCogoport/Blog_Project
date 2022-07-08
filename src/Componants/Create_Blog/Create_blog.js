import axios from "axios";


let Create_blog = (props) => {

    let publishBlog = () => {
        let author_name = document.getElementById("author").value;
        let title = document.getElementById("title").value;
        let content = document.getElementById("content").value;


        // let link = `http://127.0.0.1:3000/blogs/create_blog?title=${title}&content={content}&author_name={author_name}`;
        
        console.log(title);
        axios.post('http://127.0.0.1:3000/blogs/create_blog', {
            "author_name": author_name,
            "title": title,
            "content": content
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }
  


    return(
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
          <a><img src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin" /></a>
        </div>
        <div className="link">
          <a><img src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github" /></a>
        </div>
        <div className="link">
          <a><img src="https://i.postimg.cc/W4Znvrry/codepen.png" alt="codepen" /></a>
        </div>
        <div className="link">
          <a><img src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email" /></a>
        </div>
      </div>
    </div>
    <div className="contact-form-wrapper">
      <form>
        <div className="form-item">
          <input type="text" id="author" name="user_name"required />
          <label>Author Name :</label>
        </div>
        <div className="form-item">
          <input id="title" type="text" name="user_email"  required />
          <label>Title :</label>
        </div>
        <div className="form-item">
          <textarea id="content" className="" name="message" rows={6} required></textarea>
          <label>Content :</label>
        </div>
        {/* <button className="submit-btn" >Send</button> */}
        <input className="submit-btn" type="button" onClick={ () => publishBlog()} value="Publish" />  
      </form>
    </div>
  </div>
</section>
        </>
    )
}

export default Create_blog;