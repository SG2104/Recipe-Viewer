import { createUseStyles } from "react-jss";
import style from "./Style";
import BackupImage from './alternate.png';

function Recipe({ setPopup, recipe }) {
  const classes = createUseStyles(style)();

  const backupImage = (e) => {
    e.target.src = `https://placehold.co/600x400?text=${encodeURIComponent(
      recipe.name
    )}`;
  };

  const hide = () => {
    setPopup(false);
  };

  return (
    <div className={classes.popupWindow}>
      <div className={classes.recipeCard2}>
        <button className={classes.xButton} onClick={hide}>
          X
        </button>
        <img className={classes.recipeImage} src={recipe.image} alt={recipe.name} onError={backupImage} />
        <h3> {recipe.name} </h3>
        <p> <b>Cook Time:</b> {formatTime(recipe.cookTime)}  </p>
        <p> <b>Prep Time: </b>{formatTime(recipe.prepTime)} </p>
        <p> <b>Yield: </b>{recipe.recipeYield} </p>
        <p> {recipe.description}</p>

        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const formatTime = (duration) => {
  if (!duration) return "N/A";
  const hourMatch = duration.match(/(\d+)H/);
  const minuteMatch = duration.match(/(\d+)M/);

  const hours = hourMatch ? hourMatch[1] : 0;
  const minutes = minuteMatch ? minuteMatch[1] : 0;

  if (hours > 0 && minutes > 0) return `${hours}h ${minutes}m`;
  if (hours > 0) return `${hours}h`;
  if (minutes > 0) return `${minutes}m`;
  return "N/A";
};
export default Recipe;