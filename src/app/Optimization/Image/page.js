import Image from "next/image";
import Pict from "../../../public/nature.png";
// Image Optimization
export default function Asset() {
  //   console.log(Pict);
  return (
    <div>
      <h1>Image Optimization</h1>
      <Image src={Pict}alt="Not Loaded" />
      {/* <img src={Pict} width={300} height={200} alt="Not Loaded" /> */}
    </div>
  );
}

// img ka size screen size bdaane pr bdta rehta hai on the other hand Image (nextjs) waali intact rehti hai
// nextjs image waali component pr lazy load and other feature addon krta hai
// nextjs security bhi provide krta hai (you have to register domains )


export function generateMetadata() {
  return (
    title:"Image Optimization",
    description:"Optimizing Image using next/image (Image Component)"
  )
}