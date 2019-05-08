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
                <div className = "logo"></div>
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

        </div>
    )
}