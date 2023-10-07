import React from "react";
import { Inter } from "next/font/google";
import { Parallax, Background } from "react-parallax";
import BackgroundPhoto from "../media/download.png";
import "../Style/MainStyle.css";
import { useRouter } from "next/navigation";
const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

export default function Main() {
  const router=useRouter();
  const imageUrl = BackgroundPhoto.src;
  return (
    <Parallax
      className="home-background" 
      bgImage={imageUrl}
      bgClassName="home-background"
      strength={600}
    >      
      <div className="home-title">
        Skincare.ai <br />
        <div className="home-description ">
          Worried about skin issues?
          <br />
        </div>
        <br />
      </div>
      <div className="home-button-div">
        <button className="home-button " onClick={e => router.push('/main')}>Get started →</button>
      </div>
    </Parallax>
  );
}
