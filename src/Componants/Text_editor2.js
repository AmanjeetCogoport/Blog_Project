import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./../Text_editor.css";

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],
};

let Text_editor2 = (props) => {
  const [value, setValue] = useState("");
//   console.log(value);

  let publishBlog = () =>{
        // alert('publish button working fine')
        // save data to blog.
        console.log(value);
        setValue('');
        

        // document.getElementsByClassName("ql-editor").style ="color:red";
        console.log(value);
  }

  return (
    <>
      <div className="App container mt-5">
        <header className="App-header">Text Editor</header>
        <ReactQuill
          modules={modules}
          theme="snow"
          onChange={setValue}
          placeholder="Content goes here..."
        />
        {/* <div
            className="preview"
            dangerouslySetInnerHTML={createMarkup(convertedContent)}
          ></div> */}
      </div>

      <div className="container mt-3">
        <button type="button" onClick={publishBlog} class="btn btn-success">
          Publish Your Blog
        </button>
      </div>

      <div className="container my-5">
          {value}
      </div>
    </>
  );
};

export default Text_editor2;
