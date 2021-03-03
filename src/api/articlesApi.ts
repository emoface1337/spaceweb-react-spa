import axios from 'axios'

export type ArticleType = {
    title: string
    text: string
}

export const ArticlesApi = {

    async fetchArticles(): Promise<ArticleType[]> {

        const { data } = await axios.get('https://sweb.ru/export/turbojournal/', {
            headers: {
                'Content-Type': 'application/xml; charset=utf-8'
            }
        })

        const xml: Document = new DOMParser().parseFromString(data, 'text/xml')
        const articlesHtmlCollection: HTMLCollectionOf<Element> = xml.getElementsByTagName('item')

        const articles: ArticleType[] = []

        for (let i = 0; i < articlesHtmlCollection.length; i++) {
            articles.push({
                title: articlesHtmlCollection[i].getElementsByTagName('title')[0].innerHTML,
                text: articlesHtmlCollection[i].children[4].textContent!.replace('/<h1>(.*)<\/h2>/', '')
            })
            console.log(articlesHtmlCollection[i].children[4].textContent)
        }

        console.log(articles)
        return articles
    }
}