import axios from "axios";

class FoodsApi {
    constructor () {
        this.api = axios.create({ baseURL: "https://www.themealdb.com/api/json/v1/1" });
    };
    getCategories = async () => {
        try {
            const { data: { categories } } = await this.api.get("/categories.php");

            return categories;
        } catch (error) {
            throw new Error(`Cannot Fetch Categories => ${error}`);
        }
    };

    getByCategory = async category => {
        try {
            const { data: { meals } } = await this.api.get(`/filter.php?c=${category}`);
            
            return meals;
        } catch (error) {
            throw new Error(`Cannot Fetch ${await category.strCategory} => ${error}`);
        };
    };

    fetchRecipe = async id => {
        try {
            const { data: { meals } } = await this.api.get(`/lookup.php?i=${id}`);

            return meals[0];
        } catch (error) {
            throw new Error(`Cannot Fetch recipe => ${error}`);
        };
    };

    getIngredients = async meal => {
        try {
            const ingredients = [];
            for (let i = 1; i <= 20; i += 1) {
                const measure = await meal[`strMeasure${i}`].toLowerCase();
                const ingredient = await meal[`strIngredient${i}`].toLowerCase();
                const notEmpty = (await measure !== "") && (await ingredient !== "");
                const notNull = (await measure !== null) && (await ingredient !== null);

                if (notEmpty && notNull) {
                    ingredients.push({id: i, text: `${await measure} ${await ingredient}`})
                };
            };

            return ingredients;
        } catch (error) {
            throw new Error(`Cannot Fetch ingredients => ${error}`);
        };
    };

    getInstructions = async meal => {
        try {
            return await meal.strInstructions.split(/\r?\n/)
                .filter(instruction => instruction !== "")
                    .map((instruction, i) => {return { id: i + 1, paragraph: instruction }});
        } catch (error) {
            throw new Error(`Cannot Fetch instructions => ${error}`);
        };
    };
};

const foodsApi = new FoodsApi();
export default foodsApi;