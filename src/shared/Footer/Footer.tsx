import st from './Footer.module.scss'
interface IProps {

}

export const Footer = (props:IProps) => {
    return (
        <footer className={st.footer}>
            <div>availible : ??? GB</div>
            <div className={st.recently}>recently deleted</div>
        </footer>
    )
}