import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>About MyFakeBuddy</Text>
            <Text style={styles.paragraph}>
                MyFakeBuddy is designed to make English speaking practice
                fun and natural. The app simulates phone calls using AI, enabling users to engage
                in meaningful conversations on random daily-life topics.
            </Text>

            <Text style={styles.subtitle}>Why MyFakeBuddy?</Text>
            <Text style={styles.paragraph}>
                Many English learners feel awkward practicing speaking in public. MyFakeBuddy
                helps you overcome this barrier by mimicking real-life phone calls, so you can
                practice anywhere with confidence.
            </Text>

            <Text style={styles.subtitle}>Features</Text>
            <Text style={styles.paragraph}>
                Voice-to-voice communication powered by AI. Random topics for diverse and engaging conversations.
            </Text>

            <Text style={styles.subtitle}>About Me</Text>
            <Text style={styles.paragraph}>
            Hi, my name is Ting. I am a second-year Computer Science student at UNSW with a WAM of 88 and an AWS Certified Cloud Practitioner certification. I have strong leadership and technical skills, demonstrated through projects like the Toohak Backend JavaScript Server and Sun Ray Speed Way, where my team placed 3rd at UNSW. With a passion for cloud computing, time management, and a proven ability to learn quickly, I’m actively seeking IT-related opportunities to apply my skills and continue growing in the tech industry.
            </Text>
            <Link href="https://tingbai1028.github.io/tingbaiwebsite/" style={styles.button}>My website</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    text: {
        color: '#fff',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#F5F5DC',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#F0FFFF',
        marginTop: 15,
        marginBottom: 5,
    },
    paragraph: {
        fontSize: 16,
        lineHeight: 24,
        color: '#FFFAF0',
        marginBottom: 10,
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff'
    }
});