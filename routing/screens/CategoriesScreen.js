import { FlatList } from "react-native"
import { CATEGORIES } from "../data/dummy-data"
import CategoryGridTile from "../components/CategoryGridTile"



export default function CategoriesScreen({ navigation }) {

    const renderCategory = ({ item }) => {
        const handleTilePress = () => {
            navigation.navigate('MealsOverview', {
                categoryId: item.id
            });
        }
        return <CategoryGridTile title={item.title} color={item.color} onPress={handleTilePress} />
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategory}
            numColumns={2}
        >

        </FlatList>
    )
}
