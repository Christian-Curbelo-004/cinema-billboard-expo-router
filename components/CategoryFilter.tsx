import {ScrollView, TouchableOpacity, Text, StyleSheet} from 'react-native';

const Categories = ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Romance'];

interface Props {
    selectedCategories: string;
    onSelect: (category: string) => void;
}

export default function CategoryFilter({selectedCategories, onSelect}: Props) {
    return(
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Categories.map(category => (
                <TouchableOpacity key={category} onPress={() => onSelect(category)} style={[styles.categoryButton, selectedCategories === category && styles.selectedCategoryButton]} >
                    <Text style={[styles.categoryButtonText, selectedCategories === category && styles.selectedCategoryButtonText]}>{category}</Text>
            
                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}
const styles = StyleSheet.create({
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 4,
    borderRadius: 20,
    backgroundColor: '#eee',
  },
  selectedCategoryButton: {
    backgroundColor: '#f4511e',
  },
  categoryButtonText: {
    color: '#333',
  },
  selectedCategoryButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});