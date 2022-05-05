import React from "react";
import { Folder } from "./components/Folder/Folder";
import { NestedList } from "./components/Navbar/Navbar";
import { NavbarIcon } from "./components/NavbarIcon/NavbarIcon";
import s from './Home.module.scss'

interface IProps {

}

const listsFolder = [{ primary: 'New Folder' },
{ primary: 'New Folder' },
{ primary: 'New Folder' },
{ primary: 'New Folder' },
{ primary: 'New Folder' },
{ primary: 'New Folder' }]

export const Home = (props: IProps) => {
    return (
        <div className={s.home}>
            <NestedList lists={listsFolder} />
            <Folder />
            <NavbarIcon />
        </div>
    )
}

