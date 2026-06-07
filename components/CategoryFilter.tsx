import {ScrollView, TouchableOpacity, Text} from 'react-native';


const Categories = ['Acción', 'Comedia', 'Drama', 'Terror', 'Sci-Fi'];

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