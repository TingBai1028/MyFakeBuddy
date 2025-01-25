import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: "Page Not found" }} />
            <View style={styles.container}>
                <Link href="/" style={styles.button}>
                Go Back to Home Screen!
                </Link>
            </View>        
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff'
    }
});