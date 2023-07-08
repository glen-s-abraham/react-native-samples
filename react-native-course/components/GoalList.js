import React from 'react'
import { StyleSheet,FlatList,View } from 'react-native'
import GoalItem from './GoalItem'

export default function GoalList({goalsList,onDeleteGoal}) {
    return (
        <View style={styles.goalsContainer}>
            {/*not good in dynamically generated lists <ScrollView>
                {renderedGoals}
            </ScrollView> */}
            <FlatList data={goalsList}
                renderItem={itemData => <GoalItem item={itemData.item} onDeleteGoal={onDeleteGoal}/>}
                keyExtractor={(item, i) => item.id}
                alwaysBounceVertical={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    goalsContainer: {
        flex: 5
    }
})