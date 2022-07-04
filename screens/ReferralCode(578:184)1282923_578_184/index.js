import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf749e4a-9bc2-43e4-8f47-87c583a75ebf"
        }}
        style={styles.ImageBackground_582_207}
      />
      <View style={styles.View_582_238}>
        <View style={styles.View_582_237} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f138c312-dd4e-495f-939c-afa9a41365ce"
          }}
          style={styles.ImageBackground_582_235}
        />
        <View style={styles.View_916_1173}>
          <Text style={styles.Text_916_1173}>
            By signing up, you’re agree to our Privacy Policy and Terms and
            conditions
          </Text>
        </View>
      </View>
      <View style={styles.View_578_185}>
        <View style={styles.View_578_186}>
          <Text style={styles.Text_578_186}>9:41</Text>
        </View>
        <View style={styles.View_578_187}>
          <View style={styles.View_578_188}>
            <View style={styles.View_578_189} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c20c932f-1ce3-4b57-b856-ed7920e9023d"
              }}
              style={styles.ImageBackground_578_190}
            />
            <View style={styles.View_578_191} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2ac41c34-649b-4918-989a-524d4e35c8b1"
              }}
              style={styles.ImageBackground_578_192}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7104d333-df0a-4171-b35d-3c9b0e236259"
              }}
              style={styles.ImageBackground_578_193}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/629da20a-a89a-4b8b-8872-62866d898827"
              }}
              style={styles.ImageBackground_578_194}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a754c686-a33f-47c6-aa2d-149a9debd73d"
              }}
              style={styles.ImageBackground_578_195}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f366a61e-6fd6-438b-a82f-cf186cb1b40c"
              }}
              style={styles.ImageBackground_578_196}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/93df76df-4531-4f1d-b680-c79e9468784e"
              }}
              style={styles.ImageBackground_578_197}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/acd9f7ed-55e5-4f43-bd95-5c4febaa8353"
              }}
              style={styles.ImageBackground_578_198}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_578_199} />
      <View style={styles.View_578_200}>
        <Text style={styles.Text_578_200}>Referral Code (optional )</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_578_201}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("582_239"))
        }
      >
        <View style={styles.View_578_202} />
        <View style={styles.View_578_203}>
          <Text style={styles.Text_578_203}>Continue</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/352cada1-a5c7-46f9-9341-ff1e2c146552"
        }}
        style={styles.TouchableOpacity_578_204}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("514_345"))
        }
      />
      <View style={styles.View_916_1174}>
        <Text style={styles.Text_916_1174}>
          Using a referal code at signup will earn you signup bonus.
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  ImageBackground_582_207: {
    width: wp("130%"),
    minWidth: wp("130%"),
    height: hp("57%"),
    minHeight: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-15%"),
    top: hp("0%")
  },
  View_582_238: {
    width: wp("133%"),
    minWidth: wp("133%"),
    height: hp("58%"),
    minHeight: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-15%"),
    top: hp("53%")
  },
  View_582_237: {
    width: wp("133%"),
    minWidth: wp("133%"),
    height: hp("58%"),
    minHeight: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_582_235: {
    width: wp("133%"),
    minWidth: wp("133%"),
    height: hp("58%"),
    minHeight: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_916_1173: {
    width: wp("86%"),
    minWidth: wp("86%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_916_1173: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "none"
  },
  View_578_185: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%")
  },
  View_578_186: {
    width: wp("7%"),
    minWidth: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_578_186: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_578_187: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("0%")
  },
  View_578_188: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_578_189: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    borderColor: "rgba(44, 44, 78, 1)",
    borderWidth: 1
  },
  ImageBackground_578_190: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("1%")
  },
  View_578_191: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    backgroundColor: "rgba(44, 44, 78, 1)"
  },
  ImageBackground_578_192: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  ImageBackground_578_193: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%")
  },
  ImageBackground_578_194: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%")
  },
  ImageBackground_578_195: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_578_196: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_578_197: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_578_198: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_578_199: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("78%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(44, 44, 78, 1)",
    borderWidth: 1
  },
  View_578_200: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("74%"),
    justifyContent: "flex-start"
  },
  Text_578_200: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.84,
    textTransform: "none"
  },
  TouchableOpacity_578_201: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("97%")
  },
  View_578_202: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_578_203: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_578_203: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.96,
    textTransform: "none"
  },
  TouchableOpacity_578_204: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_916_1174: {
    width: wp("90%"),
    minWidth: wp("90%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("86%"),
    justifyContent: "flex-start"
  },
  Text_916_1174: {
    color: "rgba(109, 104, 104, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
