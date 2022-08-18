import React from 'react'


type Post = {
    "article_id": number,
    "main_image": string;
  };

export const ListItem = (props: Post) => {
    const { article_id, main_image }  = props;
    const contentStyle = {
        width: "33%"
    };


    return(
        < p style={contentStyle}>
            {main_image}
        </p>
    );
};