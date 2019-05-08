import React, { useEffect, useState } from 'react'

import './topBar.scss'

export const TopBar = () => {
    return (
       <div className = "topBar">
           <a><div className = "logo"></div></a>
           <ul>
               <a><li>게임</li></a>
               <a><li>팀 소개</li></a>
               <a><li>뉴스</li></a>
               <a><li>컨택</li></a>
               <a><li>약관</li></a>
               <li><div className = "langugeIcon"></div>KR</li>
           </ul>
       </div>
    )
}