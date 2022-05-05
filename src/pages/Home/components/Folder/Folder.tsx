import React from "react";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
import s from './Folder.module.scss'
import { SortItem } from "./SortItem";

interface IList {
    primary: string
}

interface IProps {
    lists: Array<IList>
}

export const Folder = (props: IProps) => {

    const ListFolder = props.lists.map((element) => {
        return (
            <div className={s.folder}>
                <GlobalSvgSelector id="folder" />
                <div className={s.nameFolder}>
                    {element.primary}
                </div>
            </div>
        )
    })

    return (
        <div className={s.wrapper}>
            <div className={s.sortBar}>
                <SortItem />
                <div className={s.viewFolder}>
                    <GlobalSvgSelector id='bigFolderIcon' />
                    <GlobalSvgSelector id='smallFolderIcon' />
                </div>
            </div>
            <div className={s.wrapperGrid}>
                {ListFolder}
            </div>
        </div>
    )
}

