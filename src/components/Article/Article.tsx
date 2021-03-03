import React, { FC, ReactElement } from 'react'
import ArrowIcon from './../../assets/arrow.png'
import { ArticleType } from '../../api/articlesApi'

type Props = {
    item: ArticleType
    index: number
    onClick: any
    ariaExpanded: boolean
}

const Article: FC<Props> = ({ item, index, onClick, ariaExpanded }): ReactElement => {
    return (
        <>
            <div className={`article${ariaExpanded ? ' show' : ''}`} key={index}>
                <button className="article__button" onClick={onClick}>
                    {item.title}
                    <img src={ArrowIcon} className={`article__button-arrow${ariaExpanded ? ' active' : ''}`} alt=">"/>
                </button>
                <p className={`article__text${ariaExpanded ? ' show' : ''}`} dangerouslySetInnerHTML={{__html: item.text}}>
                </p>
            </div>
        </>
    )
}

export default Article