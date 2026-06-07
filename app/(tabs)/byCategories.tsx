import { useState } from 'react';
import { FlatList, View } from 'react-native';
import useFetch from '../../hooks/useFetch';
import Movie from '../../components/Movie';
import CategoryFilter from '../../components/CategoryFilter';


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

interface MoviesData {
  movies: Movie[];
}

export default function byCategories() {
    const { data } = useFetch('http://192.168.1.7:3000/movies');
    const [selectCategory, setSelectCategory] = useState('Action');
    const movies: Movie[] = ((data as any) ?? []).filter((movie: Movie) => movie.category === selectCategory);

    
    return(
        <View>
            <CategoryFilter selectedCategories={selectCategory} onSelect={setSelectCategory} />
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
        </View>
    )
}