import React, { Component } from 'react'
import Me from '../Component/me.jpg'

export default class Bottom extends Component {
    render() {
        return (
                <div className="a">
                    <img src ={Me} className="bottom" /><br/>
                        Founder: Megha Dalal <br/>
                        Kolkata, India.<br/>
                        Ph No.: 8345037721<br/>
                        Email: m.dalal2014@gmail.com
                </div>
                     
        )
    }
}
