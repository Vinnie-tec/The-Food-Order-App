import React, { useEffect, useState } from "react";
import { Card } from "../UI/Card";

import styling from "./AvailableMeals.module.css";
import MealItem from "./MealItems/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const res = await fetch(
        "https://react-task-75c8b-default-rtdb.firebaseio.com/Meals.json"
      );

      if (!res.ok) {
        throw new Error('Something went wrong')
      }


      const responseData = await res.json();
      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message)
    });

  }, []);

  if (isLoading) {
    return (
      <section className={styling.mealsLoading}>
        <p>Loading</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={styling.noMealsError}>
        <p>{httpError}</p>
      </section>
    )
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      // or having something like
      // meal={meal} ........ so that in the file accessing it, it will be props.meal.name, props.meal.price;
    />
  ));

  return (
    <section className={styling.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
