import React from "react";
import s from './Folder.module.scss'
import { SortItem } from "./SortItem";

interface IProps {

}

export const Folder = (props: IProps) => {
    return (
        <div className={s.wrapper}>
            <div>
                <SortItem/>
            </div>
            <div className={s.wrapperGrid}>
                Folders
            </div>
        </div>
    )
}

