import React from 'react'

const Career1 = () => {
  const cardData = [
    {
      title: "Is CS Degree required for a Full Stack Development Career?",
      image: "https://www.guvi.in/blog/wp-content/uploads/2022/11/image-11-1536x933.png",
      link: "https://www.guvi.in/blog/do-full-stack-development-jobs-rely-on-cs-degrees/",
      author : "By GUVI Geek",
      date: "Aug 30, 2024",
    },
    {
      title: "What Does a UI/UX Designer Do? [2024 Career Guide]",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-What-Does-a-UIUX-Designer-Do-Career-Guide.webp",
      link: "https://www.guvi.in/blog/what-does-a-ui-ux-designer-do/",
      date: "Aug 30, 2024",
      author : "By Meghana D",
    },
    {
      title: "Data Science vs Software Engineering: Comparing Skill Sets and Careers",
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/08/Data-Science-vs-Software-Engineering.png",
      link: "https://www.guvi.in/blog/data-science-vs-software-engineering/",
      date: "Aug 30, 2024",
      author : "By Lukesh S"
    },
    {
      title: "Zen Class Review: 1 Step To Ace Full Stack Development Career",
      image: "https://www.guvi.in/blog/wp-content/uploads/2021/07/zen-full-stack-developer-600x493.png",
      link: "https://www.guvi.in/blog/zen-class-review-pro-in-full-stack-development/",
      date: "Aug 29, 2024",
      author : "By Archana"
    },
    {
      title: "Is Switching Careers From Non-Tech To Tech Challenging?",
      image: "https://www.guvi.in/blog/wp-content/uploads/2021/10/Non-tech-to-Tech-How-difficult-is-that.png",
      link: "https://www.guvi.in/blog/is-switching-careers-from-non-tech-to-tech-challenging/",
      date: "Aug 28, 2024",
      author : "By Archana"
    },
    {
      title: "10 Best Software Engineering Careers in 2024",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/03/Top-Software-Engineering-Careers.jpg",
      link: "https://www.guvi.in/blog/best-software-engineering-career-options/",
      date: "Aug 23, 2024",
      author : "By Saakshi Priyadarshini"
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

export default Career1