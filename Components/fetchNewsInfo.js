import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import options from "../config";
export default function fetchNewsInfo() {
  // const options = {
  //   method: "POST",
  //   headers: {
  //     // 'X-RapidAPI-Key': '3237c553e5mshde123631b52135cp166f44jsn5c0fc8607fce',
  //     "X-RapidAPI-Key": "657a931109mshf4f8a24bbadc8d3p18d290jsn448ebbfa3f25",
  //     "X-RapidAPI-Host": "yh-finance.p.rapidapi.com",
  //   },
  // };
  let newsInfo = [];

  fetch(
    "https://yh-finance.p.rapidapi.com/news/v2/list?region=US&snippetCount=5",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      for (let i = 0; i < 5; i++) {
        let title = response.data.main.stream[i].content.title;
        let pubDate = response.data.main.stream[i].content.pubDate;
        let provider =
          response.data.main.stream[i].content.provider.displayName;
        let img =
          response.data.main.stream[i].content.thumbnail.resolutions[0].url;
        let id = response.data.main.stream[i].content.id;
        newsInfo[i] = [id, title, pubDate, provider, img];
      }
      //   console.log("Inside: ", newsInfo);
    })
    .catch((err) => console.error(err));
  //   console.log("NewsInfo: ", newsInfo);
  return newsInfo;
}
