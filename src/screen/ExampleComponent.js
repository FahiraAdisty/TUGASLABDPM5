import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

const ExampleComponent = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Count changed: ${count}`);
    }, [count]);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 16,
    },
});

export default ExampleComponent;