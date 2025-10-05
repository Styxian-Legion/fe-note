"use client"
import { useState } from "react"

import Navbar from "@/ui/Navbar"
import Sidebar from "@/ui/Sidebar"
import Main from "@/ui/Main"
import MainContent from "@/ui/MainContent"
import IconButton from "@/ui/IconButton"
import SearchField from "@/ui/SearchField"

import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { FaMoon, FaUser, FaUsers, FaStickyNote } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdCategory } from "react-icons/md"

export default function Layout({ children }: Readonly<{ children: React.ReactNode; }>) {
    const [showSidebar, setShowSidebar] = useState<boolean>(false)
    const handleSidebar = () => setShowSidebar(!showSidebar)

    return (
        <>
            <Navbar>
                <Navbar.Group id="nav-left">
                    <IconButton onClick={handleSidebar}>
                        {showSidebar ? <GoSidebarExpand className="w-6 h-6" /> : <GoSidebarCollapse className="w-6 h-6" />}
                    </IconButton>
                </Navbar.Group>
                <div className="w-full px-2">
                    <SearchField />
                </div>
                <Navbar.Group id="nav-right">
                    <IconButton>
                        <FaMoon className="w-4 h-4" />
                    </IconButton>
                    <IconButton>
                        <IoMdSettings className="w-5 h-5" />
                    </IconButton>
                </Navbar.Group>
            </Navbar>
            <Main>
                <Sidebar className={`${showSidebar ? "translate-x-0" : "-translate-x-full"}`}>
                    <Sidebar.Group id="master">
                        <Sidebar.Menu href="/category">
                            <Sidebar.MenuIcon>
                                <MdCategory  className="w-4 h-4" />
                            </Sidebar.MenuIcon>
                            <Sidebar.MenuLabel>Category</Sidebar.MenuLabel>
                        </Sidebar.Menu>
                        <Sidebar.Menu href="/wiki">
                            <Sidebar.MenuIcon>
                                <FaStickyNote className="w-4 h-4" />
                            </Sidebar.MenuIcon>
                            <Sidebar.MenuLabel>Wiki</Sidebar.MenuLabel>
                        </Sidebar.Menu>
                    </Sidebar.Group>
                    <Sidebar.Group id="account">
                        <Sidebar.Heading>Others</Sidebar.Heading>
                        <Sidebar.Menu href="/account">
                            <Sidebar.MenuIcon>
                                <FaUser className="w-4 h-4" />
                            </Sidebar.MenuIcon>
                            <Sidebar.MenuLabel>Account Settings</Sidebar.MenuLabel>
                        </Sidebar.Menu>
                        <Sidebar.Menu href="/account">
                            <Sidebar.MenuIcon>
                                <FaUsers className="w-4 h-4" />
                            </Sidebar.MenuIcon>
                            <Sidebar.MenuLabel>Users</Sidebar.MenuLabel>
                        </Sidebar.Menu>
                    </Sidebar.Group>
                </Sidebar>
                <MainContent>
                    {children}
                </MainContent>
            </Main>
        </>
    )
}