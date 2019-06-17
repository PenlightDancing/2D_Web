import React, { Component, useState, useEffect} from 'react'

import $ from "jquery";

import { TopBar } from '../topBar/topBar'
import { Link } from 'react-router-dom'

import './main.scss'
export const Main = () => {
    function isMobile() {
        var UserAgent = navigator.userAgent;
        if (UserAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null)
        {
            return true;
        }else{
            return false;
        }
    }    
    useEffect (()=>{
        var UserAgent = navigator.userAgent;
        if (isMobile())
        {
            window.location.href = '/mobile';
        }
    })
    const [page = 1, setPage] = useState()
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
                <Page6/>
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
                    <div className = "line1 lineGrad"></div>
                    <div className = "text gradText">More On</div>
                    <div className = "line2 lineGrad"></div>
                </div>
                <div className = "icons">
                    <div className = "inicons steam"></div>
                    <div className = "backwhite"></div>
                    <a href = "https://www.youtube.com/channel/UCCnf0hcshO5v_NYk8IZ9vJw?view_as=subscriber"><div className = "inicons youtube"></div></a>
                    <a href = "https://www.facebook.com/PenlightDancing/"><div className = "inicons facebook"></div></a>
                </div>
            </div>
        </div>
    )
}

const Page2 = () => {
    return (
        <div className = "p2">
            <p className = "title gradText">GAME</p>
            <hr className = "titleLine lineGrad"/>
            <p className = "introduce gradText">Penlight Dancing이 어떤 게임인지 만나보세요.</p>
            <div className = "sectionZone">
                <div className = "section s1">
                    <div className = "img"></div>
                    <div className = "sectionIntro">
                        <p className = "title gradText">VR 세계에서의 새로운 경험</p>
                        <p className = "subTitle gradText">여러분은 Penlight Dancing의<br/>VR 세계 안에서 마음껏 몸을 움직이며<br/>플레이 할 수 있습니다.</p>
                    </div>
                </div>
                <div className = "section s2">
                    <div className = "img"></div>
                    <div className = "sectionIntro">
                        <p className = "title gradText">펜라이트를 활용한 액션</p>
                        <p className = "subTitle gradText">펜라이트를 이용해 노트를 베고, 찌르고,<br/>팔을 크게 휘두르세요.<br/>박자가 정확할수록 높은 점수를 얻을겁니다.</p>
                    </div>
                </div>
                <div className = "section s3">
                    <div className = "img"></div>
                    <div className = "sectionIntro">
                        <p className = "title gradText">전세계 사람들과 플레이</p>
                        <p className = "subTitle gradText">혼자서만 플레이하는 것이 아닌,<br/>전세계 사람들과 함께<br/>Penlight Dancing을 플레이하세요!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
const Page3 = () => {
    return (
        <div className = "p3">
            <p className = "title gradText">TEAM. NUGUL Studio</p>
            <hr className = "titleLine lineGrad"/>
            <p className = "introduce gradText">Penlight Dancing를 제작한 팀원입니다.</p>
            <div className = "teamMate">
                <div className = "n1 line1">
                    <p className = "name gradText">박태욱</p>
                    <div className = "profile"></div>
                    <p className = "job"></p>
                    <p className = "ability"></p>
                </div>
                <div className = "n2 line2">
                    <p className = "name gradText">한규언</p>
                    <div className = "profile"></div>
                    <p className = "job gradText"></p>
                    <p className = "ability"></p>
                </div>
                <div className = "n3 line1">
                    <p className = "name gradText">유승지</p>
                    <div className = "profile"></div>
                    <p className = "job"></p>
                    <p className = "ability"></p>
                </div>
                <div className = "n4 line2">
                    <p className = "name gradText">정창원</p>
                    <div className = "profile"></div>
                    <p className = "job"></p>
                    <p className = "ability"></p>
                </div>
                <div className = "n5 line1">
                    <p className = "name gradText">이호준</p>
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
            <p className = "title gradText">NEWS</p>
            <hr className = "titleLine lineGrad"/>
            <p className = "introduce gradText">누구보다 빠르게 Penlight Dancing의 새소식을 접해보세요.</p>
            <div className = "content">
                <div className = "newsList">
                    <hr className = "ulLine lineGrad"/>
                    <ul className = "list">
                        {/* <li>[공지] 뉴스 페이지!</li>
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
                        <li>[공지] 뉴스 페이지!</li> */}
                        <div className = "dump"></div>
                    </ul>
                    <hr className = "ulLine lineGrad"/>
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
            <p className = "title gradText">CONTACT</p>
            <hr className = "titleLine lineGrad"/>
            <p className = "introduce gradText">Penlight Dancing</p>
        </div>
    )
}
const Page6 = () => {
    return (
        <div className = "p6">
            <p className = "title gradText">TERMS</p>
            <hr className = "titleLine lineGrad"/>
            <p className = "introduce gradText">Penlight Dancing의 약관입니다.</p>
        </div>
    )
}