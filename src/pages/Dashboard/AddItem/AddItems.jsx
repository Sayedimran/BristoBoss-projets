import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { IoFastFood } from "react-icons/io5";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    //    image upload to imgbb and then get an url
    const imagFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imagFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);
  };

  return (
    <div>
      <SectionTitle heading={"Add an items"} subHeading={"what's new"} />

      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="mx-4">
          <fieldset className="fieldset my-3 ">
            <legend className="fieldset-legend"> Recipe Name</legend>
            <input
              {...register("name", { required: true })}
              required
              type="text"
              className="input w-full rounded-lg"
              placeholder="Recipe Name"
            />
          </fieldset>

          <div
            className="flex gap-6
            w-full"
          >
            {/* category */}

            <fieldset className="fieldset w-full my-3">
              <legend className="fieldset-legend"> Category</legend>
              <select
                {...register("category", { required: true })}
                defaultValue="default"
                className="select w-full rounded-lg"
              >
                <option disabled={true} value="default">
                  Select a category{" "}
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="desert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </fieldset>

            {/* Price */}

            <fieldset className="fieldset w-full my-3">
              <legend className="fieldset-legend"> Price*</legend>
              <input
                {...register("price", { required: true })}
                type="number"
                className="input  w-full rounded-lg"
                placeholder="REcipe Name"
              />
            </fieldset>
          </div>
          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend">Your bio</legend>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea w-full rounded-lg h-24"
              placeholder="Recipe Details"
            ></textarea>
            <div className="label">Optional</div>
          </fieldset>

          <div className="my-2">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input  w-full   rounded-lg  "
            />
          </div>

          <button className="btn rounded-lg mt-5">
            Add Item <IoFastFood />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
