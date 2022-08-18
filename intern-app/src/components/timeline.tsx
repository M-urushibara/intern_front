import {useState,useEffect} from 'react'
import { ListItem } from './ListItem'
import axios from 'axios'


type Post = {
  "article_id": number,
  "main_image": string;
};

export const Timeline = () =>{
  const [posts,setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get<Post[]>("./card.json").then((res) => {
      setPosts(res.data);
    })
  },[]);

  return(
    <div>
      {posts.map(post => (
        <ListItem article_id={post.article_id} main_image={post.main_image}/>
      ))}
    </div>
  )
}