import React from 'react'

const DataScience = () => {
    const cardData = [
      {
        title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
        image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
        link: "https://www.guvi.in/blog/top-non-coding-jobs-in-data-science/",
        author : "By Isha Sharma",
        date: "Aug 23, 2024",
      },
      {
        title: "12 Real-World Data Science Examples: Power Of Data Science",
        image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-1536x804.webp",
        link: "https://www.guvi.in/blog/real-world-data-science-examples/",
        date: "Mar 25, 2024",
        author : "By Lukesh S",
      },
      {
        title: "Best Websites to Learn Data Science in 2024: Beginner to Expert",
        image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/feature-image-Best-Websites-to-Learn-Data-Science-1.webp",
        link: "https://www.guvi.in/blog/best-websites-to-learn-data-science/",
        date: "Dec 14, 2023",
        author : "By Meghana D"
      },
      {
        title: "Top Product-Based Companies for Data Science Freshers",
        image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
        link: "https://www.guvi.in/blog/product-based-companies-for-data-science-freshers/",
        date: "Nov 10, 2023",
        author : "By Jaishree Tomar"
      },
      {
        title: "Top Product-Based Companies for Data Scientists in 2024",
        image: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
        link: "https://www.guvi.in/blog/top-product-based-companies-for-data-scientists/",
        date: "Mar 26, 2024",
        author : "By Jaishree Tomar"
      },
      {
        title: "10 Best Data Science Online Courses for Beginners | 2024",
        image: "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Best-Data-Science-Online-Courses-for-Beginners.webp",
        link: "https://www.guvi.in/blog/best-data-science-courses-for-beginners/",
        date: "Apr 02, 2024",
        author : "By Srinithi Sankar"
      }
    ];
  
  
    return(
      <>
      <div className='d-flex justify-content-start flex-wrap' style={{paddingTop:'10px', marginTop: '60px'}}>
        {
          cardData.map((data,index)=>{
            return <div key ={index}className="card" style={{width: '20rem' , marginRight:'64px', marginLeft:"65px", marginTop:"10px", marginBottom:"10px"}}>
        <img className="card-img-top" src={data.image} alt="Card image cap" style={{height:"150px"}}/>
        <div className="card-body">
          <h5 className="card-title" style={{height:"90px"}}>{data.title}</h5>
          <p className="card-text" style={{height:"10px"}}>{data.author}</p>
          <p className="card-text">{data.date}
          <a href={data.link} target="_blank" className="btn btn-success" style={{position:"absolute",right:10,bottom:20}}>Read</a>
          </p>
        </div>
      </div>
          })
        }
      </div>
      </>
    )
}

export default DataScience