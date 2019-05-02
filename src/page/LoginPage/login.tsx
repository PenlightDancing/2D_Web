import React, { Component, useEffect, useState } from 'react'

import './login.scss'
import { Link } from 'react-router-dom'

export const LoginPage: React.FC = ()=> {
    const [language = {
        introduce1 : '',
        introduce2 : '',
        privacyPolicy : '',
        question: ''
    }, setlanguage] = useState()
    const localStorageLanguage = (language: string) => {
        localStorage.setItem('language', language);
    }
    useEffect ( ()=> {
        let english = {
            introduce1 : 'When you watch a video, both the creator and viewers will receive a fanzy that you can use like cash.',
            introduce2 : 'Share your favorite creator\'s videos with your friends and make your memories!',
            privacyPolicy : 'Privacy Policy',
            question: 'Contact us'
        }
        let japenese = {
            introduce1 : '動画を見るとクリエイターと視聴者の両方が現金のように使えるファンジーをもらえます。',
            introduce2 : '好きなクリエイターの動画を友達と一緒に見ながら思い出を共有しましょう！',
            privacyPolicy : '個人情報保護方針',
            question: 'お問い合わせ'
        }
        let korean = {
            introduce1 : '동영상을 시청하면 크리에이터와 시청자 모두가 현금처럼 쓸 수 있는 팬지를 받을 수 있습니다.',
            introduce2 : '좋아하는 크리에이터의 동영상을 친구들과 함께 보면서 추억을 공유해보세요!',
            privacyPolicy : '개인정보보호정책',
            question: '문의하기'
        }
        if( localStorage.getItem('language') === 'english')
            setlanguage(english)
        else if( localStorage.getItem('language') === 'japenese')
            setlanguage(japenese)
        else
            setlanguage(korean)
    })
    return (
        <div className = "loginPage">
            <div className  = "innerDiv">
                <div className = "logo"></div>
                <p className = "introduceFanzy">
                    {language.introduce1}
                    <br/>
                    {language.introduce2}
                </p>
                <div className = "loginBtn">
                    <Link to = '/'><div className = "dump">Sign in with Dump</div></Link>
                </div>
                <ul className = "selectLanguage">
                    <li onClick = {()=>{localStorageLanguage('english')}}>English</li>
                    <li onClick = {()=>{localStorageLanguage('korean')}}>한국어</li>
                    <li onClick = {()=>{localStorageLanguage('japenese')}}>日本語</li>
                </ul>
                <a href = "">{language.privacyPolicy}</a>
                <br/>
                <a href = "">{language.question}</a>
            </div>
        </div>
    )
}