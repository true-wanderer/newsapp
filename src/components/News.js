import React, { Component, useState } from "react";
import NewsItem from "./NewsItem";
import Proptypes from "prop-types";

// class News extends Component {
//   static defaultProps = {
//     country: "in",
//     pageSize: 8,
//     category: "general",
//   };
//   static propTypes = {
//     country: Proptypes.string,
//     pageSize: Proptypes.number,
//     category: Proptypes.string,
//   };

//   articles = [
//     {
//       author: null,
//       title:
//         "Congress's Response to Ally Sharad Pawar's Comment On Adani-Hindenburg - NDTV",
//       description:
//         "The Congress today distanced itself from its Maharashtra ally Sharad Pawar's comment that US short-seller Hindenburg Research's report on the Adani Group seemed to be a \"targetted\" attack.",
//       url: "https://www.ndtv.com/india-news/congresss-response-to-ally-sharad-pawars-comment-on-adani-group-and-hindenburg-research-row-3929630",
//       urlToImage:
//         "https://c.ndtvimg.com/2023-03/2o4glp38_rahul-gandhi_625x300_26_March_23.jpg",
//       publishedAt: "2023-04-07T15:54:00Z",
//       content:
//         "Rahul Gandhi's party and other opposition parties have been seeking a JPC probe into Adani-Hindenburg\r\nThe Congress today distanced itself from its Maharashtra ally Sharad Pawar's comment that US sho… [+2484 chars]",
//     },
//     {
//       author: null,
//       title:
//         "Pakistan Needs To Repay $77 Billion Debt To China, Saudi Arabia By 2026: Report - NDTV",
//       description:
//         "Pakistan, currently tackling a major economic crisis, is grappling with high external debt, a weak local currency and dwindling foreign exchange reserves.",
//       url: "https://www.ndtv.com/world-news/pakistan-needs-to-repay-77-billion-debt-to-china-saudi-arabia-by-2026-report-3929817",
//       urlToImage:
//         "https://c.ndtvimg.com/2023-04/jqlsd7mk_pakistan-rupee-generic-pkr-generic-istock_625x300_04_April_23.jpg",
//       publishedAt: "2023-04-07T15:43:22Z",
//       content:
//         "Pakistan is awaiting a much-needed USD 1.1 billion tranche of funding from IMF.\r\nIslamabad: Pakistan needs to repay a whopping USD 77.5 billion in external debt from April 2023 to June 2026 and the c… [+2582 chars]",
//     },
//     {
//       author: "Neerja Chowdhury",
//       title:
//         "The importance of Ghulam Nabi Azad: He got Modi’s warmth in a speech, will he get the izzat Rahul didn’t give him? - The Indian Express",
//       description:
//         "The coming together of Azad, Dr Karan Singh, Farooq Abdullah, even at a social event, could be a straw in the shifting J&K wind",
//       url: "https://indianexpress.com/article/political-pulse/ghulam-nabi-azad-narendra-modi-rahul-gandhi-congress-8544634/",
//       urlToImage:
//         "https://images.indianexpress.com/2023/04/Ghulam-Nabi-Azad.jpg",
//       publishedAt: "2023-04-07T14:58:28Z",
//       content:
//         "An assertive Azad sat on stage at the Teen Murti Library besides the respected Dr Karan Singh, once Sadr-i-Riyasat of the erstwhile Jammu and Kashmir who had just launched Azads controversial book, A… [+6432 chars]",
//     },
//     {
//       author: "Neerja Chowdhury",
//       title:
//         "The importance of Ghulam Nabi Azad: He got Modi’s warmth in a speech, will he get the izzat Rahul didn’t give him? - The Indian Express",
//       description:
//         "The coming together of Azad, Dr Karan Singh, Farooq Abdullah, even at a social event, could be a straw in the shifting J&K wind",
//       url: "https://indianexpress.com/article/political-pulse/ghulam-nabi-azad-narendra-modi-rahul-gandhi-congress-8544634/",
//       urlToImage:
//         "https://images.indianexpress.com/2023/04/Ghulam-Nabi-Azad.jpg",
//       publishedAt: "2023-04-07T14:58:28Z",
//       content:
//         "An assertive Azad sat on stage at the Teen Murti Library besides the respected Dr Karan Singh, once Sadr-i-Riyasat of the erstwhile Jammu and Kashmir who had just launched Azads controversial book, A… [+6432 chars]",
//     },
//   ];

//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: this.articles,

//       page: 1,
//     };
//   }

//   async updateNews() {
//     console.log(this.props.category)
//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6fb886fbb8044b01a7fb89b1f96cd11c&page=${this.state.page}&pagesize=${this.props.pageSize}`;

//     let res = await fetch(url);
//     // console.log(res)
//     let data = await res.json();

//     console.log("data + ", data.articles);
//     this.setState({
//       articles: data.articles,
//       totalResults: data.totalResults,
//     });
//   }

//   async componentDidMount() {
//     this.updateNews();
//   }

//   handlenextclick = async () => {
//     this.updateNews();
//     this.setState({
//       page: this.state.articles.page + 1,
//     });
//   };

//   handleprevclick = async () => {
//     this.updateNews();
//     this.setState({
//       page: this.state.articles.page - 1,
//     });
//   };

//   render() {
//     return (
//       <div className="container my-3">
//         <h2 className="strong text-center " style={{ margin: "35px 0px" }}>
//           {" "}
//           NewsDaily-Top Headlines
//         </h2>
//         <div className="row">
//           {this.state.articles ? this.state.articles.map((element, index) => {
//             return (
//               <div className="col-md-4" key={index}>
//                 <NewsItem
//                   title={element.title}
//                   Description={element.description}
//                   imageUrl={element.urlToImage}
//                   url={element.url}
//                 />
//               </div>
//             );
//           }) : null}
//         </div>
//         <div className="container d-flex justify-content-between">
//           <button
//             type="button"
//             className="btn btn-dark"
//             onClick={this.handleprevclick()}
//           >
//             &larr;Previous
//           </button>
//           <button
//             type="button"
//             className="btn btn-dark"
//             onClick={this.handlenextclick()}
//           >
//             Next &rarr;
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default News;

/*
async - await
Promise
map
filter
axios for API fetch

*/

const News = ({ country, pageSize, category }) => {
  const aarticles = [
    {
      author: null,
      title:
        "Congress's Response to Ally Sharad Pawar's Comment On Adani-Hindenburg - NDTV",
      description:
        "The Congress today distanced itself from its Maharashtra ally Sharad Pawar's comment that US short-seller Hindenburg Research's report on the Adani Group seemed to be a \"targetted\" attack.",
      url: "https://www.ndtv.com/india-news/congresss-response-to-ally-sharad-pawars-comment-on-adani-group-and-hindenburg-research-row-3929630",
      urlToImage:
        "https://c.ndtvimg.com/2023-03/2o4glp38_rahul-gandhi_625x300_26_March_23.jpg",
      publishedAt: "2023-04-07T15:54:00Z",
      content:
        "Rahul Gandhi's party and other opposition parties have been seeking a JPC probe into Adani-Hindenburg\r\nThe Congress today distanced itself from its Maharashtra ally Sharad Pawar's comment that US sho… [+2484 chars]",
    },
    {
      author: null,
      title:
        "Pakistan Needs To Repay $77 Billion Debt To China, Saudi Arabia By 2026: Report - NDTV",
      description:
        "Pakistan, currently tackling a major economic crisis, is grappling with high external debt, a weak local currency and dwindling foreign exchange reserves.",
      url: "https://www.ndtv.com/world-news/pakistan-needs-to-repay-77-billion-debt-to-china-saudi-arabia-by-2026-report-3929817",
      urlToImage:
        "https://c.ndtvimg.com/2023-04/jqlsd7mk_pakistan-rupee-generic-pkr-generic-istock_625x300_04_April_23.jpg",
      publishedAt: "2023-04-07T15:43:22Z",
      content:
        "Pakistan is awaiting a much-needed USD 1.1 billion tranche of funding from IMF.\r\nIslamabad: Pakistan needs to repay a whopping USD 77.5 billion in external debt from April 2023 to June 2026 and the c… [+2582 chars]",
    },
    {
      author: "Neerja Chowdhury",
      title:
        "The importance of Ghulam Nabi Azad: He got Modi’s warmth in a speech, will he get the izzat Rahul didn’t give him? - The Indian Express",
      description:
        "The coming together of Azad, Dr Karan Singh, Farooq Abdullah, even at a social event, could be a straw in the shifting J&K wind",
      url: "https://indianexpress.com/article/political-pulse/ghulam-nabi-azad-narendra-modi-rahul-gandhi-congress-8544634/",
      urlToImage:
        "https://images.indianexpress.com/2023/04/Ghulam-Nabi-Azad.jpg",
      publishedAt: "2023-04-07T14:58:28Z",
      content:
        "An assertive Azad sat on stage at the Teen Murti Library besides the respected Dr Karan Singh, once Sadr-i-Riyasat of the erstwhile Jammu and Kashmir who had just launched Azads controversial book, A… [+6432 chars]",
    },
    {
      author: "Neerja Chowdhury",
      title:
        "The importance of Ghulam Nabi Azad: He got Modi’s warmth in a speech, will he get the izzat Rahul didn’t give him? - The Indian Express",
      description:
        "The coming together of Azad, Dr Karan Singh, Farooq Abdullah, even at a social event, could be a straw in the shifting J&K wind",
      url: "https://indianexpress.com/article/political-pulse/ghulam-nabi-azad-narendra-modi-rahul-gandhi-congress-8544634/",
      urlToImage:
        "https://images.indianexpress.com/2023/04/Ghulam-Nabi-Azad.jpg",
      publishedAt: "2023-04-07T14:58:28Z",
      content:
        "An assertive Azad sat on stage at the Teen Murti Library besides the respected Dr Karan Singh, once Sadr-i-Riyasat of the erstwhile Jammu and Kashmir who had just launched Azads controversial book, A… [+6432 chars]",
    },
  ];

  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  const updateNews = async () => {
    // console.log(category)
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=2cd87091db56402b926d6408ddb0bff5&page=${page}&pagesize=${pageSize}`;

    let res = await fetch(url);
    let data = await res.json();

    setArticles(data.articles);

    console.log("Data: ", data);

    // console.log("data + ", data.articles);
    // this.setState({
    //   articles: data.articles,
    //   totalResults: data.totalResults,
    // });
  };

  updateNews();

  return (
    <div className="container my-3">
      <h2 className="strong text-center " style={{ margin: "35px 0px" }}>
        
     `NewsDaily-Top Headlines ${articles.category}`</h2>
      <div className="row">
        {articles.length > 0 ? (
          articles.map((article, index) => {
            return (
              <div className="col-md-4" key={index}>
                <NewsItem
                  article={article}
                  // title={element.title}
                  // Description={element.description}
                  // imageUrl={element.urlToImage}
                  // url={element.url}
                />
              </div>
            );
          })
        ) : (
          <h1 style={{ textAlign: "center" }}>Loading...</h1>
        )}
      </div>
      <div className="container d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-dark"
          //  onClick={this.handleprevclick()}
        >
          &larr;Previous
        </button>
        <button
          type="button"
          className="btn btn-dark"
          //  onClick={this.handlenextclick()}
        >
          Next &rarr;
        </button>
      </div>
    </div>

    //  <div>

    //  </div>
  );
};

export default News;
