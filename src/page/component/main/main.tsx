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
                game
            </div>
            <div id = "divpage3">
                <div id = "page3"></div>
                team
            </div>
            <div id = "divpage4">
                <div id = "page4"></div>
                news
            </div>
            <div id = "divpage5">
                <div id = "page5"></div>
                contact
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
                <div className = "logo">

                </div>
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
                    <div className = "inicons facebook"></div>
                </div>
            </div>
        </div>
    )
}

const Page2 = () => {
    return (
        <div className = "p2">
        </div>
    )
}
const Page3 = () => {
    return (
        <div className = "p3">
        </div>
    )
}
const Page4 = () => {
    return (
        <div className = "p4">
        </div>
    )
}
const Page5 = () => {
    return (
        <div className = "p5">
        </div>
    )
}
const Page6 = () => {
    return (
        <div className = "p6">
        </div>
    )
}