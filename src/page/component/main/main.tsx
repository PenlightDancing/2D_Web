import React, { Component, useState, useEffect} from 'react'

import $ from "jquery";

import { TopBar } from '../topBar/topBar'
import { Link } from 'react-router-dom'

import './main.scss'
export const Main = () => {
    const [page = 1, setPage] = useState()
    useEffect (()=>{

    })
    return (
        <div className = "mainPage">
            <TopBar/>
            <div id = "divpage1">
                <Page1/>
            </div>
            <div id = "divpage2">
                <div id = "page2"></div>
                <Page2/>
            </div>
            <div id = "divpage3">
                <div id = "page3"></div>
                <Page3/>
            </div>
            <div id = "divpage4">
                <div id = "page4"></div>
                <Page4/>
            </div>
            <div id = "divpage5">
                <div id = "page5"></div>
                <Page5/>
            </div>
            <div id = "divpage6">
                <div id = "page6"></div>
                yackGwan
            </div>
        </div>
    )
}

const Page1 = () => {
    return (
        <div className = "p1">
            <div className = "logosize">
                <div className = "logo"></div>
            </div>
            <div className = "moreon">
                <div className = "more">
                    <div className = "line1"></div>
                    <div className = "text">More On</div>
                    <div className = "line2"></div>
                </div>
                <div className = "icons">
                    <div className = "inicons steam"></div>
                    <div className = "backwhite"></div>
                    <div className = "inicons youtube"></div>
                    <a href = "https://www.facebook.com/PenlightDancing/"><div className = "inicons facebook"></div></a>
                </div>
            </div>
        </div>
    )
}

const Page2 = () => {
    return (
        <div className = "p2">
            <p className = "title">GAME</p>
            <hr className = "titleLine"/>
            <p className = "introduce">Penlight Dancing이 어떤 게임인지 만나보세요.</p>
            <div className = "sectionZone">
                <div className = "section s1">
                    <div className = "img"></div>
                    <p className = "title">VR 세계에서의 새로운 경험</p>
                    <p className = "subTitle">여러분은 Penlight Dancing의<br/>VR 세계 안에서 마음껏 몸을 움직이며<br/>플레이 할 수 있습니다.</p>
                </div>
                <div className = "section s2">
                    <div className = "img"></div>
                    <p className = "title">펜라이트를 활용한 액션</p>
                    <p className = "subTitle">펜라이트를 이용해 노트를 베고, 찌르고,<br/>팔을 크게 휘두르세요.<br/>박자가 정확할수록 높은 점수를 얻을겁니다.</p>
                </div>
                <div className = "section s3">
                    <div className = "img"></div>
                    <p className = "title">전세계 사람들과 플레이</p>
                    <p className = "subTitle">혼자서만 플레이하는 것이 아닌,<br/>전세계 사람들과 함께<br/>Penlight Dancing을 플레이하세요!</p>
                </div>
            </div>
        </div>
    )
}
const Page3 = () => {
    return (
        <div className = "p3">
            <p className = "title">TEAM. SeChiGoGi</p>
            <hr className = "titleLine"/>
            <p className = "introduce">Penlight Dancing를 제작한 팀원입니다.</p>
            <div className = "teamMate">
                <div className = "n1 line1">
                    <p className = "name">박태욱</p>
                    <div className = "profile"></div>
                    <p className = "job"></p>
                    <p className = "ability"></p>
                </div>
                <div className = "n2 line2">
                    <p className = "name">한규언</p>
                    <div className = "profile"></div>
                    <p className = "job"></p>
                    <p className = "ability"></p>
                </div>
                <div className = "n3 line1">
                    <p className = "name">유승지</p>
                    <div className = "profile"></div>
                    <p className = "job"></p>
                    <p className = "ability"></p>
                </div>
                <div className = "n4 line2">
                    <p className = "name">정창원</p>
                    <div className = "profile"></div>
                    <p className = "job"></p>
                    <p className = "ability"></p>
                </div>
                <div className = "n5 line1">
                    <p className = "name">이호준</p>
                    <div className = "profile"></div>
                    <p className = "job"></p>
                    <p className = "ability"></p>
                </div>
            </div>
        </div>
    )
}
const Page4 = () => {
    return (
        <div className = "p4">
            <p className = "title">NEWS</p>
            <hr className = "titleLine"/>
            <p className = "introduce">누구보다 빠르게 Penlight Dancing의 새소식을 접해보세요.</p>
            <div className = "content">
                <div className = "newsList">
                    <hr className = "ulLine"/>
                    <ul className = "list">
                        <li>[공지] 뉴스 페이지!</li>
                        <li>[공지] 뉴스 페이지!</li>
                        <li>[공지] 뉴스 페이지!</li>
                        <li>[공지] 뉴스 페이지!</li>
                        <li>[공지] 뉴스 페이지!</li>
                        <li>[공지] 뉴스 페이지!</li>
                        <li>[공지] 뉴스 페이지!</li>
                        <li>[공지] 뉴스 페이지!</li>
                        <li>[공지] 뉴스 페이지!</li>
                        <li>[공지] 뉴스 페이지!</li>
                        <li>[공지] 뉴스 페이지!</li>
                        <li>[공지] 뉴스 페이지!</li>
                        <li>[공지] 뉴스 페이지!</li>
                        <li>[공지] 뉴스 페이지!</li>
                        <li>[공지] 뉴스 페이지!</li>
                        <li>[공지] 뉴스 페이지!</li>
                        <li>[공지] 뉴스 페이지!</li>
                        <li>[공지] 뉴스 페이지!</li>
                        <li>[공지] 뉴스 페이다지!</li>
                        <li>[공지] 뉴스 페이지!</li>
                        <li>[공지] 뉴스 페이지!</li>
                        <li>[공지] 뉴스 페이지!</li>
                        <li>[공지] 뉴스 페이지!</li>
                        <li>[공지] 뉴스 페이지!</li>
                        <li>[공지] 뉴스 페이지!</li>
                        <li>[공지] 뉴스 페이지!</li>
                        <li>[공지] 뉴스 페이지!</li>
                        <li>[공지] 뉴스 페이지!</li>
                        <div className = "dump"></div>
                    </ul>
                    <hr className = "ulLine"/>
                </div>
                <div className = "video">
                    <iframe className = "videoYoutube" src="https://www.youtube.com/embed/KHhHG1mfeZM"></iframe>
                </div>
            </div>
        
        </div>
    )
}
const Page5 = () => {
    return (
        <div className = "p5">
            <p className = "title">CONTACT</p>
            <hr className = "titleLine"/>
            <p className = "introduce">Penlight Dancing</p>
        </div>
    )
}
const Page6 = () => {
    return (
        <div className = "p6">
        </div>
    )
}