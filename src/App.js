import React, { Component } from 'react';
import './App.css';
import Navbar from './components/NavBar';
import Cards from './components/NewsCard';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
      articles: [],
      loading: false,
      page: 1
    };
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
    this.loadMoreArticles = this.loadMoreArticles.bind(this);
  }

  async componentDidMount() {
    this.loadMoreArticles();
  }

  async loadMoreArticles() {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?category=business&country=us&apiKey=9fc0b96d69bd42b0a3def6369109d126&page=${this.state.page + 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: this.state.articles.concat(parsedData.articles), loading: false, page: this.state.page + 1 });
  }

  toggleDarkMode() {
    this.setState({ darkMode: !this.state.darkMode });
  }

  render() {
    const { darkMode, articles } = this.state;
    return (
      <div className={`${darkMode && "dark"}`}>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gray-200 dark:bg-gray-900">
          <div className="">
            <h3 className="text-center text-3xl font-bold py-10 dark:text-white">Top Headlines</h3>
            <div className="grid grid-cols-2 gap-4 md:gap-4">
              {articles.map((element) => (
                <Cards
                  key={element.title} 
                  title={element.title.substring(0, 50)}
                  description={element.description?.substring(0, 100) || 'No description provided.'}
                  urlToImage={element.urlToImage}
                  url={element.url}
                />
              ))}
            </div>
            <div className="flex justify-center mt-5">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={this.loadMoreArticles}
              >
                More Stories
              </button>
            </div>
          </div>
        </div>
        <button
          className="fixed w-10 h-10 bottom-10 right-10 bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black font-semibold"
          onClick={this.toggleDarkMode}
        >
          {darkMode ? "LHT" : "DRK"}
        </button>
      </div>
    );
  }
}
