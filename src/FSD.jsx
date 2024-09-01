import React from 'react'

const FSD = () => {
  const cardData = [
    {
      title: "7 Unique Web Development Project Ideas for Beginners",
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/03/Feature-3.webp",
      link: "https://www.guvi.in/blog/web-development-project-ideas-for-beginners/",
      author : "By Lukesh S",
      date: "Aug 27, 2024",
    },
    {
      title: "Full Stack Developer Roadmap: A Complete Guide [2024]",
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/02/full_stack_developer_roadmap_in_2024.webp",
      link: "https://www.guvi.in/blog/full-stack-developer-roadmap/",
      date: "Aug 27, 2024",
      author : "By Meghana D",
    },
    {
      title: "10 Best HTML and CSS Project Ideas for Beginners",
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/02/project_ideas_for_robotic_applications-1.webp",
      link: "https://www.guvi.in/blog/html-and-css-project-ideas/",
      date: "Aug 27, 2024",
      author : "By Isha Sharma"
    },
    {
      title: "How Long Would It Take to Be a Full Stack Developer?",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-1536x804.webp",
      link: "https://www.guvi.in/blog/how-long-would-it-take-to-be-a-full-stack-developer/",
      date: "Aug 27, 2024",
      author : "By Meghana D"
    },
    {
      title: "Backend Development Roadmap: A Complete Guide 2024",
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Backend-Development-Roadmap-A-Complete-Guide.webp",
      link: "https://www.guvi.in/blog/backend-development-roadmap/",
      date: "Aug 27, 2024",
      author : "By Meghana D"
    },
    {
      title: "Top 10 Product-Based Companies for Full-Stack Developers [2024]",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp",
      link: "https://www.guvi.in/blog/product-based-companies-for-full-stack-developers/",
      date: "Aug 27, 2024",
      author : "By Isha Sharma"
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

export default FSD