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
      <View style={styles.View_565_491}>
        <View style={styles.View_565_492}>
          <View style={styles.View_565_493}>
            <Text style={styles.Text_565_493}>9:41</Text>
          </View>
          <View style={styles.View_565_494}>
            <View style={styles.View_565_495}>
              <View style={styles.View_565_496} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d75e5b6-f32f-40a9-9851-758f3223478a"
                }}
                style={styles.ImageBackground_565_497}
              />
              <View style={styles.View_565_498} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/404eb85d-6391-4a4a-9876-140bbc637e97"
                }}
                style={styles.ImageBackground_565_499}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1c3520f-a626-4de4-802d-6983dff055d7"
                }}
                style={styles.ImageBackground_565_500}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b322aebe-6a1d-4795-bcdc-6cc8ea681321"
                }}
                style={styles.ImageBackground_565_501}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c858d9a6-37a2-4478-9a46-adf84fa968d8"
                }}
                style={styles.ImageBackground_565_502}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/280771d4-118f-4dc8-a311-2ff1d2ad3ec6"
                }}
                style={styles.ImageBackground_565_503}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c470c520-3c5c-4aa5-ad1a-96d5017e49c0"
                }}
                style={styles.ImageBackground_565_504}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/da22b9e4-0416-4b4f-a927-07f67f291442"
                }}
                style={styles.ImageBackground_565_505}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_565_506}>
          <Text style={styles.Text_565_506}>Favourites</Text>
        </View>
        <View style={styles.View_565_507}>
          <Text style={styles.Text_565_507}>Top Gainers</Text>
        </View>
        <View style={styles.View_565_508}>
          <View style={styles.View_565_509} />
          <View style={styles.View_565_510}>
            <Text style={styles.Text_565_510}>BTC</Text>
          </View>
          <View style={styles.View_565_511}>
            <Text style={styles.Text_565_511}>Bitcoin</Text>
          </View>
          <View style={styles.View_565_512}>
            <Text style={styles.Text_565_512}>-4.83%</Text>
          </View>
          <View style={styles.View_565_513}>
            <Text style={styles.Text_565_513}>$100.14</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e62cdb4a-075a-48da-9a98-f4f68c620170"
            }}
            style={styles.ImageBackground_565_514}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e50c6b85-18b0-4ca3-97ef-674d55e93bcc"
            }}
            style={styles.ImageBackground_565_515}
          />
        </View>
        <View style={styles.View_565_516}>
          <View style={styles.View_565_517} />
          <View style={styles.View_565_518}>
            <Text style={styles.Text_565_518}>BTC</Text>
          </View>
          <View style={styles.View_565_519}>
            <Text style={styles.Text_565_519}>Bitcoin</Text>
          </View>
          <View style={styles.View_565_520}>
            <Text style={styles.Text_565_520}>-4.83%</Text>
          </View>
          <View style={styles.View_565_521}>
            <Text style={styles.Text_565_521}>$100.14</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e3fd641d-d459-4959-8996-1af747041a69"
            }}
            style={styles.ImageBackground_565_522}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51b56b0c-31ae-4bec-a48b-f1600872af51"
            }}
            style={styles.ImageBackground_565_523}
          />
        </View>
        <View style={styles.View_565_524}>
          <View style={styles.View_565_525} />
          <View style={styles.View_565_526}>
            <Text style={styles.Text_565_526}>BTC</Text>
          </View>
          <View style={styles.View_565_527}>
            <Text style={styles.Text_565_527}>Bitcoin</Text>
          </View>
          <View style={styles.View_565_528}>
            <Text style={styles.Text_565_528}>-4.83%</Text>
          </View>
          <View style={styles.View_565_529}>
            <Text style={styles.Text_565_529}>$100.14</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1ae3f9e1-398c-4b68-911c-b3f88ae10fad"
            }}
            style={styles.ImageBackground_565_530}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55296f19-aebc-471f-9549-4bafa864065e"
            }}
            style={styles.ImageBackground_565_531}
          />
        </View>
        <View style={styles.View_565_532}>
          <View style={styles.View_565_533} />
          <View style={styles.View_565_534}>
            <Text style={styles.Text_565_534}>BTC</Text>
          </View>
          <View style={styles.View_565_535}>
            <Text style={styles.Text_565_535}>Bitcoin</Text>
          </View>
          <View style={styles.View_565_536}>
            <Text style={styles.Text_565_536}>-4.83%</Text>
          </View>
          <View style={styles.View_565_537}>
            <Text style={styles.Text_565_537}>$100.14</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/da05f96b-4aad-4029-9050-778add487d81"
            }}
            style={styles.ImageBackground_565_538}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a097af6d-bd71-4ddb-b73f-1e7184d749e9"
            }}
            style={styles.ImageBackground_565_539}
          />
        </View>
        <View style={styles.View_565_540}>
          <View style={styles.View_565_541} />
          <View style={styles.View_565_542}>
            <Text style={styles.Text_565_542}>ETH</Text>
          </View>
          <View style={styles.View_565_543}>
            <Text style={styles.Text_565_543}>Ethereum</Text>
          </View>
          <View style={styles.View_565_544}>
            <Text style={styles.Text_565_544}>-4.83%</Text>
          </View>
          <View style={styles.View_565_545}>
            <Text style={styles.Text_565_545}>$100.14</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/667b84d4-e168-40f9-80f6-1f7e04a1a7fb"
            }}
            style={styles.ImageBackground_565_546}
          />
        </View>
        <View style={styles.View_565_547}>
          <View style={styles.View_565_548} />
          <View style={styles.View_565_549}>
            <Text style={styles.Text_565_549}>ETH</Text>
          </View>
          <View style={styles.View_565_550}>
            <Text style={styles.Text_565_550}>Ethereum</Text>
          </View>
          <View style={styles.View_565_551}>
            <Text style={styles.Text_565_551}>-4.83%</Text>
          </View>
          <View style={styles.View_565_552}>
            <Text style={styles.Text_565_552}>$100.14</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/56be1734-4f12-4b1c-b239-d2c5b9460bd0"
            }}
            style={styles.ImageBackground_565_553}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ceaae8ef-06d4-4be0-949a-966675e6928e"
          }}
          style={styles.ImageBackground_565_554}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8b310ac4-ef38-4627-a14a-da3c1528285f"
          }}
          style={styles.ImageBackground_565_555}
        />
        <View style={styles.View_565_556}>
          <View style={styles.View_565_557} />
          <View style={styles.View_565_558}>
            <View style={styles.View_565_559}>
              <View style={styles.View_565_560} />
              <View style={styles.View_565_561} />
              <View style={styles.View_565_562} />
            </View>
          </View>
        </View>
        <View style={styles.View_565_563}>
          <View style={styles.View_565_564}>
            <View style={styles.View_565_565} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2742aacd-39a5-45fd-ba19-e062bc31527b"
            }}
            style={styles.ImageBackground_565_566}
          />
        </View>
        <View style={styles.View_565_570}>
          <View style={styles.View_565_571}>
            <View style={styles.View_565_572} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ca063f60-04f7-4868-96c7-200ab5b6e76e"
            }}
            style={styles.ImageBackground_565_573}
          />
        </View>
        <View style={styles.View_565_574}>
          <Text style={styles.Text_565_574}>See more</Text>
        </View>
        <View style={styles.View_565_575}>
          <View style={styles.View_565_576}>
            <View style={styles.View_565_577} />
            <View style={styles.View_565_578} />
          </View>
          <View style={styles.View_565_579}>
            <View style={styles.View_565_580} />
            <View style={styles.View_565_581}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/34d10639-d607-4436-93a1-85f306c1f588"
                }}
                style={styles.ImageBackground_565_582}
              />
              <View style={styles.View_565_583} />
              <View style={styles.View_565_584}>
                <View style={styles.View_565_585}>
                  <Text style={styles.Text_565_585}>+13%</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6ec4a013-568a-4da5-a4be-3d2937f5b106"
                  }}
                  style={styles.ImageBackground_565_586}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_565_587}>
            <Text style={styles.Text_565_587}>Balance</Text>
          </View>
          <View style={styles.View_565_588}>
            <Text style={styles.Text_565_588}>Monthly profit</Text>
          </View>
          <View style={styles.View_565_589}>
            <Text style={styles.Text_565_589}>$14,400</Text>
          </View>
          <View style={styles.View_565_590}>
            <Text style={styles.Text_565_590}>$105.40</Text>
          </View>
          <View style={styles.View_565_591}>
            <Text style={styles.Text_565_591}>USD</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8b25f550-5e47-4cf7-aa2e-a8e89ea21df9"
            }}
            style={styles.ImageBackground_565_592}
          />
        </View>
        <View style={styles.View_565_593} />
        <View style={styles.View_565_594} />
        <View style={styles.View_565_595}>
          <Text style={styles.Text_565_595}>
            Crypto Concepts Decoded for All!
          </Text>
        </View>
        <View style={styles.View_565_596}>
          <Text style={styles.Text_565_596}>
            Watch Fincocktail clear doubts about cryptos one question at a time
          </Text>
        </View>
        <View style={styles.View_565_597}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ba732dc0-f7c7-4eb7-9644-74962e957b91"
            }}
            style={styles.ImageBackground_565_598}
          />
          <View style={styles.View_565_599}>
            <View style={styles.View_565_600}>
              <Text style={styles.Text_565_600}>Market</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5ff370b8-2f61-4a95-89a7-808572e350c5"
              }}
              style={styles.ImageBackground_565_601}
            />
          </View>
          <View style={styles.View_565_602}>
            <View style={styles.View_565_603}>
              <Text style={styles.Text_565_603}>Reward</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/773de778-466d-4c06-b11a-52f3d551c276"
              }}
              style={styles.ImageBackground_565_604}
            />
          </View>
          <View style={styles.View_565_605}>
            <View style={styles.View_565_606}>
              <Text style={styles.Text_565_606}>Card</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ad848038-ad45-4d40-89aa-499965b914f9"
              }}
              style={styles.ImageBackground_565_607}
            />
          </View>
          <View style={styles.View_565_608}>
            <View style={styles.View_565_609}>
              <View style={styles.View_565_610}>
                <Text style={styles.Text_565_610}>Wallet</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/facc666a-15ab-4f5b-888f-a95877e8d8ed"
              }}
              style={styles.ImageBackground_565_611}
            />
          </View>
          <View style={styles.View_565_612}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6218ad9c-2df9-4910-8e9a-f8954f625d22"
              }}
              style={styles.ImageBackground_565_613}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29d122c4-556d-4497-a87c-b7618289226a"
              }}
              style={styles.ImageBackground_565_614}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_565_615} />
      <View style={styles.View_565_616} />
      <View style={styles.View_565_617} />
      <View style={styles.View_565_618}>
        <View style={styles.View_565_619}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/80268619-b273-4c7f-b9d4-0e0d3eebdc20"
            }}
            style={styles.ImageBackground_565_620}
          />
        </View>
        <View style={styles.View_565_621}>
          <View style={styles.View_565_622}>
            <View style={styles.View_565_623}>
              <View style={styles.View_565_624}>
                <Text style={styles.Text_565_624}>Eleanor Pena</Text>
              </View>
              <View style={styles.View_565_625}>
                <Text style={styles.Text_565_625}>tranthuy.nute@gmail.com</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_565_626}>
        <TouchableOpacity
          style={styles.TouchableOpacity_565_627}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("565_780"))
          }
        />
        <View style={styles.View_565_628} />
        <View style={styles.View_565_630}>
          <Text style={styles.Text_565_630}>Crypto Wallet</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_646_168}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("565_1598"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c053a137-e5f4-434d-b154-91b252bf6bce"
            }}
            style={styles.ImageBackground_565_629}
          />
          <View style={styles.View_565_632}>
            <Text style={styles.Text_565_632}>Pay</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_646_167}>
          <View style={styles.View_565_631}>
            <Text style={styles.Text_565_631}>Market</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f882661-8612-47ee-b8e9-541c1ae6b3fc"
            }}
            style={styles.ImageBackground_565_639}
          />
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_646_169}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("565_3083"))
          }
        >
          <View style={styles.View_565_636}>
            <Text style={styles.Text_565_636}>Rewards</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/316f8883-8394-44b0-8b1a-35c734ccd82e"
            }}
            style={styles.ImageBackground_565_640}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_646_170}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("565_5560"))
          }
        >
          <View style={styles.View_565_633}>
            <Text style={styles.Text_565_633}>Earn</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fffd501b-2abe-49cf-a720-0723d7800e80"
            }}
            style={styles.ImageBackground_565_641}
          />
        </TouchableOpacity>
        <View style={styles.View_646_171}>
          <View style={styles.View_565_635}>
            <Text style={styles.Text_565_635}>Credit</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/78e87dcc-b0bd-4761-9d69-095d70e0d1a0"
            }}
            style={styles.ImageBackground_565_642}
          />
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_646_172}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("565_1315"))
          }
        >
          <View style={styles.View_565_634}>
            <Text style={styles.Text_565_634}>Buy</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/df0c162a-2e64-46aa-bf27-a0df5a6876ad"
            }}
            style={styles.ImageBackground_565_643}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_646_173}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("565_3316"))
          }
        >
          <View style={styles.View_565_637}>
            <Text style={styles.Text_565_637}>Refer</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d0bf6477-a7be-436d-a943-64bf57485834"
            }}
            style={styles.ImageBackground_565_647}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_646_174}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("565_5420"))
          }
        >
          <View style={styles.View_565_638}>
            <Text style={styles.Text_565_638}>Settings</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/15dafaea-6c41-4674-a60f-86390633f4e4"
            }}
            style={styles.ImageBackground_565_648}
          />
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a6283698-39e2-43f5-9742-6d098c1f0ec8"
        }}
        style={styles.ImageBackground_565_649}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1ad956fc-1bde-4702-b45f-cfbef5bf8f2d"
        }}
        style={styles.ImageBackground_565_652}
      />
      <View style={styles.View_565_653}>
        <View style={styles.View_565_654}>
          <View style={styles.View_565_655}>
            <View style={styles.View_565_656}>
              <Text style={styles.Text_565_656}>9:41</Text>
            </View>
            <View style={styles.View_565_657}>
              <View style={styles.View_565_658}>
                <View style={styles.View_565_659} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e9d46448-bfe3-4fa4-895f-ea20fe17362a"
                  }}
                  style={styles.ImageBackground_565_660}
                />
                <View style={styles.View_565_661} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/53564da7-54fb-4391-aa60-a3212031280b"
                  }}
                  style={styles.ImageBackground_565_662}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aa998488-ec5f-438f-ac09-8282d16ed2f5"
                  }}
                  style={styles.ImageBackground_565_663}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eb15ece9-e8c0-4251-940d-6a7b32545590"
                  }}
                  style={styles.ImageBackground_565_664}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/131a3e7b-5536-4eca-905e-41303e063626"
                  }}
                  style={styles.ImageBackground_565_665}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/456ff657-3228-4b35-a0f1-6e73450a09d3"
                  }}
                  style={styles.ImageBackground_565_666}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6e5202d0-57bf-4595-9627-45425a9e8c18"
                  }}
                  style={styles.ImageBackground_565_667}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d59e64e1-9932-44c8-8d9e-423b7a30eb13"
                  }}
                  style={styles.ImageBackground_565_668}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_565_669}>
            <Text style={styles.Text_565_669}>Favourites</Text>
          </View>
          <View style={styles.View_565_670}>
            <Text style={styles.Text_565_670}>Top Gainers</Text>
          </View>
          <View style={styles.View_565_671}>
            <View style={styles.View_565_672} />
            <View style={styles.View_565_673}>
              <Text style={styles.Text_565_673}>BTC</Text>
            </View>
            <View style={styles.View_565_674}>
              <Text style={styles.Text_565_674}>Bitcoin</Text>
            </View>
            <View style={styles.View_565_675}>
              <Text style={styles.Text_565_675}>+4.83%</Text>
            </View>
            <View style={styles.View_565_676}>
              <Text style={styles.Text_565_676}>$100.14</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/69d512f1-b36d-4de1-9cb7-b3bafa91321a"
              }}
              style={styles.ImageBackground_565_677}
            />
          </View>
          <View style={styles.View_565_678}>
            <View style={styles.View_565_679} />
            <View style={styles.View_565_680}>
              <Text style={styles.Text_565_680}>BTC</Text>
            </View>
            <View style={styles.View_565_681}>
              <Text style={styles.Text_565_681}>Bitcoin</Text>
            </View>
            <View style={styles.View_565_682}>
              <Text style={styles.Text_565_682}>+4.83%</Text>
            </View>
            <View style={styles.View_565_683}>
              <Text style={styles.Text_565_683}>$100.14</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/186aab65-b6ad-404a-a0fe-7d3e756bb42b"
              }}
              style={styles.ImageBackground_565_684}
            />
          </View>
          <View style={styles.View_565_685}>
            <View style={styles.View_565_686} />
            <View style={styles.View_565_687}>
              <Text style={styles.Text_565_687}>BTC</Text>
            </View>
            <View style={styles.View_565_688}>
              <Text style={styles.Text_565_688}>Bitcoin</Text>
            </View>
            <View style={styles.View_565_689}>
              <Text style={styles.Text_565_689}>+4.83%</Text>
            </View>
            <View style={styles.View_565_690}>
              <Text style={styles.Text_565_690}>$100.14</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/387141fb-f1a4-48ac-bb35-668d311150c2"
              }}
              style={styles.ImageBackground_565_691}
            />
          </View>
          <View style={styles.View_565_692}>
            <View style={styles.View_565_693} />
            <View style={styles.View_565_694}>
              <Text style={styles.Text_565_694}>BTC</Text>
            </View>
            <View style={styles.View_565_695}>
              <Text style={styles.Text_565_695}>Bitcoin</Text>
            </View>
            <View style={styles.View_565_696}>
              <Text style={styles.Text_565_696}>-4.83%</Text>
            </View>
            <View style={styles.View_565_697}>
              <Text style={styles.Text_565_697}>$100.14</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a166bf25-dc41-4d38-aa03-28b6036d8380"
              }}
              style={styles.ImageBackground_565_698}
            />
          </View>
          <View style={styles.View_565_699}>
            <View style={styles.View_565_700} />
            <View style={styles.View_565_701}>
              <Text style={styles.Text_565_701}>ETH</Text>
            </View>
            <View style={styles.View_565_702}>
              <Text style={styles.Text_565_702}>Ethereum</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0cf20fd4-e343-4be6-bf4e-63c3802f69de"
              }}
              style={styles.ImageBackground_565_703}
            />
            <View style={styles.View_565_704}>
              <Text style={styles.Text_565_704}>+4.83%</Text>
            </View>
            <View style={styles.View_565_705}>
              <Text style={styles.Text_565_705}>$100.14</Text>
            </View>
          </View>
          <View style={styles.View_565_706}>
            <View style={styles.View_565_707} />
            <View style={styles.View_565_708}>
              <Text style={styles.Text_565_708}>ETH</Text>
            </View>
            <View style={styles.View_565_709}>
              <Text style={styles.Text_565_709}>Ethereum</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/74f0649f-6607-4ddc-8b2c-d1d87cfc31cb"
              }}
              style={styles.ImageBackground_565_710}
            />
            <View style={styles.View_565_711}>
              <Text style={styles.Text_565_711}>-4.83%</Text>
            </View>
            <View style={styles.View_565_712}>
              <Text style={styles.Text_565_712}>$100.14</Text>
            </View>
          </View>
          <View style={styles.View_565_713}>
            <View style={styles.View_565_714} />
            <View style={styles.View_565_715}>
              <View style={styles.View_565_716}>
                <View style={styles.View_565_717} />
                <View style={styles.View_565_718} />
                <View style={styles.View_565_719} />
              </View>
            </View>
          </View>
          <View style={styles.View_565_727}>
            <View style={styles.View_565_728}>
              <View style={styles.View_565_729} />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a9e3a586-7a04-4450-bb7a-0ff8d9f86c1d"
              }}
              style={styles.ImageBackground_565_730}
            />
          </View>
          <View style={styles.View_565_731}>
            <Text style={styles.Text_565_731}>See more</Text>
          </View>
          <View style={styles.View_565_732}>
            <View style={styles.View_565_733}>
              <View style={styles.View_565_734} />
              <View style={styles.View_565_735} />
            </View>
            <View style={styles.View_565_736}>
              <View style={styles.View_565_737} />
              <View style={styles.View_565_738}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c85ada13-e409-4a95-875c-5ed91709c36c"
                  }}
                  style={styles.ImageBackground_565_739}
                />
                <View style={styles.View_565_740} />
                <View style={styles.View_565_741}>
                  <View style={styles.View_565_742}>
                    <Text style={styles.Text_565_742}>+13%</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a455bae-1d46-4c84-b65d-fb9dbdcb8d06"
                    }}
                    style={styles.ImageBackground_565_743}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_565_744}>
              <Text style={styles.Text_565_744}>Balance</Text>
            </View>
            <View style={styles.View_565_745}>
              <Text style={styles.Text_565_745}>Monthly profit</Text>
            </View>
            <View style={styles.View_565_746}>
              <Text style={styles.Text_565_746}>$14,400</Text>
            </View>
            <View style={styles.View_565_747}>
              <Text style={styles.Text_565_747}>$105.40</Text>
            </View>
            <View style={styles.View_565_748}>
              <Text style={styles.Text_565_748}>USD</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36337597-4b40-48ae-9a09-f18b74bac5c6"
              }}
              style={styles.ImageBackground_565_749}
            />
          </View>
          <View style={styles.View_565_750} />
          <View style={styles.View_565_751}>
            <Text style={styles.Text_565_751}>Watch Now</Text>
          </View>
          <View style={styles.View_565_752} />
          <View style={styles.View_565_753} />
          <View style={styles.View_565_754} />
          <View style={styles.View_565_755} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6837d748-ba39-42e2-9988-a40ae9f8513a"
            }}
            style={styles.ImageBackground_565_756}
          />
          <View style={styles.View_565_757}>
            <Text style={styles.Text_565_757}>
              Crypto Concepts Decoded for All!
            </Text>
          </View>
          <View style={styles.View_565_758}>
            <Text style={styles.Text_565_758}>
              Watch Fincocktail clear doubts about cryptos one question at a
              time
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ca538709-6335-4969-ba0a-9b7d4910ae48"
            }}
            style={styles.ImageBackground_565_759}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e6922bc2-225f-47bd-b879-af82e900a44e"
            }}
            style={styles.ImageBackground_565_760}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6df242ec-4e80-47ea-b67d-e02488c59a2d"
            }}
            style={styles.ImageBackground_565_761}
          />
          <View style={styles.View_565_762}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/097f40d8-90a1-4a09-8441-425521615c9d"
              }}
              style={styles.ImageBackground_565_763}
            />
            <View style={styles.View_565_764}>
              <View style={styles.View_565_765}>
                <Text style={styles.Text_565_765}>Market</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/692694de-492f-48e6-b8dd-54e7354697a6"
                }}
                style={styles.ImageBackground_565_766}
              />
            </View>
            <View style={styles.View_565_767}>
              <View style={styles.View_565_768}>
                <Text style={styles.Text_565_768}>Reward</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c7d424db-3184-43c4-ace9-2b32145eeab7"
                }}
                style={styles.ImageBackground_565_769}
              />
            </View>
            <View style={styles.View_565_770}>
              <View style={styles.View_565_771}>
                <Text style={styles.Text_565_771}>Card</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e7eacf4c-577c-4e94-9542-1f47f2a9533e"
                }}
                style={styles.ImageBackground_565_772}
              />
            </View>
            <View style={styles.View_565_773}>
              <View style={styles.View_565_774}>
                <View style={styles.View_565_775}>
                  <Text style={styles.Text_565_775}>Wallet</Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c6f4ea5-9ca5-4819-ab76-3611fc544364"
                }}
                style={styles.ImageBackground_565_776}
              />
            </View>
            <View style={styles.View_565_777}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bfba1ae2-3171-44e0-afd0-b0fefd506644"
                }}
                style={styles.ImageBackground_565_778}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/11a38321-55f0-4224-b2aa-a47165b18f68"
                }}
                style={styles.ImageBackground_565_779}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(245, 245, 245, 1)" },
  View_2: { height: hp("111%") },
  View_565_491: {
    width: wp("110%"),
    minWidth: wp("110%"),
    height: hp("112%"),
    minHeight: hp("112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  View_565_492: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%")
  },
  View_565_493: {
    width: wp("7%"),
    minWidth: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_565_493: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_565_494: {
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
  View_565_495: {
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
  View_565_496: {
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
  ImageBackground_565_497: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("1%")
  },
  View_565_498: {
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
  ImageBackground_565_499: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  ImageBackground_565_500: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%")
  },
  ImageBackground_565_501: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%")
  },
  ImageBackground_565_502: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_565_503: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_565_504: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_565_505: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_565_506: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("40%"),
    justifyContent: "flex-start"
  },
  Text_565_506: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_507: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("66%"),
    justifyContent: "flex-start"
  },
  Text_565_507: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_508: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("45%")
  },
  View_565_509: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_565_510: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_565_510: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_511: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_565_511: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_512: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_565_512: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_513: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_565_513: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_514: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("14%"),
    resizeMode: "cover"
  },
  ImageBackground_565_515: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%")
  },
  View_565_516: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("71%")
  },
  View_565_517: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_565_518: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_565_518: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_519: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_565_519: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_520: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_565_520: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_521: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_565_521: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_522: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("14%"),
    resizeMode: "cover"
  },
  ImageBackground_565_523: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%")
  },
  View_565_524: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("45%")
  },
  View_565_525: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_565_526: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_565_526: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_527: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_565_527: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_528: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_565_528: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_529: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_565_529: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_530: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("14%"),
    resizeMode: "cover"
  },
  ImageBackground_565_531: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%")
  },
  View_565_532: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("71%")
  },
  View_565_533: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_565_534: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_565_534: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_535: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_565_535: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_536: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_565_536: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_537: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_565_537: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_538: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("14%"),
    resizeMode: "cover"
  },
  ImageBackground_565_539: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%")
  },
  View_565_540: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("45%")
  },
  View_565_541: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_565_542: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_565_542: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_543: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_565_543: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_544: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_565_544: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_545: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_565_545: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_546: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%")
  },
  View_565_547: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("71%")
  },
  View_565_548: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_565_549: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_565_549: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_550: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_565_550: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_551: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_565_551: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_552: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_565_552: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_553: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%")
  },
  ImageBackground_565_554: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("59%"),
    resizeMode: "cover"
  },
  ImageBackground_565_555: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("85%"),
    resizeMode: "cover"
  },
  View_565_556: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("93%")
  },
  View_565_557: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_565_558: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("18%")
  },
  View_565_559: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_565_560: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_565_561: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_565_562: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_565_563: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("6%")
  },
  View_565_564: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_565_565: {
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
  ImageBackground_565_566: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_565_570: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("6%")
  },
  View_565_571: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_565_572: {
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
  ImageBackground_565_573: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_565_574: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("66%"),
    justifyContent: "flex-start"
  },
  Text_565_574: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_575: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("13%")
  },
  View_565_576: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_565_577: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("14%"),
    backgroundColor: "rgba(44, 44, 78, 1)"
  },
  View_565_578: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_565_579: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_565_580: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_565_581: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_565_582: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_565_583: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("16%"),
    backgroundColor: "rgba(88, 189, 125, 1)"
  },
  View_565_584: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("16%")
  },
  View_565_585: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_565_585: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_586: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_565_587: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_565_587: {
    color: "rgba(179, 180, 183, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_588: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_565_588: {
    color: "rgba(179, 180, 183, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_589: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_565_589: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_590: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_565_590: {
    color: "rgba(119, 126, 144, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_591: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_565_591: {
    color: "rgba(0, 0, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_592: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%")
  },
  View_565_593: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("96%")
  },
  View_565_594: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("93%")
  },
  View_565_595: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("95%"),
    justifyContent: "flex-start"
  },
  Text_565_595: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_596: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("99%"),
    justifyContent: "flex-start"
  },
  Text_565_596: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_597: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("96%")
  },
  ImageBackground_565_598: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  View_565_599: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("5%")
  },
  View_565_600: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_565_600: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_601: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_565_602: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("5%")
  },
  View_565_603: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_565_603: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_604: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_565_605: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("5%")
  },
  View_565_606: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_565_606: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_607: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_565_608: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("5%")
  },
  View_565_609: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  View_565_610: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_565_610: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_611: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_565_612: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("0%")
  },
  ImageBackground_565_613: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_565_614: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    resizeMode: "cover"
  },
  View_565_615: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("111%"),
    minHeight: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(44, 44, 78, 1)"
  },
  View_565_616: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("111%"),
    minHeight: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_565_617: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_565_618: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("5%")
  },
  View_565_619: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 216, 141, 1)",
    overflow: "hidden"
  },
  ImageBackground_565_620: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_565_621: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%")
  },
  View_565_622: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_565_623: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_565_624: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_565_624: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.15,
    textTransform: "none"
  },
  View_565_625: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_565_625: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.12,
    textTransform: "none"
  },
  View_565_626: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("64%"),
    minHeight: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%")
  },
  TouchableOpacity_565_627: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 0
  },
  View_565_628: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 0
  },
  View_565_630: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_565_630: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  TouchableOpacity_646_168: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("16%")
  },
  ImageBackground_565_629: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_565_632: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_565_632: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_646_167: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("9%")
  },
  View_565_631: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_565_631: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  ImageBackground_565_639: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_646_169: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("24%")
  },
  View_565_636: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_565_636: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  ImageBackground_565_640: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_646_170: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("31%")
  },
  View_565_633: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_565_633: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  ImageBackground_565_641: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_646_171: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("38%")
  },
  View_565_635: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_565_635: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  ImageBackground_565_642: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_646_172: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("46%")
  },
  View_565_634: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_565_634: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  ImageBackground_565_643: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_646_173: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("53%")
  },
  View_565_637: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_565_637: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  ImageBackground_565_647: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_646_174: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("61%")
  },
  View_565_638: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_565_638: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  ImageBackground_565_648: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_565_649: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%")
  },
  ImageBackground_565_652: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_565_653: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("81%"),
    minHeight: hp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("24%")
  },
  View_565_654: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("81%"),
    minHeight: hp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 245, 1)",
    overflow: "hidden"
  },
  View_565_655: {
    width: wp("62%"),
    minWidth: wp("62%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_565_656: {
    width: wp("5%"),
    minWidth: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_565_656: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 8.477428436279297,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.20954857766628265,
    textTransform: "none"
  },
  View_565_657: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%")
  },
  View_565_658: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_565_659: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    borderColor: "rgba(44, 44, 78, 1)",
    borderWidth: 0.6984952688217163
  },
  ImageBackground_565_660: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%")
  },
  View_565_661: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    backgroundColor: "rgba(44, 44, 78, 1)"
  },
  ImageBackground_565_662: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  ImageBackground_565_663: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  ImageBackground_565_664: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  ImageBackground_565_665: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_565_666: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_565_667: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  ImageBackground_565_668: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  View_565_669: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_565_669: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 9.175924301147461,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_670: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("51%"),
    justifyContent: "flex-start"
  },
  Text_565_670: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 9.175924301147461,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_671: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("54%")
  },
  View_565_672: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_565_673: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_565_673: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 7.778933525085449,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_674: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_565_674: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 6.3819427490234375,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_675: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_565_675: {
    color: "rgba(88, 189, 125, 1)",
    fontSize: 5.984951972961426,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_676: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_565_676: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 9.572914123535156,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_677: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("10%"),
    resizeMode: "cover"
  },
  View_565_678: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("36%")
  },
  View_565_679: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_565_680: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_565_680: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 7.778933525085449,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_681: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_565_681: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 6.3819427490234375,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_682: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_565_682: {
    color: "rgba(88, 189, 125, 1)",
    fontSize: 5.984951972961426,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_683: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_565_683: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 9.572914123535156,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_684: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("10%"),
    resizeMode: "cover"
  },
  View_565_685: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("51%")
  },
  View_565_686: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_565_687: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_565_687: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 7.778933525085449,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_688: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_565_688: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 6.3819427490234375,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_689: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_565_689: {
    color: "rgba(88, 189, 125, 1)",
    fontSize: 5.984951972961426,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_690: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_565_690: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 9.572914123535156,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_691: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("10%"),
    resizeMode: "cover"
  },
  View_565_692: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("33%")
  },
  View_565_693: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_565_694: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_565_694: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 7.778933525085449,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_695: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_565_695: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 6.3819427490234375,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_696: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_565_696: {
    color: "rgba(222, 35, 68, 1)",
    fontSize: 5.984951972961426,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_697: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_565_697: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 9.572914123535156,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_698: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("10%"),
    resizeMode: "cover"
  },
  View_565_699: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("52%")
  },
  View_565_700: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_565_701: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_565_701: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 7.778933525085449,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_702: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_565_702: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 6.3819427490234375,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_703: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("10%"),
    resizeMode: "cover"
  },
  View_565_704: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_565_704: {
    color: "rgba(88, 189, 125, 1)",
    fontSize: 5.984951972961426,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_705: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_565_705: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 9.572914123535156,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_706: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("34%")
  },
  View_565_707: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_565_708: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_565_708: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 7.778933525085449,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_709: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_565_709: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 6.3819427490234375,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_710: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("10%"),
    resizeMode: "cover"
  },
  View_565_711: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_565_711: {
    color: "rgba(222, 35, 68, 1)",
    fontSize: 5.984951972961426,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_712: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_565_712: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 9.572914123535156,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_713: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("66%")
  },
  View_565_714: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_565_715: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("14%")
  },
  View_565_716: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_565_717: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_565_718: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_565_719: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_565_727: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("6%")
  },
  View_565_728: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_565_729: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_565_730: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_565_731: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_565_731: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 6.3819427490234375,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_732: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("11%")
  },
  View_565_733: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_565_734: {
    width: wp("59%"),
    minWidth: wp("59%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("10%"),
    backgroundColor: "rgba(44, 44, 78, 1)"
  },
  View_565_735: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_565_736: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_565_737: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_565_738: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_565_739: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_565_740: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("12%"),
    backgroundColor: "rgba(88, 189, 125, 1)"
  },
  View_565_741: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("12%")
  },
  View_565_742: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_565_742: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.3819427490234375,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_743: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_565_744: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_565_744: {
    color: "rgba(179, 180, 183, 1)",
    fontSize: 7.778933525085449,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_745: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_565_745: {
    color: "rgba(179, 180, 183, 1)",
    fontSize: 7.778933525085449,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_746: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_565_746: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 20.145828247070312,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_747: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_565_747: {
    color: "rgba(119, 126, 144, 1)",
    fontSize: 13.763885498046875,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_748: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_565_748: {
    color: "rgba(0, 0, 255, 1)",
    fontSize: 9.175924301147461,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_749: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%")
  },
  View_565_750: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("78%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_565_751: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("79%"),
    justifyContent: "flex-start"
  },
  Text_565_751: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 6.3819427490234375,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_752: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("69%")
  },
  View_565_753: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("70%")
  },
  View_565_754: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("74%")
  },
  View_565_755: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("75%")
  },
  ImageBackground_565_756: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("72%")
  },
  View_565_757: {
    width: wp("44%"),
    minWidth: wp("44%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("69%"),
    justifyContent: "flex-start"
  },
  Text_565_757: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7.778933525085449,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_758: {
    width: wp("36%"),
    minWidth: wp("36%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("72%"),
    justifyContent: "flex-start"
  },
  Text_565_758: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 5.984951972961426,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_759: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("72%"),
    resizeMode: "cover"
  },
  ImageBackground_565_760: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("78%")
  },
  ImageBackground_565_761: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("78%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  View_565_762: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("69%")
  },
  ImageBackground_565_763: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_565_764: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("6%")
  },
  View_565_765: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_565_765: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 6.3819427490234375,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_766: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_565_767: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("4%")
  },
  View_565_768: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_565_768: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 6.3819427490234375,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_769: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_565_770: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("4%")
  },
  View_565_771: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_565_771: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 6.3819427490234375,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_772: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_565_773: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("7%")
  },
  View_565_774: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  View_565_775: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_565_775: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 6.3819427490234375,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_776: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_565_777: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("3%")
  },
  ImageBackground_565_778: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_565_779: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
