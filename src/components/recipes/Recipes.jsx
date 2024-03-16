import { useState } from "react";
import SectionHeader from "./../SectionHeader";
import InfoHeader from "./InfoHeader";
import InfoTable from "./InfoTable";
import RecipesCard from "./RecipesCard";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [wantToCook, setWantToCook] = useState([]);
  const [wantToCookData, setWantToCookData] = useState([]);
  const [currentlyCooking, setCurrentlyCooking] = useState([]);

  const notify = () =>
    toast.error("You Have Already wanted to Cook This item!");

  useEffect(() => {
    fetch("fakeData.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  useEffect(() => {
    console.log("this is count", wantToCook.length);
    if (wantToCook.length) {
      for (const id of wantToCook) {
        const recipe = recipes.find((item) => item.recipe_id === id);

        if (recipe) {
          const newCookData = [...wantToCookData, recipe];
          setWantToCookData(newCookData);
          setWantToCook([]);
        }
      }
    }
  }, [wantToCook]);

  const handleWantToCook = (id) => {
    const cooked = wantToCookData.find((data) => data.recipe_id == id);
    const cooked2 = currentlyCooking.find((data) => data.recipe_id == id);
    if (!cooked && !cooked2) {
      const newCook = [...wantToCook, id];
      setWantToCook(newCook);
    } else {
      notify();
    }
  };
  console.log(wantToCookData);

  const handlePreparingRecipes = (data) => {
    const cooked = currentlyCooking.find(
      (newData) => newData.recipe_id == data.recipe_id
    );
    if (!cooked) {
      const newCook = [...currentlyCooking, data];
      setCurrentlyCooking(newCook);

      // const wantToCookDataId = wantToCookData.find(
      //   (data) => data.recipe_id == data.recipe_id
      // );

      setWantToCookData(
        wantToCookData.filter(
          (wannaCook) => wannaCook.recipe_id != data.recipe_id
        )
      );
    } else {
      notify();
    }
  };
  const totalCalories = currentlyCooking.reduce((total, item) => {
    return total + item.calories;
  }, 0);

  const totalTime = currentlyCooking.reduce((total, item) => {
    return total + item.preparing_time;
  }, 0);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} backgr />
      <div className="mt-20 h-[2000px]">
        <SectionHeader
          title={"our Recipie"}
          description={
            "Lorem ipsum dolor sit amet consectetur. Proifeugiat senectus vulputate netus pharetra rhoncus. Egeturna volutpat curabitur elementum mauris aenean neque. "
          }
        ></SectionHeader>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mt-14">
          {/* Left Side */}
          <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {recipes.map((recipe) => (
              <RecipesCard
                key={recipe.recipe_id}
                recipe={recipe}
                handleWantToCook={handleWantToCook}
              ></RecipesCard>
            ))}
          </div>
          {/* Right Side */}
          <div className="col-span-2">
            <div className=" border border-gray-300 rounded-3xl ">
              <InfoHeader
                title={"Want To Cook Data: " + wantToCookData.length}
              ></InfoHeader>

              <div className="overflow-x-auto mb-8">
                <table className="table">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Time</th>
                      <th>Calories</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {wantToCookData.length > 0 ? (
                      wantToCookData.map((recipeData) => (
                        <InfoTable
                          key={recipeData.recipe_id}
                          recipeData={recipeData}
                          handlePreparingRecipes={handlePreparingRecipes}
                        />
                      ))
                    ) : (
                      <tr>
                        <td>No recipes to display</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              <InfoHeader
                title={"Want To Cook Data: " + currentlyCooking.length}
              ></InfoHeader>
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="">
                  {currentlyCooking.length > 0 ? (
                    currentlyCooking.map((recipeData) => (
                      <InfoTable
                        key={recipeData.recipe_id}
                        recipeData={recipeData}
                      />
                    ))
                  ) : (
                    <tr>
                      <td>No recipes to display</td>
                    </tr>
                  )}
                </tbody>
              </table>
              <div className="flex justify-between px-4 mb-8">
                <h1>Total Time = {totalTime} minutes</h1>
                <h1> Total Calories = {totalCalories} calories</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipes;
