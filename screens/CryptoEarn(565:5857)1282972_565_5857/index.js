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
      <View style={styles.View_565_5858} />
      <View style={styles.View_565_5859}>
        <Text style={styles.Text_565_5859}>
          Earn up to 12.5% p.a. on your crypto assest
        </Text>
      </View>
      <View style={styles.View_565_5860}>
        <Text style={styles.Text_565_5860}>3 Month Term</Text>
      </View>
      <View style={styles.View_565_5861}>
        <View style={styles.View_565_5862} />
        <View style={styles.View_565_5863}>
          <Text style={styles.Text_565_5863}>Start Earning Now</Text>
        </View>
      </View>
      <View style={styles.View_565_5864}>
        <Text style={styles.Text_565_5864}>
          Receive the earnings in your Crypto Wallet every 7 days
        </Text>
      </View>
      <View style={styles.View_565_5865}>
        <Text style={styles.Text_565_5865}>
          Earnings are paid in the currency of your allocated crypto or
          stablecoin
        </Text>
      </View>
      <View style={styles.View_565_5866}>
        <Text style={styles.Text_565_5866}>
          Frosted Rose Gold, lcy White, &amp; Obsidian cardholders are entitled
          to a 2% CRO bonus
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3038f02f-e9b0-4e1c-9bcf-26e62060bb8f"
        }}
        style={styles.ImageBackground_565_5867}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe3cb43d-9d56-4142-8e13-98bc8910ed7d"
        }}
        style={styles.ImageBackground_565_5868}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7f5b82fb-a52a-4060-925d-101669069b15"
        }}
        style={styles.ImageBackground_565_5869}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e3480489-19a8-41ca-8ae4-31670f9d47f3"
        }}
        style={styles.ImageBackground_565_5870}
      />
      <View style={styles.View_565_5871}>
        <Text style={styles.Text_565_5871}>4% p.a.</Text>
      </View>
      <View style={styles.View_565_5872}>
        <Text style={styles.Text_565_5872}>4% p.a.</Text>
      </View>
      <View style={styles.View_565_5873}>
        <Text style={styles.Text_565_5873}>4% p.a.</Text>
      </View>
      <View style={styles.View_565_5874}>
        <Text style={styles.Text_565_5874}>4% p.a.</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bba759ed-5862-4d35-aa54-b06b21cf195a"
        }}
        style={styles.ImageBackground_565_5875}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f3cdc9c4-a1f1-473c-9524-3de09bfc6bfa"
        }}
        style={styles.ImageBackground_565_5876}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e5e3094a-9cf9-4b7b-a811-a1a9519ffbae"
        }}
        style={styles.ImageBackground_565_5877}
      />
      <View style={styles.View_565_5878}>
        <Text style={styles.Text_565_5878}>Bitcoin</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/699ba7fc-53a5-4fd1-bbbc-72b896823b58"
        }}
        style={styles.ImageBackground_565_5879}
      />
      <View style={styles.View_565_5880}>
        <Text style={styles.Text_565_5880}>Ethereum</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d9127ca3-d3b2-4209-af31-054ade9065a8"
        }}
        style={styles.ImageBackground_565_5881}
      />
      <View style={styles.View_565_5882}>
        <Text style={styles.Text_565_5882}>BNB </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/87c6b799-668a-4177-b2f3-63ed23afb550"
        }}
        style={styles.ImageBackground_565_5883}
      />
      <View style={styles.View_565_5884}>
        <Text style={styles.Text_565_5884}>Tether</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f8f76db4-e8b0-4115-9e3a-b21f16e979db"
        }}
        style={styles.ImageBackground_565_5885}
      />
      <View style={styles.View_565_5886}>
        <View style={styles.View_565_5887} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8267da98-5aa2-44c9-9082-354e945abc70"
          }}
          style={styles.ImageBackground_565_5888}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/340ee42f-51ba-4afb-93b5-48a79d5467de"
          }}
          style={styles.ImageBackground_565_5892}
        />
      </View>
      <View style={styles.View_565_5893}>
        <Text style={styles.Text_565_5893}>Crypto Earn</Text>
      </View>
      <View style={styles.View_565_5894}>
        <View style={styles.View_565_5895}>
          <Text style={styles.Text_565_5895}>9:41</Text>
        </View>
        <View style={styles.View_565_5896}>
          <View style={styles.View_565_5897}>
            <View style={styles.View_565_5898} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ee1d4b9-ffed-4edf-9697-bff68275e192"
              }}
              style={styles.ImageBackground_565_5899}
            />
            <View style={styles.View_565_5900} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d63dc62-ae3f-49d6-bda9-6f2238043200"
              }}
              style={styles.ImageBackground_565_5901}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c3385755-e810-4867-be3b-04e5961549b2"
              }}
              style={styles.ImageBackground_565_5902}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55232485-9d30-4542-b959-38a6f32731f2"
              }}
              style={styles.ImageBackground_565_5903}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ac30d5d0-5ab4-4607-a5b0-8e7b2a1bf392"
              }}
              style={styles.ImageBackground_565_5904}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f65cfd93-351d-4921-926b-7103d0ca1305"
              }}
              style={styles.ImageBackground_565_5905}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e6469ce2-b6be-4b1c-ad74-15fe986e708e"
              }}
              style={styles.ImageBackground_565_5906}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/95813f8d-ad82-4ba1-987f-0cc2f288b6c7"
              }}
              style={styles.ImageBackground_565_5907}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_565_5908}>
        <View style={styles.View_565_5909} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9e3cc91a-6ad5-44d2-837f-6df4b441a406"
          }}
          style={styles.ImageBackground_565_5910}
        />
      </View>
      <View style={styles.View_565_5911}>
        <View style={styles.View_565_5912} />
        <View style={styles.View_565_5913} />
        <View style={styles.View_565_5914}>
          <Text style={styles.Text_565_5914}>0 BTC</Text>
        </View>
        <View style={styles.View_565_5915}>
          <Text style={styles.Text_565_5915}>Bitcoin</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3a1a35b7-0f46-465e-995f-0451e54be5da"
          }}
          style={styles.ImageBackground_565_5916}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d9499dcc-6966-4f79-a7ef-96b0e28f0c70"
          }}
          style={styles.ImageBackground_565_5917}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a9f7d66c-fd16-4197-a043-d6d0833b8a97"
          }}
          style={styles.ImageBackground_565_5918}
        />
        <View style={styles.View_565_5919} />
        <View style={styles.View_565_5920}>
          <Text style={styles.Text_565_5920}>Crypto Earn - Flexible</Text>
        </View>
        <View style={styles.View_565_5921}>
          <Text style={styles.Text_565_5921}>$ 464.5 USD =</Text>
        </View>
        <View style={styles.View_565_5922}>
          <View style={styles.View_565_5923}>
            <Text style={styles.Text_565_5923}>0.5%</Text>
          </View>
          <View style={styles.View_565_5924}>
            <Text style={styles.Text_565_5924}>p.a.</Text>
          </View>
        </View>
        <View style={styles.View_565_5925}>
          <Text style={styles.Text_565_5925}>You will Receive</Text>
        </View>
        <View style={styles.View_565_5926}>
          <View style={styles.View_565_5927} />
          <View style={styles.View_565_5928}>
            <View style={styles.View_565_5929}>
              <Text style={styles.Text_565_5929}>BTC</Text>
            </View>
            <View style={styles.View_565_5930}>
              <Text style={styles.Text_565_5930}>0.01</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3a192fdf-5270-4c9e-a1dd-f1070b78eb02"
          }}
          style={styles.ImageBackground_565_5931}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6ebe9db9-ece9-421f-8741-7e4ff0744f58"
          }}
          style={styles.ImageBackground_565_5934}
        />
        <View style={styles.View_565_5935}>
          <View style={styles.View_565_5936} />
          <View style={styles.View_565_5937}>
            <Text style={styles.Text_565_5937}>Insufficient Balance</Text>
          </View>
        </View>
        <View style={styles.View_565_5938}>
          <Text style={styles.Text_565_5938}>
            You can transfer out the funds at anytime and earnings will be paid
            out every 7 days.
          </Text>
        </View>
        <View style={styles.View_565_5939}>
          <Text style={styles.Text_565_5939}>From Crypto Wallets</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/382f5a1d-a4ca-4632-9492-c7543da49c18"
          }}
          style={styles.ImageBackground_565_5940}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("123%") },
  View_565_5858: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("70%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_565_5859: {
    width: wp("69%"),
    minWidth: wp("69%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_565_5859: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5860: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("65%"),
    justifyContent: "flex-start"
  },
  Text_565_5860: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5861: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("113%")
  },
  View_565_5862: {
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
  View_565_5863: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_565_5863: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.96,
    textTransform: "none"
  },
  View_565_5864: {
    width: wp("70%"),
    minWidth: wp("70%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("32%"),
    justifyContent: "flex-start"
  },
  Text_565_5864: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5865: {
    width: wp("71%"),
    minWidth: wp("71%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("40%"),
    justifyContent: "flex-start"
  },
  Text_565_5865: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5866: {
    width: wp("72%"),
    minWidth: wp("72%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("49%"),
    justifyContent: "flex-start"
  },
  Text_565_5866: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_5867: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_565_5868: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_565_5869: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_565_5870: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  View_565_5871: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("74%"),
    justifyContent: "center"
  },
  Text_565_5871: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5872: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("83%"),
    justifyContent: "center"
  },
  Text_565_5872: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5873: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("102%"),
    justifyContent: "center"
  },
  Text_565_5873: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5874: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("92%"),
    justifyContent: "center"
  },
  Text_565_5874: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_5875: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("80%")
  },
  ImageBackground_565_5876: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("89%")
  },
  ImageBackground_565_5877: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("99%")
  },
  View_565_5878: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("74%"),
    justifyContent: "flex-start"
  },
  Text_565_5878: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_5879: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("73%"),
    resizeMode: "cover"
  },
  View_565_5880: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("83%"),
    justifyContent: "flex-start"
  },
  Text_565_5880: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_5881: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("82%"),
    resizeMode: "cover"
  },
  View_565_5882: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("102%"),
    justifyContent: "flex-start"
  },
  Text_565_5882: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_5883: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("101%")
  },
  View_565_5884: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("92%"),
    justifyContent: "flex-start"
  },
  Text_565_5884: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_5885: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("91%")
  },
  View_565_5886: {
    width: wp("111%"),
    minWidth: wp("111%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-18%")
  },
  View_565_5887: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 28
  },
  ImageBackground_565_5888: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("0%")
  },
  ImageBackground_565_5892: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("37%")
  },
  View_565_5893: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_565_5893: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5894: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%")
  },
  View_565_5895: {
    width: wp("7%"),
    minWidth: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_565_5895: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_565_5896: {
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
  View_565_5897: {
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
  View_565_5898: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  ImageBackground_565_5899: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("1%")
  },
  View_565_5900: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_565_5901: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  ImageBackground_565_5902: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%")
  },
  ImageBackground_565_5903: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%")
  },
  ImageBackground_565_5904: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_565_5905: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_565_5906: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_565_5907: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_565_5908: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("9%")
  },
  View_565_5909: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_565_5910: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_565_5911: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("123%"),
    minHeight: hp("123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_565_5912: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("122%"),
    minHeight: hp("122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_565_5913: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("79%"),
    minHeight: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_565_5914: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("106%"),
    justifyContent: "center"
  },
  Text_565_5914: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5915: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("106%"),
    justifyContent: "flex-start"
  },
  Text_565_5915: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_5916: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("105%"),
    resizeMode: "cover"
  },
  ImageBackground_565_5917: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("89%")
  },
  ImageBackground_565_5918: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("99%")
  },
  View_565_5919: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("56%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_565_5920: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("47%"),
    justifyContent: "flex-start"
  },
  Text_565_5920: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5921: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("60%"),
    justifyContent: "flex-start"
  },
  Text_565_5921: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5922: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("82%")
  },
  View_565_5923: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_565_5923: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5924: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_565_5924: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5925: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("78%"),
    justifyContent: "flex-start"
  },
  Text_565_5925: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5926: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("65%")
  },
  View_565_5927: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_565_5928: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_565_5929: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_565_5929: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5930: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_565_5930: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_5931: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%")
  },
  ImageBackground_565_5934: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53%")
  },
  View_565_5935: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("114%")
  },
  View_565_5936: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_565_5937: {
    width: wp("47%"),
    minWidth: wp("47%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_565_5937: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.96,
    textTransform: "none"
  },
  View_565_5938: {
    width: wp("75%"),
    minWidth: wp("75%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("91%"),
    justifyContent: "center"
  },
  Text_565_5938: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5939: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("101%"),
    justifyContent: "flex-start"
  },
  Text_565_5939: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_5940: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
