import React from "react";
import { useQuery } from "react-query";
import http from "./httpService";

export default function useGetCategories(isExpense) {
  return useQuery(
    ["transaction-category/", { transaction_type: isExpense ? "EX" : "IN" }],
    {
      placeholderData: {
        categories: [],
      },
      keepPreviousData: true,
    }
  );
}
