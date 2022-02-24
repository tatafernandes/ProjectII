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
            throw new Error(`Cannot Fetch ${category} => ${error}`);
        };
    };
};

const foodsApi = new FoodsApi();
export default foodsApi;