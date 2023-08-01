import { View, Image, Text, StyleSheet } from "react-native";

export default function Partners() {
    const imagesList = [
        { img: require(".././assets/partners-logos/ice-cream.png"), name: 'Lee' },
        { img: require(".././assets/partners-logos/jasmine.png"), name: 'Anderson' },
        { img: require(".././assets/partners-logos/macarons.png"), name: 'Aresto' },
        { img: require(".././assets/partners-logos/matcha-tea.png"), name: 'Lanco' },
        { img: require(".././assets/partners-logos/pudding.png"), name: 'Tuomas' },
        { img: require(".././assets/partners-logos/tea-bag.png"), name: 'VVJ' },
    ];
    return (
        <View style={styles.partnerLogos}>
            {imagesList.map((image, index) => (
                <View style={styles.partnerLogosWrapper} key={index}>
                    <Image style={styles.partnerLogosItem} source={image.img} />
                    <Text>{image.name}</Text>
                </View>
            ))}
            <Text style={styles.partnerBottomText}>Become our next Partner</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    partnerLogos: {
        backgroundColor: '#61dafb',
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: 8,
    },
    partnerLogosItem: {
        height: 40,
        width: 40,
    },
    partnerLogosWrapper: {
        display: 'flex',
        alignItems: 'center'
    },
    partnerBottomText: {
        fontSize: 18,
        marginTop: 12
    },
});