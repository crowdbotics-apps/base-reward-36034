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
      <View style={styles.View_582_396}>
        <View style={styles.View_582_397}>
          <Text style={styles.Text_582_397}>9:41</Text>
        </View>
        <View style={styles.View_582_398}>
          <View style={styles.View_582_399}>
            <View style={styles.View_582_400} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b09a2b6c-7d75-40e4-9a94-bc2668ebba26"
              }}
              style={styles.ImageBackground_582_401}
            />
            <View style={styles.View_582_402} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1b0b38b5-f4a0-4900-a1ee-6597505db0ce"
              }}
              style={styles.ImageBackground_582_403}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c8544cc6-8788-4825-af96-f11887e703ac"
              }}
              style={styles.ImageBackground_582_404}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b98bcd95-3e3e-41b9-bd69-60a935fa2c41"
              }}
              style={styles.ImageBackground_582_405}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a5ff02cd-25f2-41c9-86e9-c748ba3a5886"
              }}
              style={styles.ImageBackground_582_406}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/07849b8a-f976-4462-8f4f-5ec254ff290c"
              }}
              style={styles.ImageBackground_582_407}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/41276a90-92f5-456e-bd45-048c1bb45399"
              }}
              style={styles.ImageBackground_582_408}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/23d87194-b4e9-4afd-b7d5-cfdb64b39333"
              }}
              style={styles.ImageBackground_582_409}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_582_410} />
      <View style={styles.View_582_411} />
      <View style={styles.View_582_412} />
      <View style={styles.View_582_413} />
      <View style={styles.View_582_414} />
      <View style={styles.View_582_415} />
      <View style={styles.View_582_416}>
        <Text style={styles.Text_582_416}>Verification Code</Text>
      </View>
      <View style={styles.View_582_417}>
        <Text style={styles.Text_582_417}>
          A Verification Code has been sent to +1 254 **** ***
        </Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_582_418}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("582_463"))
        }
      />
      <View style={styles.View_582_419}>
        <Text style={styles.Text_582_419}>Continue</Text>
      </View>
      <View style={styles.View_582_420}>
        <View style={styles.View_582_421}>
          <Text style={styles.Text_582_421}>Sign Up</Text>
        </View>
      </View>
      <View style={styles.View_582_426}>
        <View style={styles.View_582_359}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/03b62993-b7b9-4f55-a329-9b38b83d13e2"
            }}
            style={styles.ImageBackground_582_360}
          />
        </View>
        <View style={styles.View_582_362}>
          <View style={styles.View_582_363}>
            <View style={styles.View_582_364}>
              <View style={styles.View_582_365}>
                <View style={styles.View_582_366}>
                  <View style={styles.View_582_367}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/88341599-0f12-413c-b438-2b930f7d32cd"
                      }}
                      style={styles.ImageBackground_582_368}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_582_371}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb50391e-ddd9-4675-aab5-c78f184ce69d"
                  }}
                  style={styles.ImageBackground_582_372}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6d42bf2a-284d-4ee6-8a37-0ca32d288de3"
                  }}
                  style={styles.ImageBackground_582_376}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/68d93385-1906-4c94-9136-5fd8537cf484"
                  }}
                  style={styles.ImageBackground_582_377}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/839930a2-dd85-42c2-a28d-2af550ad6e62"
                  }}
                  style={styles.ImageBackground_582_378}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d4ab7f18-59aa-42f9-9172-70ca60111eec"
                  }}
                  style={styles.ImageBackground_582_379}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9683cfdc-cd27-47cc-8c9f-73aff984edfa"
                  }}
                  style={styles.ImageBackground_582_380}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/23582cf1-1873-479f-b4f8-b22eb08b4d52"
                }}
                style={styles.ImageBackground_582_386}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/061786e7-bda4-4c9e-9640-c6a296055a36"
              }}
              style={styles.ImageBackground_582_387}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d3d6399-2c80-4027-9772-0863c0880de4"
              }}
              style={styles.ImageBackground_582_388}
            />
          </View>
          <View style={styles.View_582_389}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/43ea56ff-5e07-4e93-af5b-c6f3a8eb5406"
              }}
              style={styles.ImageBackground_582_390}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2ebd0251-a2b9-4e3d-9068-2f14b2bf24d5"
              }}
              style={styles.ImageBackground_582_391}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_582_552}>
        <View style={styles.View_582_553} />
        <View style={styles.View_582_555}>
          <View style={styles.View_582_592}>
            <View style={styles.View_582_556}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c77322f4-29c6-42ee-bb5f-41a96bd2380c"
                }}
                style={styles.ImageBackground_582_557}
              />
            </View>
            <View style={styles.View_582_559}>
              <View style={styles.View_582_560}>
                <View style={styles.View_582_561}>
                  <View style={styles.View_582_562}>
                    <View style={styles.View_582_563}>
                      <View style={styles.View_582_564}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/17062f8c-968c-4f41-a09b-5ac2ac5564fb"
                          }}
                          style={styles.ImageBackground_582_565}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_582_568}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4faf4a4f-6929-40a0-a19c-f9b32d2340f9"
                      }}
                      style={styles.ImageBackground_582_569}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d632135a-a06a-4ac5-9192-fd41edcdfa89"
                      }}
                      style={styles.ImageBackground_582_573}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d11d4c52-568c-4c0f-872c-886807581304"
                      }}
                      style={styles.ImageBackground_582_574}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9371c059-3b3e-4609-b216-44cb271c71a4"
                      }}
                      style={styles.ImageBackground_582_575}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/573c4ee1-725d-47e7-b89f-e5ab2593ea76"
                      }}
                      style={styles.ImageBackground_582_576}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0eec4656-acd8-4d39-b939-bc1c7c24de34"
                      }}
                      style={styles.ImageBackground_582_577}
                    />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4ebbc537-bef3-4015-a443-6adad3271c61"
                    }}
                    style={styles.ImageBackground_582_583}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fa41f489-a6f2-404f-98ce-16ab31af19e1"
                  }}
                  style={styles.ImageBackground_582_584}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5e22df2a-8c81-4bd5-85bc-ecffd1cdf54b"
                  }}
                  style={styles.ImageBackground_582_585}
                />
              </View>
              <View style={styles.View_582_586}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a0eddf92-9369-4118-81ea-a9efc3021b1e"
                  }}
                  style={styles.ImageBackground_582_587}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6d628ec-223e-408b-aa77-75e2c6b2cc13"
                  }}
                  style={styles.ImageBackground_582_588}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_582_396: {
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
  View_582_397: {
    width: wp("7%"),
    minWidth: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_582_397: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_582_398: {
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
  View_582_399: {
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
  View_582_400: {
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
  ImageBackground_582_401: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("1%")
  },
  View_582_402: {
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
  ImageBackground_582_403: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  ImageBackground_582_404: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%")
  },
  ImageBackground_582_405: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%")
  },
  ImageBackground_582_406: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_582_407: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_582_408: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_582_409: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_582_410: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("60%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(44, 44, 78, 1)",
    borderWidth: 1
  },
  View_582_411: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("60%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(44, 44, 78, 1)",
    borderWidth: 1
  },
  View_582_412: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("60%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(44, 44, 78, 1)",
    borderWidth: 1
  },
  View_582_413: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("60%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(44, 44, 78, 1)",
    borderWidth: 1
  },
  View_582_414: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("60%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(44, 44, 78, 1)",
    borderWidth: 1
  },
  View_582_415: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("60%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(44, 44, 78, 1)",
    borderWidth: 1
  },
  View_582_416: {
    width: wp("36%"),
    minWidth: wp("36%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_582_416: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.84,
    textTransform: "none"
  },
  View_582_417: {
    width: wp("76%"),
    minWidth: wp("76%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("46%"),
    justifyContent: "flex-start"
  },
  Text_582_417: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.84,
    textTransform: "none"
  },
  TouchableOpacity_582_418: {
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
  View_582_419: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("99%"),
    justifyContent: "flex-start"
  },
  Text_582_419: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.96,
    textTransform: "none"
  },
  View_582_420: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("40%")
  },
  View_582_421: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_582_421: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_426: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("5%")
  },
  View_582_359: {
    width: wp("66%"),
    height: hp("31%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_582_360: {
    width: wp("66%"),
    height: hp("31%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_582_362: {
    width: wp("34%"),
    height: hp("23%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  View_582_363: {
    width: wp("34%"),
    height: hp("19%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_582_364: {
    width: wp("34%"),
    height: hp("19%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_582_365: {
    width: wp("34%"),
    height: hp("17%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_582_366: {
    width: wp("34%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_582_367: {
    width: wp("34%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_582_368: {
    width: wp("34%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_582_371: {
    width: wp("15%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_582_372: {
    width: wp("15%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_582_376: {
    width: wp("12%"),
    height: hp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_582_377: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_582_378: {
    width: wp("6%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_582_379: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_582_380: {
    width: wp("10%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_582_386: {
    width: wp("13%"),
    height: hp("8%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_582_387: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_582_388: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_582_389: {
    width: wp("19%"),
    height: hp("4%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_582_390: {
    width: wp("19%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_582_391: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_582_552: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("35%")
  },
  View_582_553: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_582_555: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_582_592: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_582_556: {
    width: wp("66%"),
    height: hp("31%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_582_557: {
    width: wp("66%"),
    height: hp("31%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_582_559: {
    width: wp("34%"),
    height: hp("23%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  View_582_560: {
    width: wp("34%"),
    height: hp("19%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_582_561: {
    width: wp("34%"),
    height: hp("19%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_582_562: {
    width: wp("34%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_582_563: {
    width: wp("34%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_582_564: {
    width: wp("34%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_582_565: {
    width: wp("34%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_582_568: {
    width: wp("15%"),
    height: hp("15%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_582_569: {
    width: wp("15%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_582_573: {
    width: wp("12%"),
    height: hp("4%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_582_574: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_582_575: {
    width: wp("6%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_582_576: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_582_577: {
    width: wp("10%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_582_583: {
    width: wp("13%"),
    height: hp("8%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_582_584: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_582_585: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_582_586: {
    width: wp("19%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_582_587: {
    width: wp("19%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_582_588: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
