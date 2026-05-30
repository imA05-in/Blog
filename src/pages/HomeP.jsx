import appwriteService from "../appwrite/Config";
import { PostCard } from "../components";
import { useEffect, useState } from "react";
export default function HomeP() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{

    appwriteService
    .listRows()
    .then((post) => setPosts(post.rows))
    .catch((error) => console.log("Homep: ", error));
  },[])

  return <div className="flex flex-col md:flex-row md:justify-center items-center gap-4 py-2 flex-wrap">
    {
        posts.map((post)=>(
            <div key={post.title}>
                <PostCard post={post}/>
            </div>
        ))
    }
  </div>;
}
