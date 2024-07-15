import { useEffect, useState } from "react";

// Custom Hook: function which conatins other hooks in order to create reusable logic that requires other built in hooks
// In this example, this logic was created as custom hook, since this can be reused by App and AvailablePlaces components, making their code cleaner
// hook name must begin with 'use' as convention and be treaten as a hook. More info -> 244 https://deloittedevelopment.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/39837048#notes
export function useFetch(fetchFn, dataInitialValue) {
    // Note that the state declared in a custom hook, is treaten as usual component states for components that import and use this hook
    // So when this states get updated, such components will get re-executed
    const [fetchedData, setData] = useState(dataInitialValue); // We initiate the initial value as argument in order to make this hook more configurable
    const [isFetching, setIsFetching] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchPlaces() {
          setIsFetching(true);
          try {
            const data = await fetchFn();
            setData(data);
          } catch (error) {
            setError({ message: error.message || 'Failed to fetch data' });
          }
    
          setIsFetching(false);
        }
    
        fetchPlaces();
      }, []);

      // We need to return the state values in order to make them available for the importing component
      return {
        fetchedData,
        isFetching,
        error,
        setData
      };
}