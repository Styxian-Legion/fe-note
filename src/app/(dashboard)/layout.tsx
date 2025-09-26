"use client"
import { useState } from "react"

import Navbar from "@/ui/Navbar"
import Sidebar from "@/ui/Sidebar"
import Main from "@/ui/Main"
import MainContent from "@/ui/MainContent"
import IconButton from "@/ui/IconButton"

import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { FaMoon, FaInbox, FaTrash} from "react-icons/fa";
import { IoMdSettings, IoMdAdd } from "react-icons/io";
import { IoHome } from "react-icons/io5";

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
                        <Sidebar.Menu href="/home">
                            <Sidebar.MenuIcon>
                                <IoHome className="w-4 h-4" />
                            </Sidebar.MenuIcon>
                            <Sidebar.MenuLabel>Home</Sidebar.MenuLabel>
                        </Sidebar.Menu>
                        <Sidebar.Menu href="/inbox">
                            <Sidebar.MenuIcon>
                                <FaInbox className="w-4 h-4" />
                            </Sidebar.MenuIcon>
                            <Sidebar.MenuLabel>Inbox</Sidebar.MenuLabel>
                        </Sidebar.Menu>
                        <Sidebar.Menu href="/trash">
                            <Sidebar.MenuIcon>
                                <FaTrash className="w-4 h-4" />
                            </Sidebar.MenuIcon>
                            <Sidebar.MenuLabel>Trash</Sidebar.MenuLabel>
                        </Sidebar.Menu>
                    </Sidebar.Group>

                    <Sidebar.Group id="favorite">
                        <Sidebar.Heading>Favorites</Sidebar.Heading>
                    </Sidebar.Group>

                    <Sidebar.Group id="teamspace">
                        <Sidebar.Heading>Teamspace</Sidebar.Heading>
                        <Sidebar.Menu href="/teamspace/create">
                            <Sidebar.MenuIcon>
                                <IoMdAdd className="w-4 h-4" />
                            </Sidebar.MenuIcon>
                            <Sidebar.MenuLabel>New</Sidebar.MenuLabel>
                        </Sidebar.Menu>
                    </Sidebar.Group>

                    <Sidebar.Group id="private">
                        <Sidebar.Heading>Private</Sidebar.Heading>
                        <Sidebar.Menu href="/private/create">
                            <Sidebar.MenuIcon>
                                <IoMdAdd className="w-4 h-4" />
                            </Sidebar.MenuIcon>
                            <Sidebar.MenuLabel>New</Sidebar.MenuLabel>
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