import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, ScrollView, FlatList } from 'react-native';

import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList';



export default function App() {

  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = (show) => {
    setShowModal(show)
  }

  const [goalsList, setGoalsList] = useState([])

  const handleAddGoal = (goalInput) => {
    //setGoalsList([...goalsList,goalInput])
    //best practise
    setGoalsList(currentGoals => [...currentGoals, { text: goalInput, id: Math.random().toString() }])
  }

  const handleDeleteGoal = (itemId) => {
    setGoalsList(currentGoals => currentGoals.filter(({ id }) => id !== itemId))
  }
  return (
   
       
        <View style={styles.appContainer}>
          <Button title='Add new Goal' color="#5e0acc" onPress={() => handleModalToggle(true)} />
          {showModal && <GoalInput onGoalAdd={handleAddGoal} showModal={showModal} onModalClose={handleModalToggle} />}
          <GoalList goalsList={goalsList} onDeleteGoal={handleDeleteGoal} />
        </View>


  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16
  }
});
