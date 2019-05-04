import React, { Component, useState, useEffect} from 'react'

import $ from "jquery";


import { Link } from 'react-router-dom'

import './main.scss'
export const Main = () => {
    const [page = 1, setPage] = useState()
    useEffect (()=>{

    })
    return (  
        <div className = "mainPage">
            <div id = "page1">
                <div className = "blockImg"></div>
                <div className = "logo"></div>
            </div>
            <div id = "page2">p2</div>
            <div id = "page3">p3</div>
            <div id = "page4">p4</div>
            <div id = "page5">p5</div>
        </div>
    )
}