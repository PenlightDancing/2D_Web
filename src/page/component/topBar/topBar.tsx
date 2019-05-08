import React, { useEffect, useState } from 'react'

import './topBar.scss'

export const TopBar = () => {
    return (
       <div className = "topBar">
           <a href = '#page1'><div className = "logo"></div></a>
           <ul>
               <a href = "#page2"><li>게임</li></a>
               <a href = "#page3"><li>팀 소개</li></a>
               <a href = "#page4"><li>뉴스</li></a>
               <a href = "#page5"><li>컨택</li></a>
               <a href = "#page6"><li>약관</li></a>
               <li><div className = "langugeIcon"></div>KR</li>
           </ul>
       </div>
    )
}