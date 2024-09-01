import React from 'react'

const CyberSecurity = () => {
  const cardData = [
    {
      title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      image: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1536x864.png",
      link: "https://www.guvi.in/blog/difference-between-cybersecurity-and-ethical-hacking/",
      author : "By Tushar Vinocha",
      date: "Apr 16, 2024",
    },
    {
      title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      link: "https://www.guvi.in/blog/top-non-coding-jobs-in-cybersecurity/",
      date: "Mar 26, 2024",
      author : "By Jaishree Tomar",
    },
    {
      title: "8 Different Types of Cybersecurity and Threats Involved",
      image: "https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-1536x864.png",
      link: "https://www.guvi.in/blog/types-of-cybersecurity/",
      date: "Sep 08, 2023",
      author : "By Tushar Vinocha"
    },
    {
      title: "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
      image: "https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
      link: "https://www.guvi.in/blog/what-is-cybersecurity/",
      date: "Oct 04, 2023",
      author : "By Tushar Vinocha"
    },
    {
      title: "The Ultimate Cybersecurity Roadmap for Beginners",
      image: "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
      link: "https://www.guvi.in/blog/cybersecurity-jobs-the-ultimate-beginners-guide-with-roadmap/",
      date: "Mar 23, 2024",
      author : "By Srinithi Sankar"
    },
    {
      title: "Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
      image: "https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif",
      link: "https://www.guvi.in/blog/coding-for-cybersecurity/",
      date: "Mar 25, 2024",
      author : "By Tushar Vinocha"
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

export default CyberSecurity