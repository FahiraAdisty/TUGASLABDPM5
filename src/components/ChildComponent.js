import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ChildComponent = ({ teamName, score, onIncrement, onDecrement }) => {
    useEffect(() => {
        console.log(`${teamName} Skor diperbarui: ${score}`);  // Debugging perubahan skor
    }, [score]);

    return (
        <View style={styles.container}>
            <Text style={styles.teamName}>{teamName}</Text>
            <Text style={styles.score}>Score: {score}</Text>
            <Button title="+" onPress={onIncrement} />
            <Button title="-" onPress={onDecrement} disabled={score <= 0} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 16,
        margin: 16,
        alignItems: 'center',
    },
    teamName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    score: {
        fontSize: 18,
        marginBottom: 16,
    },
});

export default ChildComponent;
