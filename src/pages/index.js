// Step 1: Import React
import * as React from 'react'
import Layout from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
    return (
        <main>
            <Layout pageTitle="Главная страница">
                <p>Совершенствуем технологии, сохраняем опыт.</p>
                <StaticImage
                    alt="sgt tech"
                    src="../images/technic.jpg"
                />
            </Layout>
        </main>
    )
}

export const Head = () => <title>Главная</title>

export default IndexPage