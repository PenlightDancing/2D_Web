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
            </div>
            <div id = "divpage3">team</div>
            <div id = "divpage4">news</div>
            <div id = "divpage5">contact</div>
            <div id = "divpage6">yackGwan</div>
        </div>
    )
}