import axios from "axios";

export async function getData() {
    const data = await axios.get('https://api.hatchways.io/assessment/students');
    return data.data
}