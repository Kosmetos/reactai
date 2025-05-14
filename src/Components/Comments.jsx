import { useState, useEffect } from "react"

const Comments = () => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setUsers(result);
          } catch (error) {
            setError(error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);

    return (
        <section>
                {loading && <p>Loading</p>}
                {!loading && <ul>{users.map(item => <li key={users.id}>{users.name}</li>)}</ul>}
        </section>
    )
}

export default Comments;