import Blog_card from "./Blog_card";
import Nav from "./Nav";

let Featured_card = (props) => {
  return (
    <>
        
        <div className="container mt-5 border-bottom pb-3">
        <h2 className="mb-3"><span className="border-bottom border-3 pb-1 border-dark">Featured Blog</span></h2>
        </div>

        <div className="card-columns d-flex flex-wrap justify-content-around  container mt-4">
                <Blog_card />
        </div>
    </>
  );
};

export default Featured_card;
