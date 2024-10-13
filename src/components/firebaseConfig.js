  import { initializeApp } from "firebase/app";
  import { getDatabase } from "firebase/database";


  const firebaseConfig = {
    apiKey: "AIzaSyDrpiNkGI2rqdTPX-JbuV5gmBjwkZHT8ts",
    authDomain: "hultech-8d7b5.firebaseapp.com",
    databaseURL: "https://hultech-8d7b5-default-rtdb.firebaseio.com",
    projectId: "hultech-8d7b5",
    storageBucket: "hultech-8d7b5.appspot.com",
    messagingSenderId: "833918736754",
    appId: "1:833918736754:web:ff7cafd813c1446ed165eb",
    measurementId: "G-W6YSXPHYMS"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  export default db;
'use client'
import { connect } from "react-redux";
import BlogList from "../partials/BlogList";
import { get, ref} from 'firebase/database';
import { useState, useEffect } from "react";
import  db from '../firebaseConfig';

const TechBlogs = (props) => {
    const [posts, setposts] = useState([]);

    useEffect(() => {
        const usersRef = ref(db, 'blogs');
        get(usersRef).then((snapshot) => {
            if(snapshot.exists()){
                const userArray = Object.entries(snapshot.val()).map(([id, data]) => ({
                    id,
                    ...data,
                }));
                setposts(userArray);
                console.log(posts);
            } else {
                console.log("no data avialable");
            }
        }).catch((error) => {
            console.error();
        })
    
       }, []);
       
    return ( 
        <>
            <section className="reveal active fade-in">
                <div className="container">
                    <h3 className="section-title">TechBlogs</h3>
                    <BlogList />
                </div>
            </section>
        </>
     );
}
 

const mapStateToProps = (state) => {
    return {
      items: state.data.perfumes
    }
}
export default connect(mapStateToProps)(TechBlogs);