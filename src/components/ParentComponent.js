import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const [teamA, setTeamA] = useState(0);
    const [teamB, setTeamB] = useState(0);

    useEffect(() => {
        console.log('Team A:', teamA);  // Cek nilai teamA
        console.log('Team B:', teamB);  // Cek nilai teamB
    }, [teamA, teamB]);

    const handleIncrementA = () => {
        const newScore = teamA + 1;
        setTeamA(newScore);
        if (newScore === 10) {
            Alert.alert('Team A Menang!');
        }
    };

    const handleDecrementA = () => {
        setTeamA(Math.max(0, teamA - 1));
    };

    const handleIncrementB = () => {
        const newScore = teamB + 1;
        setTeamB(newScore);
        if (newScore === 10) {
            Alert.alert('Team B Menang!');
        }
    };

    const handleDecrementB = () => {
        setTeamB(Math.max(0, teamB - 1));
    };

    const resetScores = () => {
        console.log('Reset Scores Dipanggil');  // Cek apakah fungsi dipanggil
        setTeamA(0);  // Reset nilai Team A
        setTeamB(0);  // Reset nilai Team B
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Papan Skor Futsal</Text>
            <ChildComponent
                teamName="Team A"
                score={teamA}
                onIncrement={handleIncrementA}
                onDecrement={handleDecrementA}
            />
            <ChildComponent
                teamName="Team B"
                score={teamB}
                onIncrement={handleIncrementB}
                onDecrement={handleDecrementB}
            />
            <Button title="Reset Skor" onPress={resetScores} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});

export default ParentComponent;
