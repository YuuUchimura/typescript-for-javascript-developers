import axios from "axios";

export {};

interface ResData {
  id: number;
  title: string;
  description: string;
}

let url: string =
  "https://udemy-utils.herokuapp.com/api/v1/articles?token=token123";

axios.get(url).then((res) => {
  let data: ResData[] = res.data;
  console.log(data);
});
