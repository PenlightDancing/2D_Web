import React, { useEffect, useState } from 'react'

import './topBar.scss'

import $ from 'jquery'

export const TopBar = () => {
    const [menu = 'none', setMenu] = useState()
    useEffect ( ()=> {
        $('html').click((e)=>{
            if(!$(e.target).hasClass('langugeMenu') && !$(e.target).hasClass('Eng') && !$(e.target).hasClass('Kor')) {
                setMenu('none')
            }
        })
    })
    return (
       <div className = "topBar">
            <a href = '#divpage1'><div className = "logo"></div></a>
            <ul>
                <a href = "#page2"><li>게임</li></a>
                <a href = "#page3"><li>팀 소개</li></a>
                <a href = "#page4"><li>뉴스</li></a>
                <a href = "#page5"><li>컨택</li></a>
                <a href = "#page6"><li>약관</li></a>
                <li onClick = {()=>{
                    if(menu === 'block') setMenu('none');
                    else setMenu('block');
                }}>
                    <div className = "langugeIcon">
                        <div className = "icon"></div>
                        <p className = "text">KR</p>
                        <div className = "downIcon"></div>
                    </div>
                </li>
            </ul>
            <div className = "langugeMenu" style = {{display: menu}}>
                <div className = "Eng">English</div>
                <div className = "Kor">한국어</div>
            </div>
       </div>
    )
}