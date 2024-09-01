import React from 'react'

const Home = () => {

  const cardData = [
    {
      title: "40 Java Interview Questions for Freshers with Clear & Concise Answers",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/04/feature.webp",
      link: "https://www.guvi.in/blog/40-java-interview-questions-for-freshers/",
      author : "By Tushar Vinocha",
      date: "Aug 09, 2024",
    },
    {
      title: "Top 30 Mini Project Ideas For College Students",
      image: "https://www.guvi.in/blog/wp-content/uploads/2015/02/blog-2-e1626109662385.png",
      link: "https://www.guvi.in/blog/top-mini-project-ideas-for-college-students//",
      date: "Aug 23, 2024",
      author : "By Srinithi Sankar",
    },
    {
      title: "How to Render an Array of Objects in React? [in 3 easy steps]",
      image: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Render-array-of-objects-in-ReactJs-1536x864.png",
      link: "https://www.guvi.in/blog/how-to-render-an-array-of-objects-in-react/",
      date: "Aug 06, 2024",
      author : "By Tarun Singh"
    },
    {
      title: "Top 10 Unique Project Ideas for College Students",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/06/feature-image-unique-project-ideas.jpg",
      link: "https://www.guvi.in/blog/unique-project-ideas-for-college-students/",
      date: "Jul 23, 2024",
      author : "By Lukesh S"
    },
    {
      title: "15 Best Mechanical Engineering Project Ideas in 2024",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/09/0_feature_image-1536x596.webp",
      link: "https://www.guvi.in/blog/mechanical-engineering-project-ideas/",
      date: "Jul 23, 2024",
      author : "By Meghana D"
    },
    {
      title: "Use ReactJS to Fetch and Display Data from API – 5 Simple Steps",
      image: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Fetch-Data-using-API-in-React.Js-1536x864.png",
      link: "https://www.guvi.in/blog/how-to-fetch-and-display-data-from-api-in-react/",
      date: "Jul 23, 2024",
      author : "By Tarun Singh"
    }
  ];


  return(
    <>
    <div className='d-flex justify-content-start flex-wrap' style={{paddingTop:'10px'}}>
      {
        cardData.map((data,index)=>{
          return <div key ={index}className="card" style={{width: '20rem' , marginRight:'64px', marginLeft:"65px", marginTop:"10px", marginBottom:"10px"}}>
      <img className="card-img-top" src={data.image} alt="Card image cap" style={{height:"150px"}}/>
      <div className="card-body">
        <h5 className="card-title" style={{height:"70px"}}>{data.title}</h5>
        <p className="card-text" style={{height:"10px" , color:"grey"}}>{data.author}</p>
        <p className="card-text" style={{color:"grey"}}>{data.date}
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

export default Home