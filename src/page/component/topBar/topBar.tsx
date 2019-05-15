import React, { useEffect, useState } from 'react'

import './topBar.scss'

import $ from 'jquery'

export const TopBar = () => {
    const [menu, setMenu] = useState(false)
    useEffect ( ()=> {
        $('html').click( (e)=>{
            if(!$(e.target).hasClass('downIcon') && !$(e.target).hasClass('icon') &&!$(e.target).hasClass('text') &&!$(e.target).hasClass('btnbtn') && !$(e.target).hasClass('langugeMenu') && !$(e.target).hasClass('Eng') && !$(e.target).hasClass('Kor')) {
                setMenu(false)
            }
        })  
    })
    function globalMenu () {
        setMenu(!menu)
    }
    const menuDisplay =  menu ? {} : {display : 'none'}
    return (
       <div className = "topBar">
            <a href = '#divpage1'><div className = "logo"></div></a>
            <ul>
                <a href = "#page2"><li>게임</li></a>
                <a href = "#page3"><li>팀 소개</li></a>
                <a href = "#page4"><li>뉴스</li></a>
                <a href = "#page5"><li>컨택</li></a>
                <a href = "#page6"><li>약관</li></a>
                <li className = "btnbtn" onClick = { globalMenu }>
                    <div className = "langugeIcon">
                        <div className = "icon"></div>
                        <p className = "text">KR</p>
                        <div className = "downIcon"></div>
                    </div>
                </li>
            </ul>
            <div className = "langugeMenu" style = {menuDisplay}>
                <div className = "Eng">English</div>
                <div className = "Kor">한국어</div>
            </div>
       </div>
    )
}