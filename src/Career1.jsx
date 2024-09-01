import React from 'react'

const Career1 = () => {
  const cardData = [
    {
      title: "Minimalism in UI/UX Design: Role and Importance for Design Career",
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Minimalism-in-UIUX-Design-Role-and-Importance-for-Design-Career.webp",
      link: "https://www.guvi.in/blog/minimalism-in-ui-ux-design/",
      author : "By Meghana D",
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
      title: "How To Switch Career In UI/UX Design? Easy or Hard? [2024]",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/12/how_to_switch_to_a_career_in_ui_ux_design_.webp",
      link: "https://www.guvi.in/blog/how-to-switch-career-in-ui-ux-design/",
      date: "Aug 30, 2024",
      author : "By Srinithi Sankar"
    },
    {
      title: "Top 12 Career Opportunities for UI/UX Design",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/UX-1536x804.webp",
      link: "https://www.guvi.in/blog/top-career-opportunities-for-ui-ux-design/",
      date: "Aug 30, 2024",
      author : "By Srinithi Sankar"
    },
    {
      title: "UI/UX Salary Guide 2024: Is it a High-Paying Career?",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/12/ui_ux_salary_guide_is_it_a_high_paying_career_feature_image.webp",
      link: "https://www.guvi.in/blog/ui-ux-designer-salary-in-india/",
      date: "Aug 30, 2024",
      author : "By Srinithi Sankar"
    },
    {
      title: "Career Opportunities in Web Development",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Career-Opportunities-in-Web-Development.webp",
      link: "https://www.guvi.in/blog/career-opportunities-in-web-development/",
      date: "Aug 23, 2024",
      author : " By Meghana D"
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

export default Career1