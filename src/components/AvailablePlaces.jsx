import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../http.js';
import { useFetch } from '../hooks/useFetch.js';

/*navigator.geolocation.getCurrentPosition((position) => {
  const sortedPlaces = sortPlacesByDistance(
    places,
    position.coords.latitude,
    position.coords.longitude
  );
  setAvailablePlaces(sortedPlaces);
  setIsFetching(false);
});*/

export default function AvailablePlaces({ onSelectPlace }) {

  // Now we make use of useFetch custom hook from another component
  // Note that the state values declared in the custom hook are different for every importing component
  // That is, every component has it's own state value snapshot and state change in one, doesn't impact state in other importing component
  const {fetchedData: availablePlaces,
    isFetching,
    error,
    setData: setAvailablePlaces} = useFetch(fetchAvailablePlaces, []);

  if (error) {
    return <Error title="An error occurred!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
