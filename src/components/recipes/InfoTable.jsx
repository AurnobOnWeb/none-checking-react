import RegularButton from "../button/RegularButton";

// eslint-disable-next-line react/prop-types
const InfoTable = ({ recipeData, handlePreparingRecipes }) => {
  let recipe_name, preparing_time, calories;

  if (recipeData) {
    // Destructure properties from recipeData
    ({ recipe_name, preparing_time, calories } = recipeData);
  }

  return (
    <>
      <tr className="bg-base-200 ">
        <th></th>
        <td>{recipe_name}</td>
        <td>{preparing_time} min</td>
        <td>{calories} calories</td>
        <td>
          {handlePreparingRecipes ? (
            <RegularButton
              onClick={() => handlePreparingRecipes(recipeData)}
              title={"Preparing"}
              className={
                "bg-green-500 text-black border-none hover:bg-green-400"
              }
            ></RegularButton>
          ) : (
            ""
          )}
        </td>
      </tr>
    </>
  );
};

export default InfoTable;
