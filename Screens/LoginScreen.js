import React from 'react';
import { View, StyleSheet } from 'react-native';
import FormButton from '../components/FormButton';
export default LoginScreen = () => {
    return (
        <View style={StyleSheet.container}>
            <Text>Login Screen</Text>
            <Button
                title="Click here"
                onPress={() => alert("Button clicked!")}
            />
            <FormButton/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"
    },
});
