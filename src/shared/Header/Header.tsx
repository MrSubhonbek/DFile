import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector'
import s from './Header.module.scss'

interface IProps {

}

export const Header = (props: IProps) => {
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.uploadButton}>UPLOADE<GlobalSvgSelector id='plus' /></div>
                <div className={s.downloadButton}><GlobalSvgSelector id='download' /></div>
                <div className={s.delete}><GlobalSvgSelector id='delete' /></div>
            </div>
            <div className={s.logo}></div>
            <div className={s.wrapper}>
                <div className={s.search}>Disk search<GlobalSvgSelector id='found' /></div>
                <div className={s.slide}><GlobalSvgSelector id='slide' /></div>
                <div className={s.profile}><GlobalSvgSelector id='profile' /></div>
            </div>
        </header>
    )
}