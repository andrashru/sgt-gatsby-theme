import * as React from 'react'
import Layout from "../components/layout"
const AboutPage = () => {
    return (
        <main>
            <Layout pageTitle="Контакты">
                <p>650036, Россия, Кемеровская обл., г. Кемерово, пр. Ленина, дом 90/5, Секция D, оф. 84</p>
            </Layout>
        </main>
    )
}

export const Head = () => {
    return (
        <>
            <title>Контакты</title>
            <meta name="description" content="Контакты сгт" />
        </>
    )
}

export default AboutPage;