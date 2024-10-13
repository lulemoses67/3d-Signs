'use client'
import { Link } from "react-router-dom";
// import { get, ref} from 'firebase/database';
// import { useState, useEffect } from "react";
// import  db from '../firebaseConfig';


const NotFound = () => {
    // const [posts, setposts] = useState([]);

    // useEffect(() => {
    //     const usersRef = ref(db, 'blogs');
    //     get(usersRef).then((snapshot) => {
    //         if(snapshot.exists()){
    //             const userArray = Object.entries(snapshot.val()).map(([id, data]) => ({
    //                 id,
    //                 ...data,
    //             }));
    //             setposts(userArray);
    //             console.log(posts);
    //         } else {
    //             console.log("no data avialable");
    //         }
    //     }).catch((error) => {
    //         console.error();
    //     })
    
    //    }, []);
    return ( 
        <section className="hero d-flex text-center reveal active fade-in">
            <div className="container">
                <p className="title text-detail">SORRY THAT PAGE NOT FOUND</p>
                <div className="btn-group">
                    <Link to="/" className="btn-primary">Go Back Home</Link>
                </div>
            </div>
        </section>
     );
}
 
export default NotFound;

