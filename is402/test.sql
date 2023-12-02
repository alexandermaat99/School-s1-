SELECT 
recipe_classes.  RecipeClassDescription ,
  r1  .  RecipeTitle ,
r1.IngredientName,
r1.RecipeSeqNo,
r1.Amount,
r1.MeasurementDescription 
FROM
(recipe_classes
LEFT JOIN (SELECT 
    recipes.RecipeTitle,
        ingredients.IngredientName ,
        recipe_ingredients.RecipeSeqNo ,
        recipe_ingredients.Amount,
        measurements.MeasurementDescription,
        recipes.RecipeClassID
FROM
    (((recipes
JOIN recipe_ingredients ON ((recipes.RecipeID = recipe_ingredients.RecipeID)))
JOIN measurements ON ((measurements.MeasureAmountID = recipe_ingredients.MeasureAmountID)))
JOIN ingredients ON ((ingredients.IngredientID = recipe_ingredients.IngredientID)))) R1 ON ((recipe_classes.RecipeClassID = r1.RecipeClassID))) 
UNION SELECT 
r2.RecipeClassDescription,
r2.RecipeTitle,
ingredients.IngredientName ,
r2.RecipeSeqNo,
r2.Amount ,
r2.MeasurementDescription 
FROM
(ingredients
LEFT JOIN (SELECT 
    recipe_classes.RecipeClassDescription,
        recipes.RecipeTitle,
        recipe_ingredients.RecipeSeqNo,
        recipe_ingredients.Amount,
        measurements.MeasurementDescription,
        recipe_ingredients.IngredientID
FROM
    (measurements
JOIN ((recipe_classes
JOIN recipes ON ((recipe_classes.RecipeClassID = recipes.RecipeClassID)))
JOIN recipe_ingredients ON ((recipes.RecipeID = recipe_ingredients.RecipeID))) ON ((measurements.MeasureAmountID = recipe_ingredients.MeasureAmountID)))) R2 ON ((ingredients.IngredientID = r2.IngredientID)))
WHERE
(r2.RecipeTitle IS NULL)
ORDER BY RecipeClassDescription DESC , RecipeTitle , IngredientName;
