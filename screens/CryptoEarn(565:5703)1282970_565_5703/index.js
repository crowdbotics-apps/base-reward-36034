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
      <View style={styles.View_565_5704} />
      <View style={styles.View_565_5705}>
        <Text style={styles.Text_565_5705}>
          Earn up to 12.5% p.a. on your crypto assest
        </Text>
      </View>
      <View style={styles.View_565_5706}>
        <Text style={styles.Text_565_5706}>3 Month Term</Text>
      </View>
      <View style={styles.View_565_5707}>
        <View style={styles.View_565_5708} />
        <View style={styles.View_565_5709}>
          <Text style={styles.Text_565_5709}>Start Earning Now</Text>
        </View>
      </View>
      <View style={styles.View_565_5710}>
        <Text style={styles.Text_565_5710}>
          Receive the earnings in your Crypto Wallet every 7 days
        </Text>
      </View>
      <View style={styles.View_565_5711}>
        <Text style={styles.Text_565_5711}>
          Earnings are paid in the currency of your allocated crypto or
          stablecoin
        </Text>
      </View>
      <View style={styles.View_565_5712}>
        <Text style={styles.Text_565_5712}>
          Frosted Rose Gold, lcy White, &amp; Obsidian cardholders are entitled
          to a 2% CRO bonus
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/32f31f77-47c3-4f51-9933-b0a5253713dd"
        }}
        style={styles.ImageBackground_565_5713}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01ac4d8e-25b4-41af-a8aa-eaf7a38ad52b"
        }}
        style={styles.ImageBackground_565_5714}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/24c73847-1177-4447-b164-ff2029b7f308"
        }}
        style={styles.ImageBackground_565_5715}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c48f8d38-0786-4f78-988b-25912a48fe80"
        }}
        style={styles.ImageBackground_565_5716}
      />
      <View style={styles.View_565_5717}>
        <Text style={styles.Text_565_5717}>4% p.a.</Text>
      </View>
      <View style={styles.View_565_5718}>
        <Text style={styles.Text_565_5718}>4% p.a.</Text>
      </View>
      <View style={styles.View_565_5719}>
        <Text style={styles.Text_565_5719}>4% p.a.</Text>
      </View>
      <View style={styles.View_565_5720}>
        <Text style={styles.Text_565_5720}>4% p.a.</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f701efc4-a0b2-4920-ad0f-9ee7a2e07769"
        }}
        style={styles.ImageBackground_565_5721}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/178d3579-c928-4d43-bb12-07668267111e"
        }}
        style={styles.ImageBackground_565_5722}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e351f14c-532d-4276-83cf-a38b8a663fa9"
        }}
        style={styles.ImageBackground_565_5723}
      />
      <View style={styles.View_565_5724}>
        <Text style={styles.Text_565_5724}>Bitcoin</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/06e9ce6a-8a67-4240-af96-ea26984c4e96"
        }}
        style={styles.ImageBackground_565_5725}
      />
      <View style={styles.View_565_5726}>
        <Text style={styles.Text_565_5726}>Ethereum</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f71bab25-e7c4-4aed-a94f-30791d711b3b"
        }}
        style={styles.ImageBackground_565_5727}
      />
      <View style={styles.View_565_5728}>
        <Text style={styles.Text_565_5728}>BNB </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/413e21e6-17c6-4cfe-a1b5-908554384f01"
        }}
        style={styles.ImageBackground_565_5729}
      />
      <View style={styles.View_565_5730}>
        <Text style={styles.Text_565_5730}>Tether</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf9a0ca1-a8bd-46a3-ac48-f6c9fe05fe4d"
        }}
        style={styles.ImageBackground_565_5731}
      />
      <View style={styles.View_565_5732}>
        <View style={styles.View_565_5733} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d33d4447-97d2-4689-8ed6-533dd889570b"
          }}
          style={styles.ImageBackground_565_5734}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/71c8bdb7-e2ca-48f1-a62c-fcfaaef55aef"
          }}
          style={styles.ImageBackground_565_5738}
        />
      </View>
      <View style={styles.View_565_5739}>
        <Text style={styles.Text_565_5739}>Crypto Earn</Text>
      </View>
      <View style={styles.View_565_5740}>
        <View style={styles.View_565_5741}>
          <Text style={styles.Text_565_5741}>9:41</Text>
        </View>
        <View style={styles.View_565_5742}>
          <View style={styles.View_565_5743}>
            <View style={styles.View_565_5744} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63ba7e99-e4d1-4c6d-bbaf-aee2762289b6"
              }}
              style={styles.ImageBackground_565_5745}
            />
            <View style={styles.View_565_5746} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/866fc273-6b8e-41b3-876c-20f1cae757a3"
              }}
              style={styles.ImageBackground_565_5747}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4b2a81e2-ffef-471c-92c3-dd6536f679a2"
              }}
              style={styles.ImageBackground_565_5748}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/14ed2fde-a94d-4a41-a9b9-d1b718f2a55a"
              }}
              style={styles.ImageBackground_565_5749}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36dcb90e-1db4-4de4-83f7-896faead5291"
              }}
              style={styles.ImageBackground_565_5750}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/626e338f-01d7-4832-b032-941ccb5e8179"
              }}
              style={styles.ImageBackground_565_5751}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e19e1367-5d91-4508-b091-d379a790f284"
              }}
              style={styles.ImageBackground_565_5752}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a36974f0-4ed3-42a9-992d-aaa10d17b738"
              }}
              style={styles.ImageBackground_565_5753}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_565_5754}>
        <View style={styles.View_565_5755} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/925c8330-dfc8-48a4-8ec6-805b0f538ea5"
          }}
          style={styles.ImageBackground_565_5756}
        />
      </View>
      <View style={styles.View_565_5757}>
        <View style={styles.View_565_5758} />
        <View style={styles.View_565_5759} />
        <View style={styles.View_565_5760}>
          <Text style={styles.Text_565_5760}>Select Term</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a37b82e-fbcc-45eb-b595-f12f29b65a68"
          }}
          style={styles.ImageBackground_565_5761}
        />
        <View style={styles.View_565_5764}>
          <Text style={styles.Text_565_5764}>
            Earn 0.5% per annum Transfer out your assets at any time
          </Text>
        </View>
        <View style={styles.View_565_5765}>
          <Text style={styles.Text_565_5765}>
            Earn 0.5% per annum Transfer out your assets at any time
          </Text>
        </View>
        <View style={styles.View_565_5766}>
          <Text style={styles.Text_565_5766}>
            Earn 0.5% per annum Transfer out your assets at any time
          </Text>
        </View>
        <View style={styles.View_565_5767} />
        <View style={styles.View_565_5768} />
        <View style={styles.View_565_5769} />
        <View style={styles.View_565_5770}>
          <Text style={styles.Text_565_5770}>0.5% p.a.</Text>
        </View>
        <View style={styles.View_565_5771}>
          <Text style={styles.Text_565_5771}>0.75-1.5% p.a.</Text>
        </View>
        <View style={styles.View_565_5772}>
          <Text style={styles.Text_565_5772}>1.5-3% p.a.</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/75d4ab6d-80c7-4155-b824-4bb5b6f74e20"
          }}
          style={styles.ImageBackground_565_5773}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/16aa69a8-533b-415c-84fa-ea6484ca8b67"
          }}
          style={styles.ImageBackground_565_5774}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/58411f4f-47fe-4206-bf29-32acad4b8b2a"
          }}
          style={styles.ImageBackground_565_5775}
        />
        <View style={styles.View_565_5776}>
          <Text style={styles.Text_565_5776}>Flexible</Text>
        </View>
        <View style={styles.View_565_5777}>
          <Text style={styles.Text_565_5777}>1 Month Term</Text>
        </View>
        <View style={styles.View_565_5778}>
          <Text style={styles.Text_565_5778}>3 Month Term</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/34eafbc1-ddb3-4bb1-83ab-2c48f8d66859"
          }}
          style={styles.ImageBackground_565_5779}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f51ffb46-8e7a-4e9c-8f14-841c1142e7a2"
          }}
          style={styles.ImageBackground_565_5780}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9eaae030-e8fb-44b1-8c98-8ca09ee11e48"
          }}
          style={styles.ImageBackground_565_5781}
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_565_5782}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("565_5786"))
          }
        >
          <View style={styles.View_565_5783} />
          <View style={styles.View_565_5784}>
            <Text style={styles.Text_565_5784}>Continue</Text>
          </View>
        </TouchableOpacity>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85ad9357-6261-4a68-9c4e-b399ab8ac6e5"
          }}
          style={styles.ImageBackground_565_5785}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("123%") },
  View_565_5704: {
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
  View_565_5705: {
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
  Text_565_5705: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5706: {
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
  Text_565_5706: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5707: {
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
  View_565_5708: {
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
  View_565_5709: {
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
  Text_565_5709: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.96,
    textTransform: "none"
  },
  View_565_5710: {
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
  Text_565_5710: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5711: {
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
  Text_565_5711: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5712: {
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
  Text_565_5712: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_5713: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_565_5714: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_565_5715: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_565_5716: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  View_565_5717: {
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
  Text_565_5717: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5718: {
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
  Text_565_5718: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5719: {
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
  Text_565_5719: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5720: {
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
  Text_565_5720: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_5721: {
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
  ImageBackground_565_5722: {
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
  ImageBackground_565_5723: {
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
  View_565_5724: {
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
  Text_565_5724: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_5725: {
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
  View_565_5726: {
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
  Text_565_5726: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_5727: {
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
  View_565_5728: {
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
  Text_565_5728: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_5729: {
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
  View_565_5730: {
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
  Text_565_5730: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_5731: {
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
  View_565_5732: {
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
  View_565_5733: {
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
  ImageBackground_565_5734: {
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
  ImageBackground_565_5738: {
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
  View_565_5739: {
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
  Text_565_5739: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5740: {
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
  View_565_5741: {
    width: wp("7%"),
    minWidth: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_565_5741: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_565_5742: {
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
  View_565_5743: {
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
  View_565_5744: {
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
  ImageBackground_565_5745: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("1%")
  },
  View_565_5746: {
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
  ImageBackground_565_5747: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  ImageBackground_565_5748: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%")
  },
  ImageBackground_565_5749: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%")
  },
  ImageBackground_565_5750: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_565_5751: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_565_5752: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_565_5753: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_565_5754: {
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
  View_565_5755: {
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
  ImageBackground_565_5756: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_565_5757: {
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
  View_565_5758: {
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
  View_565_5759: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("64%"),
    minHeight: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("59%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_565_5760: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("62%"),
    justifyContent: "flex-start"
  },
  Text_565_5760: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_5761: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%")
  },
  View_565_5764: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("75%"),
    justifyContent: "center"
  },
  Text_565_5764: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5765: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("89%"),
    justifyContent: "center"
  },
  Text_565_5765: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5766: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("103%"),
    justifyContent: "center"
  },
  Text_565_5766: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5767: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("71%")
  },
  View_565_5768: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("85%")
  },
  View_565_5769: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("99%")
  },
  View_565_5770: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("71%"),
    justifyContent: "center"
  },
  Text_565_5770: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5771: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("86%"),
    justifyContent: "center"
  },
  Text_565_5771: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5772: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("100%"),
    justifyContent: "center"
  },
  Text_565_5772: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_5773: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("82%")
  },
  ImageBackground_565_5774: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("96%")
  },
  ImageBackground_565_5775: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("111%")
  },
  View_565_5776: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("70%"),
    justifyContent: "flex-start"
  },
  Text_565_5776: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5777: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("85%"),
    justifyContent: "flex-start"
  },
  Text_565_5777: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5778: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("99%"),
    justifyContent: "flex-start"
  },
  Text_565_5778: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_5779: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("76%")
  },
  ImageBackground_565_5780: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("90%")
  },
  ImageBackground_565_5781: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("104%")
  },
  TouchableOpacity_565_5782: {
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
  View_565_5783: {
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
  View_565_5784: {
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
  Text_565_5784: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.96,
    textTransform: "none"
  },
  ImageBackground_565_5785: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("77%"),
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
