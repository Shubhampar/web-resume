import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { MdLiveTv } from "react-icons/md";
import ToggleComponent from "./ToggleComponent";
import { useSelector } from "react-redux";

const spartanKey = {
  heading: "Key features",
  val: [
    "Sorting",
    "Search",
    "Filtering",
    "EMI calculator",
    "Single Property page",
    "Individual Property Page",
  ],
};

const spartanTech = {
  heading: "Tech Stack",
  val: ["HTML", "CSS", "JavaScript", "React", "Chakra UI", "Axios","MongoDB","Express","node"],
};

const Spartan = () => {
  const theme = useSelector((s) => s.themeReducer.value);
  return (
    <div>
      <div
        style={{
          color: theme.RtextColor,
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          padding: "10px",
        }}
        className="mt-3"
      >
        {/* head of project  */}
        <Link target="_blank" href="https://stalwart-fairy-7587d7.netlify.app/">
          <h1 className="text-base font-bold text-white">
            {"Zillow Clone (Bricks99)"}
          </h1>
        </Link>
        {/* body of project  */}
        <div className="mt-2">
          <div className="text-sm">
            <p>
            Briks99 is an Indian online real estate marketplace which is a subsidiary of Zillow. It facilitates buyers and renters to find homes and neighborhoods across the United States through recommendations, local insights, and map overlays that offer details on commutes, schools, churches.
            </p>
            <p>It is an Collaborative project build in a span of 5 days</p>
          </div>
          <div>
            <div className="mt-2">
              <ToggleComponent {...spartanKey} />
            </div>
            <div className="mt-2">
              <ToggleComponent {...spartanTech} />
            </div>
          </div>
        </div>
        {/* footer  */}
        <div className="flex justify-around mt-2 border-gray-600 border-spacing-1">
          <div className="flex flex-col items-center hover:cursor-pointer">
            <Link target="_blank" href="https://github.com/Shubhampar/enormous-library-3081-RealEstate-Marketplace-App-.git">
              <BsGithub color={theme.iconColor} size="20px" />
            </Link>
            <p className="font-bold text-xs">GitHub</p>
          </div>
          <div className="flex flex-col items-center hover:cursor-pointer">
            <Link
              target="_blank"
              href="https://stalwart-fairy-7587d7.netlify.app/"
            >
              <MdLiveTv color={theme.iconColor} size="20px" />
            </Link>
            <p className="font-bold text-xs">Live</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Spartan };
