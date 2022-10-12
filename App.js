import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigator from "./navigation/RootStackNavigator";
import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";

const defaultQueryFn = async ({ queryKey }) => {
  const { data } = await axios.get(queryKey[0], { params: queryKey[1] });
  console.log(data);
  return data;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
      staleTime: 300000,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
