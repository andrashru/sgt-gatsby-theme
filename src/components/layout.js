import * as React from "react"
import {Link, useStaticQuery, graphql} from "gatsby"
import {
    container,
    heading,
    siteTitle,
    navLinks,
    navLinkItem,
    navLinkText
} from "./layout.module.css"

const Layout = ({pageTitle, children}) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `)

    return(
        <div className={container}>
            <header className={siteTitle}>{data.site.siteMetadata.title}</header>
            <div>{data.site.siteMetadata.description}</div>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>
                            Главная
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText}>
                            Контакты
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/blog" className={navLinkText}>
                            Новости
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout;