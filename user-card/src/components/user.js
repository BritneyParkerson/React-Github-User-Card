import React from "react";
import styled from "styled-components";

const UserInfo = styled.div`
background: linear-gradient(to top, #0ba360 0%, #3cba92 100%);
 .user-section{
    display: flex;
    justify-content: space-evenly;
    margin: auto 15%;
    border: 3px outset #3cba92;
    .user-info {
       
        h1{
            margin: 2% 20% .5% 2%;
            color: white;
            font-size: 2em;
          }
          p {
              margin: .5% 7% 2% 2%;
              color: white;
              font-size: 1.5em;
          }
    }

    }
`

const UserHeader = styled.div `
display: flex;
justify-content: center;
`

const PageImg = styled.img `
width: 200px;
height: 200px;
`
const UserImg = styled.img `
width: 150px;
height: 150px;
`

function UserPage({ page }) {
    return (
        <UserInfo name={page.name}>
            <UserHeader>
             <PageImg src="https://cdn3.iconfinder.com/data/icons/social-media-and-logos-shield/32/social_media_logo_github-512.png"/>
             
            </UserHeader>
         <div className="user-section">   
        <UserImg src="https://avatars3.githubusercontent.com/u/57121314?s=460&u=40516072562c04793938e17857617d2502d70594&v=4"/>
            
        <div className="user-info">
            <h1>{page.name}</h1>
            <p>{page.bio}</p>
        </div> </div>
        </UserInfo>
    )
}
export default UserPage