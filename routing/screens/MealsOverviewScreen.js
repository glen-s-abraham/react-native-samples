import { FlatList, StyleSheet, Text, View } from 'react-native'
import { MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem';
export default function MealsOverviewScreen({ route }) {
    const { categoryId } = route.params;
    const mealsToDisplay = MEALS.filter(({ categoryIds }) => categoryIds.includes(categoryId));
    const renderMealItem = ({item})=>{
        return (
          <MealItem title={item.title}/>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList 
            data={mealsToDisplay}
            keyExtractor={(item)=>item.id}
            renderItem={renderMealItem}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})
