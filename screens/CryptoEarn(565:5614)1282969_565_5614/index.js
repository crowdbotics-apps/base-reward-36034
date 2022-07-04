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
      <View style={styles.View_565_5615} />
      <View style={styles.View_565_5616}>
        <Text style={styles.Text_565_5616}>
          Earn up to 12.5% p.a. on your crypto assest
        </Text>
      </View>
      <View style={styles.View_565_5617}>
        <Text style={styles.Text_565_5617}>3 Month Term</Text>
      </View>
      <View style={styles.View_565_5618}>
        <View style={styles.View_565_5619} />
        <View style={styles.View_565_5620}>
          <Text style={styles.Text_565_5620}>Start Earning Now</Text>
        </View>
      </View>
      <View style={styles.View_565_5621}>
        <Text style={styles.Text_565_5621}>
          Receive the earnings in your Crypto Wallet every 7 days
        </Text>
      </View>
      <View style={styles.View_565_5622}>
        <Text style={styles.Text_565_5622}>
          Earnings are paid in the currency of your allocated crypto or
          stablecoin
        </Text>
      </View>
      <View style={styles.View_565_5623}>
        <Text style={styles.Text_565_5623}>
          Frosted Rose Gold, lcy White, &amp; Obsidian cardholders are entitled
          to a 2% CRO bonus
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/59e65cda-243e-4655-9618-cd62a3b931f9"
        }}
        style={styles.ImageBackground_565_5624}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/19528f15-f084-4310-b0b2-5dfee7805c3f"
        }}
        style={styles.ImageBackground_565_5625}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4030dbd9-e52d-4fd7-ae4a-9d9e48e526d5"
        }}
        style={styles.ImageBackground_565_5626}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55abd04b-d199-403b-ba42-c8e1e1340c93"
        }}
        style={styles.ImageBackground_565_5627}
      />
      <View style={styles.View_565_5628}>
        <Text style={styles.Text_565_5628}>4% p.a.</Text>
      </View>
      <View style={styles.View_565_5629}>
        <Text style={styles.Text_565_5629}>4% p.a.</Text>
      </View>
      <View style={styles.View_565_5630}>
        <Text style={styles.Text_565_5630}>4% p.a.</Text>
      </View>
      <View style={styles.View_565_5631}>
        <Text style={styles.Text_565_5631}>4% p.a.</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3cb89619-8fda-4c79-a21a-c45501bf14c2"
        }}
        style={styles.ImageBackground_565_5632}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/881214df-2baa-44f1-b53b-1d4170471d40"
        }}
        style={styles.ImageBackground_565_5633}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fc336aa1-169f-42b5-b251-9ab391cc2a60"
        }}
        style={styles.ImageBackground_565_5634}
      />
      <View style={styles.View_565_5635}>
        <Text style={styles.Text_565_5635}>Bitcoin</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b0b7637e-afec-421e-bb87-1ddf29bc28dc"
        }}
        style={styles.ImageBackground_565_5636}
      />
      <View style={styles.View_565_5637}>
        <Text style={styles.Text_565_5637}>Ethereum</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb48dca0-b7c7-4da4-9600-eb9aaf416e0e"
        }}
        style={styles.ImageBackground_565_5638}
      />
      <View style={styles.View_565_5639}>
        <Text style={styles.Text_565_5639}>BNB </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c714f615-9c3f-4747-ae1a-b75d06734279"
        }}
        style={styles.ImageBackground_565_5640}
      />
      <View style={styles.View_565_5641}>
        <Text style={styles.Text_565_5641}>Tether</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4f9cf842-b741-47ab-a519-cc3320a58bac"
        }}
        style={styles.ImageBackground_565_5642}
      />
      <View style={styles.View_565_5643}>
        <View style={styles.View_565_5644} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ad264a11-f529-4c8b-9d72-1064f1e83ef7"
          }}
          style={styles.ImageBackground_565_5645}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/13753a17-894f-427d-9ecb-261ddfc24498"
          }}
          style={styles.ImageBackground_565_5649}
        />
      </View>
      <View style={styles.View_565_5650}>
        <Text style={styles.Text_565_5650}>Crypto Earn</Text>
      </View>
      <View style={styles.View_565_5651}>
        <View style={styles.View_565_5652}>
          <Text style={styles.Text_565_5652}>9:41</Text>
        </View>
        <View style={styles.View_565_5653}>
          <View style={styles.View_565_5654}>
            <View style={styles.View_565_5655} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a49f5a16-e5a6-426a-bd2b-cfe7e81908cd"
              }}
              style={styles.ImageBackground_565_5656}
            />
            <View style={styles.View_565_5657} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e80a4d9-35de-4cb9-adf1-7dc69678e505"
              }}
              style={styles.ImageBackground_565_5658}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fde1baca-7456-4174-a2c0-a9c75bc8be8b"
              }}
              style={styles.ImageBackground_565_5659}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f059a444-d5ad-4935-808b-7818088acc3e"
              }}
              style={styles.ImageBackground_565_5660}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f7835593-f85e-4c62-bddd-c51bb32ed432"
              }}
              style={styles.ImageBackground_565_5661}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/37d0e542-6ab6-4840-9c34-a2398beff631"
              }}
              style={styles.ImageBackground_565_5662}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe9ebde7-8d17-4101-af9a-ee75f480caf3"
              }}
              style={styles.ImageBackground_565_5663}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f5afb4bc-a78f-4615-8345-7fbc6986bb74"
              }}
              style={styles.ImageBackground_565_5664}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_565_5665}>
        <View style={styles.View_565_5666} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d4b99c4-e519-41bc-8aba-e4a30bf0b3da"
          }}
          style={styles.ImageBackground_565_5667}
        />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_565_5668}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("565_5703"))
        }
      >
        <View style={styles.View_565_5669} />
        <View style={styles.View_565_5670} />
        <View style={styles.View_565_5671}>
          <Text style={styles.Text_565_5671}>Select Cryptocurrency</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a0e0d0fe-6fda-44aa-888d-35b9dc6e68cf"
          }}
          style={styles.ImageBackground_565_5672}
        />
        <View style={styles.View_565_5675}>
          <Text style={styles.Text_565_5675}>BTC</Text>
        </View>
        <View style={styles.View_565_5676}>
          <Text style={styles.Text_565_5676}>ETH</Text>
        </View>
        <View style={styles.View_565_5677}>
          <Text style={styles.Text_565_5677}>BNV</Text>
        </View>
        <View style={styles.View_565_5678}>
          <Text style={styles.Text_565_5678}>TEH</Text>
        </View>
        <View style={styles.View_565_5679}>
          <Text style={styles.Text_565_5679}>CDN</Text>
        </View>
        <View style={styles.View_565_5680}>
          <Text style={styles.Text_565_5680}>DGC</Text>
        </View>
        <View style={styles.View_565_5681}>
          <Text style={styles.Text_565_5681}>SHI</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1a7add0f-765c-457c-8f1b-73aa4ba9f3cc"
          }}
          style={styles.ImageBackground_565_5682}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7d6f1726-accf-4084-9054-244e1c9ce93f"
          }}
          style={styles.ImageBackground_565_5683}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bb98a38c-2a08-4845-b605-4c4ccd5c2dc4"
          }}
          style={styles.ImageBackground_565_5684}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8e95b226-d71f-40ef-b9e3-44476e01db10"
          }}
          style={styles.ImageBackground_565_5685}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/88581430-6c50-45ba-a4b8-10ada0eeab45"
          }}
          style={styles.ImageBackground_565_5686}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b12fe0ea-89ec-44e7-997b-838152ede8e2"
          }}
          style={styles.ImageBackground_565_5687}
        />
        <View style={styles.View_565_5688}>
          <View style={styles.View_565_5689}>
            <Text style={styles.Text_565_5689}>Bitcoin</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/77f0acc9-8474-4201-bd6e-e3b69c5950df"
            }}
            style={styles.ImageBackground_565_5690}
          />
          <View style={styles.View_565_5691}>
            <Text style={styles.Text_565_5691}>Ethereum</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7cb07d04-44d3-4c3d-bc8d-ad17bfff615b"
            }}
            style={styles.ImageBackground_565_5692}
          />
          <View style={styles.View_565_5693}>
            <Text style={styles.Text_565_5693}>BNB </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/58c11e00-34f9-44b1-899c-500df3b2e62d"
            }}
            style={styles.ImageBackground_565_5694}
          />
          <View style={styles.View_565_5695}>
            <Text style={styles.Text_565_5695}>Tether</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/242c882e-1b8e-49a9-95ba-1e2136e632de"
            }}
            style={styles.ImageBackground_565_5696}
          />
          <View style={styles.View_565_5697}>
            <Text style={styles.Text_565_5697}>Cardano</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e758c8b6-95ec-42fa-8255-c3f9fb211809"
            }}
            style={styles.ImageBackground_565_5698}
          />
          <View style={styles.View_565_5699}>
            <Text style={styles.Text_565_5699}>Dogecoin</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b74c55a7-487f-4032-8140-de8dd3b42152"
            }}
            style={styles.ImageBackground_565_5700}
          />
          <View style={styles.View_565_5701}>
            <Text style={styles.Text_565_5701}>Shibu Inu</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/249ea21b-2b06-4cff-b94d-e25ba63962c0"
            }}
            style={styles.ImageBackground_565_5702}
          />
        </View>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("123%") },
  View_565_5615: {
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
  View_565_5616: {
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
  Text_565_5616: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5617: {
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
  Text_565_5617: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5618: {
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
  View_565_5619: {
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
  View_565_5620: {
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
  Text_565_5620: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.96,
    textTransform: "none"
  },
  View_565_5621: {
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
  Text_565_5621: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5622: {
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
  Text_565_5622: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5623: {
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
  Text_565_5623: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_5624: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_565_5625: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_565_5626: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_565_5627: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  View_565_5628: {
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
  Text_565_5628: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5629: {
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
  Text_565_5629: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5630: {
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
  Text_565_5630: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5631: {
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
  Text_565_5631: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_5632: {
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
  ImageBackground_565_5633: {
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
  ImageBackground_565_5634: {
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
  View_565_5635: {
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
  Text_565_5635: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_5636: {
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
  View_565_5637: {
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
  Text_565_5637: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_5638: {
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
  View_565_5639: {
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
  Text_565_5639: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_5640: {
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
  View_565_5641: {
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
  Text_565_5641: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_5642: {
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
  View_565_5643: {
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
  View_565_5644: {
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
  ImageBackground_565_5645: {
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
  ImageBackground_565_5649: {
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
  View_565_5650: {
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
  Text_565_5650: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5651: {
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
  View_565_5652: {
    width: wp("7%"),
    minWidth: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_565_5652: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_565_5653: {
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
  View_565_5654: {
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
  View_565_5655: {
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
  ImageBackground_565_5656: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("1%")
  },
  View_565_5657: {
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
  ImageBackground_565_5658: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  ImageBackground_565_5659: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%")
  },
  ImageBackground_565_5660: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%")
  },
  ImageBackground_565_5661: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_565_5662: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_565_5663: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_565_5664: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_565_5665: {
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
  View_565_5666: {
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
  ImageBackground_565_5667: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  TouchableOpacity_565_5668: {
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
  View_565_5669: {
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
  View_565_5670: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("76%"),
    minHeight: hp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("47%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_565_5671: {
    width: wp("54%"),
    minWidth: wp("54%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("50%"),
    justifyContent: "flex-start"
  },
  Text_565_5671: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_5672: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%")
  },
  View_565_5675: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("58%"),
    justifyContent: "center"
  },
  Text_565_5675: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5676: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("67%"),
    justifyContent: "center"
  },
  Text_565_5676: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5677: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("86%"),
    justifyContent: "center"
  },
  Text_565_5677: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5678: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("77%"),
    justifyContent: "center"
  },
  Text_565_5678: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5679: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("96%"),
    justifyContent: "center"
  },
  Text_565_5679: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5680: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("106%"),
    justifyContent: "center"
  },
  Text_565_5680: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_5681: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("115%"),
    justifyContent: "center"
  },
  Text_565_5681: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_5682: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("64%")
  },
  ImageBackground_565_5683: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("73%")
  },
  ImageBackground_565_5684: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("83%")
  },
  ImageBackground_565_5685: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("93%")
  },
  ImageBackground_565_5686: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("102%")
  },
  ImageBackground_565_5687: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("112%")
  },
  View_565_5688: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("63%"),
    minHeight: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("57%")
  },
  View_565_5689: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_565_5689: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_5690: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_565_5691: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_565_5691: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_5692: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("9%"),
    resizeMode: "cover"
  },
  View_565_5693: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_565_5693: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_5694: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%")
  },
  View_565_5695: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_565_5695: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_5696: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%")
  },
  View_565_5697: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("39%"),
    justifyContent: "flex-start"
  },
  Text_565_5697: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_5698: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37%")
  },
  View_565_5699: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_565_5699: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_5700: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("47%")
  },
  View_565_5701: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("58%"),
    justifyContent: "flex-start"
  },
  Text_565_5701: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_5702: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("57%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
