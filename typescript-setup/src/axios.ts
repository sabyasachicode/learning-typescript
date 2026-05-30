import axios, { type AxiosResponse } from "axios";

interface dummyData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchData = async () => {
  try {
    const response: AxiosResponse<dummyData> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    console.log("Data", response.data);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error('Error Message:', error.message);
      if (error.response) {
        console.error("Error:", error.status);
        
      }
    }
  }
};

fetchData();

// {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }
