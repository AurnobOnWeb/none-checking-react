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
        }
      }
    }
  }, [wantToCook]);
  console.log(wantToCookData);
  const handleWantToCook = (id) => {
    if (!wantToCook.includes(id)) {
      const newCook = [...wantToCook, id];
      setWantToCook(newCook);
    } else {
      notify();
    }
  };
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
                        />
                      ))
                    ) : (
                      <p>No recipes to display</p>
                    )}
                  </tbody>
                </table>
              </div>

              <InfoHeader title={"Currently cooking: 02"}></InfoHeader>
              <InfoTable></InfoTable>
              <div className="flex justify-between px-4 mb-8">
                <h1>Total Time = 45 minutes</h1>
                <h1> Total Calories = = 1050 calories</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipes;
