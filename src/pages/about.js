import * as React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
const AboutPage = () => {
    return (
        <main>
            <Layout pageTitle="Контакты">
                <p>650036, Россия, Кемеровская обл., г. Кемерово, пр. Ленина, дом 90/5, Секция D, оф. 84</p>
            </Layout>
        </main>
    )
}

export const Head = () => <Seo title="Контакты" />

export default AboutPage;