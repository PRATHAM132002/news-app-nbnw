

import React, { Component } from 'react'

export default class NewsCard extends Component {


    render() {
        let { title, description, urlToImage, url } = this.props;
        return (
            <div>

                <a target="_blank" rel="noreferrer" href={url} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow p-4 md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-fill rounded-t-lg h-96 md:h-40 md:w-48 md:rounded-none md:rounded-s-lg" style={{objectFit: 'cover'}} src={urlToImage} alt="  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|>_<|  " />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{title}...</h5>
                        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">{description}... <br />Read More</p>
                    </div>
                </a>

            </div>
        )
    }
}



