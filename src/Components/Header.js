import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import { Sidebar } from 'primereact/sidebar'
const SIDEBAR = {
    position: 'absolute',
    right: 0,
    backgroundColor: 'ghostwhite',
    width: '3em',
    height: '100%'
}
const ICONS = {
    display: 'flex',
    flexDirection: 'column'
}
const BADGE = {
    position: 'absolute',
    top: '39px',
    right: '5px',
    padding: '4px 10px',
    borderRadius: '50%',
    fontSize: 'small',
    backgroundColor: 'black'
}

export default function Header() {
    const [informationSideBar, tooggleInfoSideBar] = useState(false);
    const [warningSideBar, tooggleWarningSideBar] = useState(false);
    return (
        <>
            <img src={logo} alt="Novartis Logo"/>
            {/* Sidebar Code */}
            <div style={SIDEBAR}>
                <Sidebar visible={informationSideBar} position="right" onHide={() => tooggleInfoSideBar(!informationSideBar)}  >
                    Information Content
                </Sidebar>
                <Sidebar visible={warningSideBar} position="right" onHide={() => tooggleWarningSideBar(!warningSideBar)}  >
                    Warning Content
                </Sidebar>
                <div style={ICONS}>
                    <i className="pi pi-info-circle" style={{ color: 'blue', fontSize: 'xx-large', marginBottom: '16.3px', cursor: 'pointer' }} onClick={() => tooggleInfoSideBar(!informationSideBar)}> </i>
                    <i className="pi pi-exclamation-circle" style={{ color: 'red', fontSize: 'xx-large', cursor: 'pointer' }} onClick={() => tooggleWarningSideBar(!warningSideBar)} >
                        <span style={BADGE}>4</span>
                    </i>
                </div>
            </div>
        </>
    )
}
