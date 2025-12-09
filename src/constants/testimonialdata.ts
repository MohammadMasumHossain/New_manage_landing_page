export type Data ={
    id:number;
    name:string;
    testimonial:string;
    image:string;
}
import anishaimg from "../assets/avatar-anisha.png";
import aliimg from "../assets/avatar-ali.png";
import richardimg from "../assets/avatar-richard.png";
import shanaiimg from "../assets/avatar-shanai.png";


export const data = [
    {
      id: 1,
      name: "Anisha Li",
      testimonial:
        "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
      image: anishaimg,
    },
    {
      id: 2,
      name: "Ali Bravo",
      testimonial:
        "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
      image: aliimg,
    },
    {
      id: 3,
      name: "Richard Watts",
      testimonial:
        "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
      image: richardimg,
    },
    {
      id: 4,
      name: "Shanai Gough",
      testimonial:
        "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
      image: shanaiimg,
    },
  ];