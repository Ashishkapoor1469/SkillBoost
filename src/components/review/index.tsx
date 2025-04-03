import Card from "./card";

const Review: React.FC = () => {
  const Data = [
    {
      name: "Sahil Jaryal",
      skill: "Web Development",
      dis: "This course helped me land my dream job as a web developer! The instructors were knowledgeable and provided hands-on projects that made learning enjoyable. I was able to build a strong portfolio that impressed my employers. The community support was also incredible, and I made lifelong connections with fellow learners.",
    },
    {
      name: "Aditi Sharma",
      skill: "UI/UX Design",
      dis: "The UI/UX course was amazing! I learned so much and improved my skills. The curriculum was well-structured, covering everything from wireframing to prototyping. The real-world case studies gave me a deep understanding of user-centered design. I now feel confident in my ability to create intuitive and visually appealing designs.",
    },
    {
      name: "Rohan Mehta",
      skill: "Digital Marketing",
      dis: "The digital marketing course gave me the tools to grow my business online. I learned about SEO, social media marketing, and analytics in great detail. The practical assignments helped me apply the concepts immediately to my business. Thanks to this course, my online presence has grown significantly, and I’ve seen a noticeable increase in sales.",
    },
    {
      name: "Priya Kapoor",
      skill: "Data Science",
      dis: "The data science course was a game-changer for me. It covered everything from Python programming to machine learning algorithms. The hands-on projects were challenging but rewarding, and they helped me understand complex concepts easily. I now work as a data analyst at a top company, and I owe it all to this course.",
    },
    {
      name: "Arjun Verma",
      skill: "Cybersecurity",
      dis: "The cybersecurity course was incredibly detailed and practical. It taught me how to identify vulnerabilities, secure networks, and respond to cyber threats. The instructors were industry experts who shared valuable insights. I now feel equipped to handle real-world cybersecurity challenges with confidence.",
    },
  ];
  return (
    <>
      <main className="min-h-screen mt-15 min-w-screen">
        <div className="cont w-full flex flex-col justify-center items-center">
          <h1 className="md:text-5xl font-bold text-4xl text-center">
            What Our Students Say
          </h1>
          <p className="text-gray-500 font-light text-center p-2">
            Hear form our student have transformed their careers with our
            courses
          </p>
        </div>
        <div className="w-full flex justify-center mt-16">
        <div className="md:w-9/12 h-full justify-center flex gap-4 flex-wrap">
       {Data.map((name,index)=>{
        return <div key={index}><Card
        name={name.name}
        skill={name.skill}
        dis={name.dis}
      /></div>
       })} 
        </div>
        </div>
      </main>
    </>
  );
};
export default Review;