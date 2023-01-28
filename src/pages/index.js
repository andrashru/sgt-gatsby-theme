// Step 1: Import React
import * as React from 'react'
import Layout from "../components/layout"

const IndexPage = () => {
    return (
        <main>
            <Layout pageTitle="Главная страница">
                <p>Совершенствуем технологии, сохраняем опыт.</p>
            </Layout>
        </main>
    )
}

export const Head = () => <title>Главная</title>

export default IndexPage