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
      title: "8 Exciting Project Ideas for Final Year B Tech Students [2024]",
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-Image.webp",
      link: "https://www.guvi.in/blog/project-ideas-for-final-year-b-tech-students/",
      date: "Aug 23, 2024",
      author : "By Lukesh S",
    },
    {
      title: "On-demand Civil Engineering Project Ideas That You Shouldn’t Miss [2024]",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Civil-Engineering-Project-Ideas.webp",
      link: "https://www.guvi.in/blog/civil-engineering-project-ideas/",
      date: "Aug 22, 2024",
      author : "By Meghana D"
    },
    {
      title: "Top 100+ Manual Testing Interview Questions and Answers",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Manual-Testing-Interview-Questions-and-Answers.webp",
      link: "https://www.guvi.in/blog/manual-testing-interview-questions-and-answers/",
      date: "Jul 23, 2024",
      author : "By Isha Sharma"
    },
    {
      title: "15 Best Mechanical Engineering Project Ideas in 2024",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/09/0_feature_image-1536x596.webp",
      link: "https://www.guvi.in/blog/mechanical-engineering-project-ideas/",
      date: "Jul 23, 2024",
      author : "By Meghana D"
    },
    {
      title: "Top 10 UI/UX Project Ideas for Beginners",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/ui-ux-project-ideas-for-beginners-1536x804.webp",
      link: "https://www.guvi.in/blog/top-10-ui-ux-project-ideas-for-beginners/",
      date: "Aug 30, 2024",
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