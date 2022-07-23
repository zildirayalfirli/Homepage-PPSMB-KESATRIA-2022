import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({ isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={ isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
        <SidebarMenu>
        <SidebarLink to='home' onClick={toggle}>
                Home
            </SidebarLink>
            <SidebarLink to='about' onClick={toggle}>
                About
            </SidebarLink>
            <SidebarLink to='jelajahteknik' onClick={toggle}>
                Jalan-Jalan Teknik
            </SidebarLink>
            <SidebarLink to='calender' onClick={toggle}>
                Time Line
            </SidebarLink>
            <SidebarLink to='kilasbalik' onClick={toggle}>
                Kilas Balik
            </SidebarLink>
            <SidebarLink to='teknikstore' onClick={toggle}>
                Teknik Store
            </SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrap>
            <SidebarRoute to='/absen'>Absen</SidebarRoute>
        </SidebarBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar