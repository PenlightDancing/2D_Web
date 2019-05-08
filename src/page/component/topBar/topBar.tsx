import React, { useEffect, useState } from 'react'

import './topBar.scss'

export const TopBar = () => {
    return (
       <div className = "topBar">
           <a href = '#divpage1'><div className = "logo"></div></a>
           <ul>
               <a href = "#page2"><li>게임</li></a>
               <a href = "#page3"><li>팀 소개</li></a>
               <a href = "#page4"><li>뉴스</li></a>
               <a href = "#page5"><li>컨택</li></a>
               <a href = "#page6"><li>약관</li></a>
               <li>
                    <div className = "langugeIcon">
                        <div className = "icon"></div>
                        <p className = "text">KR</p>
                    </div>
                </li>
           </ul>
       </div>
    )
}