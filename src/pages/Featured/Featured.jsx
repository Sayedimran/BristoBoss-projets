
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import featuredimg from "../../../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="featured-item bg-fixed  text-white mt-8 my-20">
      <SectionTitle heading={"check it out"} subHeading={"Featured Item"} />
      <div className="md:flex  gap-8 pb-20 pt-12 px-36 justify-center  bg-slate-500/50  items-center">
        <div>
          <img  src={featuredimg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20 , 2029</p>
          <p className="uppercase"> Where Can i get some? </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            reprehenderit unde explicabo cupiditate iste consequuntur aut eaque
            iure. Impedit quod ducimus quos fugiat recusandae eius excepturi, ab
            eos perferendis dicta!
          </p>

          <button className="btn btn-outline rounded-lg border-0 border-b-4"> Order Now </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
