import React, { FC, ReactElement, useEffect, useState } from 'react'
import Article from '../Article/Article'
import { ArticlesApi, ArticleType } from '../../api/articlesApi'

const Articles: FC = (): ReactElement => {

    const [activeArticleIndex, setActiveArticleIndex] = useState<number | undefined>(undefined)
    const [articles, setArticles] = useState<ArticleType[]>([])
    const handleArticleClick = (index: number | undefined) => {
        if (index === activeArticleIndex)
            setActiveArticleIndex(undefined)
        else
            setActiveArticleIndex(index)
    }

    useEffect(() => {
        ArticlesApi.fetchArticles().then(articles => setArticles(articles))
    }, [])

    return (
        <>
            {
                articles.map((item, index) => {
                    return (
                        <Article
                            key={index + Math.random()}
                            ariaExpanded={index === activeArticleIndex}
                            item={item}
                            index={index}
                            onClick={() => handleArticleClick(index)}
                        />
                    )
                })
            }
        </>
    )
}

export default Articles