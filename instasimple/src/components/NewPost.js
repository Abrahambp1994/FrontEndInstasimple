import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { uploadPostService } from "../services";
import { useModal } from "../context/ModalContext";
import { useNavigate } from "react-router-dom";

export const NewPost = ({ addPost }) => {
    const navigate = useNavigate();


  const { token } = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [,setModal] = useModal();

  const handleForm = async (e) => {
    e.preventDefault();
    setModal(false)

    try {
        const data = new FormData (e.target);
      const post = await uploadPostService({ data, token});
      navigate("/")
      addPost(post);

      e.target.reset();
      setImage(null);
    } catch (error) {
      setError(error.message);
    } 
  };
  return (
    <section className= "sectionForm">
      <h1>Add new post</h1>
      <form className="new-post" onSubmit={handleForm}>

          <input type="text" placeholder="Description" name="text" id="text" required />
          
          <input
            type="file"
            name="image"
            placeholder="Image"
            id="image"
            accept={"image/*"}
            onChange={(e) => setImage(e.target.files[0])}
          />
          {image ? (
            <figure>
              <img
                src={URL.createObjectURL(image)}
                style={{ width: "100px" }}
                alt="Preview"
              />
            </figure>
          ) : null}

        <button>Add post</button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};
