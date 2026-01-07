import { useState } from "react";
import { createUseStyles } from "react-jss";
import style from "./Style";
import BackupImage from './alternate.png';
import Recipe from './Recipe';

function RecipeCard({ recipe }) {
  const classes = createUseStyles(style)();
  const [useImage, setImage] = useState(recipe.image);
  const [popupVisible, setPopupVisiblity] = useState(false);
  const cookTime = formatTime(recipe.cookTime);
  const prepTime = formatTime(recipe.prepTime);

  const backupImage = (e) => {
    // Dynamically create a placeholder with the recipe name
    e.target.src = `https://placehold.co/600x400?text=${encodeURIComponent(
      recipe.name
    )}`;
  };

  const setPopupTrue = () => setPopupVisiblity(true);

  const productPopup = (
    <Recipe setPopup={setPopupVisiblity} recipe={recipe} />
  );

  return (
    <div className={classes.recipeCard}>
      <img
        className={classes.recipeImage}
        src={useImage}
        alt={recipe.name}
        onError={backupImage}
      />
      <div className={classes.recipeText}>
        <h3 className={classes.recipeName}> {recipe.name} </h3>
        <p>
          <b>Cook Time: </b>
          {cookTime}
          <br />
          <b>Prep Time: </b>
          {prepTime}
          <br />
          <b>Yield: </b>
          {recipe.recipeYield}
        </p>
        <button onClick={setPopupTrue}> Detailed View
        </button>
        {popupVisible ? productPopup : ""}
      </div>
    </div>
  );
}

const formatTime = (duration) => {
  if (!duration) {
    return "N/A"; // catch null values
  }
  const hourMatch = duration.match(/(\d+)H/);
  const minuteMatch = duration.match(/(\d+)M/);

  const hours = hourMatch ? hourMatch[1] : 0;
  const minutes = minuteMatch ? minuteMatch[1] : 0;

  if (hours > 0 && minutes > 0) return `${hours}h ${minutes}m`;
  if (hours > 0) return `${hours}h`;
  if (minutes > 0) return `${minutes}m`;
  return "N/A";
};

export default RecipeCard;
