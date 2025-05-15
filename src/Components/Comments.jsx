import "./Comment.css"
import Avatar from "../images/avatar.jpeg"
import Avatar2 from "../images/avatar2.jpg"
import Avatar3 from "../images/avatar3.jpg"
import Avatar4 from "../images/avatar4.jpg"
import { useState, useEffect } from "react"

const Comments = () => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [users, setUsers] = useState([])
    const [comments, setComments] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const responseUser = await fetch("https://jsonplaceholder.typicode.com/users");
            const responseComment = await fetch("https://jsonplaceholder.typicode.com/comments")
            if ((!responseUser.ok) && (!responseComment.ok)) {
              throw new Error('Network response was not ok');
            }
            const resultUser = await responseUser.json();
            const resultComment = await responseComment.json();
            setUsers(resultUser);
            setComments(resultComment)
          } 
          catch (error) {
            setError(error);
          } 
          finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);

    return (

        <section className="suporter-section">
          <h1>Our fellow supporters</h1>
          <div className="card-galery">
          <div className="card">
            <div className="card-top">
              <img className="avatar" src={Avatar} alt="" />
              <span className="name">Michael Person</span>
            </div>
            <span className="comment">Lorem ipsum dolor sit amet <span className="highlighed"> consectetur</span> adipisicing elit. Adipisci eum cum aliquam consectetur a eius quasi aperiam mollitia quo.</span>
          </div>
          <div className="card">
            <div className="card-top">
              <img className="avatar" src={Avatar2} alt="" />
              <span className="name">Ryan Bladerunner</span>
            </div>
            <span className="comment">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum eveniet maiores architecto, <span className="highlighed">aut explicabo</span> provident!</span>
          </div>
          <div className="card">
            <div className="card-top">
              <img className="avatar" src={Avatar3} alt="" />
              <span className="name">Just Ken</span>
            </div>
            <span className="comment">Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className="highlighed">Distinctio</span> excepturi labore, incidunt perspiciatis itaque atque enim eum quae, quos placeat repudiandae, quam eveniet assumenda ratione.</span>
          </div>
          <div className="card">
            <div className="card-top">
              <img className="avatar" src={Avatar4} alt="" />
              <span className="name">Ryan Gosling</span>
            </div>
            <span className="comment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque est rerum voluptate maxime.</span>
          </div>
          </div>  
        </section>
    )
}

export default Comments;