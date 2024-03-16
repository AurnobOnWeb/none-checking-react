/* eslint-disable react/prop-types */

import RegularButton from "../button/RegularButton";
import { IcRoundWatchLater } from "../icons/IcRoundWatchLater";
import { LetsIconsCalories } from "../icons/LetsIconsCalories";

const RecipesCard = ({ recipe, handleWantToCook }) => {
  const {
    recipe_id,
    recipe_name,
    recipe_image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;

  return (
    <div className="card p-6 bg-base-200 shadow-xl space-y-6 font-firaSan">
      <figure>
        <img
          src={recipe_image}
          alt="Shoes"
          className="rounded-xl h-56 w-full"
        />
      </figure>
      <h1 className="font-lexend text-black font-semibold">{recipe_name}</h1>
      <p className="text-gray-500">{short_description}</p>
      <hr className="border border-gray-200" />
      <h3 className="font-lexend text-black font-semibold">
        Ingredients: {ingredients.length}
      </h3>
      <ul className="list-disc px-8 text-gray-500">
        {ingredients.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <hr className="border border-gray-200" />

      <div className="flex gap-6">
        <div className="flex items-center gap-2">
          <IcRoundWatchLater></IcRoundWatchLater>
          {preparing_time} min
        </div>
        <div className="flex items-center">
          <LetsIconsCalories></LetsIconsCalories> {calories} calories
        </div>
      </div>
      <div className="mt-4">
        <RegularButton
          title={"Want to Cook"}
          className={"bg-green-500 text-black border-none hover:bg-green-400"}
          onClick={() => handleWantToCook(recipe_id)}
        ></RegularButton>
      </div>
    </div>
  );
};

export default RecipesCard;
