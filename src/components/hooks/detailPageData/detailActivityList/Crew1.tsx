import React, { useState, useEffect } from "react";
import axios from "axios";

export const useDetailActivities = () => {
  const [detailActivities, setDetailActivities] = useState([]); //원하는 정보를 API에서 useState로 받아오기.
  const [loading, setLoading] = useState(false); //기본설정
  const [error, setError] = useState(false); //기본설정
  const fetchData = async () => {
    //fetchData는 말그대로 API의 Data를 받아오는것.
    setError(false);
    setLoading(true);
    try {
      const detailActivitiesData = await axios
        .get("https://globud.co.kr/api/activities/?crew=1")
        .then((response) => {
          console.log(response);
          return response.data;
        })
        .catch((error) => {
          console.log(error);
        });
      setDetailActivities(detailActivitiesData);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  ``;

  useEffect(() => {
    fetchData();
  }, []);

  return { detailActivities, loading, error, fetchData }; // fetchDate는 함수니까 실제 배열인 candidateList도 같이 넘겨줘야된다.
};
