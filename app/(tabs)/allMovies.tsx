import {FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch' 
import Movie from '../../components/Movie';

interface Review {
  username: string;
  review: string;
  rating: number;
}

interface Movie {
  id: string;
  title: string;
  poster: string;
  description: string;
  category: string;
  duration: number;
  rating: number;
  reviews: Review[];
}


export default function AllMovies(){
    
     const { data } = useFetch('http://192.168.1.7:3000/movies');
     console.log(data);
     const movies: Movie[] = (data as any) ?? [];
     return (
    <FlatList
      data={movies}
      renderItem={({ item }) => (
        <Movie
          title={item.title}
          poster={item.poster}
          description={item.description}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
}