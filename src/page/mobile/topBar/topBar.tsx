import React, { useState, useEffect } from 'react'

import './topBar.scss'

export const TopBar = () => {
    return (
        <div className = "topBarMobile">
            <a href = '#divpage1'>
                <div className = "logo">
                </div>
            </a>
            <p className = "gradText">PenLight Dancing</p>
        </div>
    )
}