import ThemeButton from "@/components/ui/ThemeButton";
import ThemeText from "@/components/ui/ThemeText";
import { Colors } from "@/constants/Colors";
import { Link, router } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    //! MAIN CONTAINER
    <View style={styles.registerContainer}>
      {/* BACKGROUND IMAGES */}
      <Image
        style={styles.bgImage}
        source={require("../assets/images/left.png")}
      />
      <Image
        style={[styles.bgImage, { left: "58%" }]}
        source={require("../assets/images/right.png")}
      />
      {/* TEXT CONTAINER */}
      <View style={styles.txtContainer}>
        <ThemeText style={styles.txt}>Loving Pet Care In</ThemeText>
        <ThemeText style={styles.txt}>Your Neighborhood</ThemeText>
      </View>
      {/* BUTTONS CONTAINER */}
      <View style={styles.btnsContainer}>
        <ThemeButton
          onPress={() => {
            router.push("/");
          }}
          mt={50}
          children="Find Pet Care"
        />
        <ThemeButton
          mt={10}
          bgColor={Colors.light.secondaryBgTwo}
          textColor={Colors.light.primaryTwo}
          children="Find Pet Care"
        />
        {/* <ThemeButton /> */}
      </View>
      {/* IMAGE CONTAINER */}
      <View style={styles.imgContainer}>
        <Image
          style={styles.mainImage}
          source={require("../assets/images/mainimg.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  //!==== MAIN CONTAINER ====
  registerContainer: {
    flex: 1,
    position: "relative",
  },
  bgImage: {
    position: "absolute",
    left: 0,
    top: 10,
    height: 230,
    width: 150,
  },
  //! TEXT CONTAINER
  txtContainer: {
    flex: 1,
    justifyContent: "center",
  },
  // TEXT STYLING
  txt: {
    textAlign: "center",
    fontSize: 20,
  },
  //! BUTTONS CONTAINER
  btnsContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  //! IMAGE CONTAINER
  imgContainer: {
    flex: 2,
    justifyContent: "flex-end",
    position: "relative",
  },
  // MAIN IMAGE
  mainImage: {
    objectFit: "contain",
    height: "100%",
    width: "100%",
    position: "absolute",
    bottom: "-9%",
  },
});
