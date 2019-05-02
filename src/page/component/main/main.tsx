import React, { Component, useState, useEffect} from 'react'

import $ from "jquery";


import { Link } from 'react-router-dom'

import './main.scss'
export const Main = () => {
    const [page = 1, setPage] = useState()
    useEffect (()=>{
        var position = $(window). scrollTop();
        
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll > position) {
                console.log('scrollDown');
                $('div').text('Scrolling Down Scripts');
            }
            else {
                console.log('scrollUp');
                $('div').text('Scrolling Up Scripts');
            }
            position = scroll;
        });
    })
    return (  
        <div className = "mainPage">
            <div className = "remoteController">
                <a href = '#page1'><div className = "circle c1"></div></a>
                <a href = '#page2'><div className = "circle c2"></div></a>
                <a href = '#page3'><div className = "circle c3"></div></a>
                <a href = '#page4'><div className = "circle c4"></div></a>
                <a href = '#page5'><div className = "circle c5"></div></a>
            </div>
            <div id = "page1">
                <div className = "blockImg"></div>            
            </div>
            <div id = "page2">p2</div>
            <div id = "page3">p3</div>
            <div id = "page4">p4</div>
            <div id = "page5">p5</div>
        </div>
    )
}