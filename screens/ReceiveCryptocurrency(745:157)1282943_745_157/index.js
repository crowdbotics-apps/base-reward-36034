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
      <View style={styles.View_745_159}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/06692a28-2b92-4f38-bb0a-066ad599f0b3"
          }}
          style={styles.ImageBackground_745_160}
        />
        <View style={styles.View_745_161} />
        <View style={styles.View_745_162} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f01d9bc-9cfd-4cc9-ac09-c3af947c2a12"
          }}
          style={styles.ImageBackground_745_163}
        />
        <View style={styles.View_745_167}>
          <View style={styles.View_745_168}>
            <Text style={styles.Text_745_168}>9:41</Text>
          </View>
          <View style={styles.View_745_169}>
            <View style={styles.View_745_170}>
              <View style={styles.View_745_171} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67c4b1f9-e223-4465-9ecf-d5b00f3e1b2d"
                }}
                style={styles.ImageBackground_745_172}
              />
              <View style={styles.View_745_173} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7c3a90aa-77d6-4ffc-8904-1435a659f28b"
                }}
                style={styles.ImageBackground_745_174}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1fd26ea-6da0-4cfd-a04b-912b22fb62eb"
                }}
                style={styles.ImageBackground_745_175}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/24a1bd9e-9c0f-4ab3-b57b-5e809cd14654"
                }}
                style={styles.ImageBackground_745_176}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/537f69d1-a1df-4baf-8659-f19fbfbd53a4"
                }}
                style={styles.ImageBackground_745_177}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/32652483-e101-4a32-803d-68f794cfc510"
                }}
                style={styles.ImageBackground_745_178}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f588b79-dfb9-41d6-b60d-d86f69803a51"
                }}
                style={styles.ImageBackground_745_179}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d25764e-477f-4306-ad96-1241160273d3"
                }}
                style={styles.ImageBackground_745_180}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_745_181}>
          <Text style={styles.Text_745_181}>Crypto Wallet</Text>
        </View>
        <View style={styles.View_745_182}>
          <Text style={styles.Text_745_182}>Buy</Text>
        </View>
        <View style={styles.View_745_183}>
          <Text style={styles.Text_745_183}>Sell</Text>
        </View>
        <View style={styles.View_745_184}>
          <Text style={styles.Text_745_184}>Pay</Text>
        </View>
        <View style={styles.View_745_185} />
        <View style={styles.View_745_186} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1feb86f4-b2b0-4f7c-a301-20bb3b85e297"
          }}
          style={styles.ImageBackground_745_187}
        />
        <View style={styles.View_745_190} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/45359d41-49df-4abb-b3ce-a3427550215e"
          }}
          style={styles.ImageBackground_745_191}
        />
        <View style={styles.View_745_195}>
          <View style={styles.View_745_196}>
            <Text style={styles.Text_745_196}>Transfer</Text>
          </View>
          <View style={styles.View_745_197} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ec071a3f-40e2-4361-a0a3-35466b440d4f"
            }}
            style={styles.ImageBackground_745_198}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b45164a4-af1a-4470-9312-9936b06fde3d"
          }}
          style={styles.ImageBackground_745_199}
        />
        <View style={styles.View_745_200}>
          <Text style={styles.Text_745_200}>All Coins</Text>
        </View>
        <View style={styles.View_745_201}>
          <Text style={styles.Text_745_201}>Search coins</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/26f7d6fd-fd5d-4fcb-a80f-260af2d153bc"
          }}
          style={styles.ImageBackground_745_202}
        />
        <View style={styles.View_745_205}>
          <View style={styles.View_745_206}>
            <Text style={styles.Text_745_206}>Bitcoin</Text>
          </View>
          <View style={styles.View_745_207}>
            <Text style={styles.Text_745_207}>$0.00</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bbdfadf4-f609-460c-9d9d-4e2e82ca2522"
            }}
            style={styles.ImageBackground_745_208}
          />
        </View>
        <View style={styles.View_745_209}>
          <Text style={styles.Text_745_209}>Ethereum</Text>
        </View>
        <View style={styles.View_745_210}>
          <Text style={styles.Text_745_210}>$0.00</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed4be999-f2d7-430a-b706-b652005d412c"
          }}
          style={styles.ImageBackground_745_211}
        />
        <View style={styles.View_745_212}>
          <View style={styles.View_745_213}>
            <Text style={styles.Text_745_213}>BNB </Text>
          </View>
          <View style={styles.View_745_214}>
            <Text style={styles.Text_745_214}>$0.00</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/00fae443-257f-4aa4-9ea4-96f852cd9133"
            }}
            style={styles.ImageBackground_745_215}
          />
        </View>
        <View style={styles.View_745_216}>
          <Text style={styles.Text_745_216}>Tether</Text>
        </View>
        <View style={styles.View_745_217}>
          <Text style={styles.Text_745_217}>$0.00</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/65c608ab-f371-4102-8810-1ffc525e40cb"
          }}
          style={styles.ImageBackground_745_218}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f4bf8ca9-8d44-4817-b512-faa95c8405fb"
          }}
          style={styles.ImageBackground_745_219}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e03c50e7-eb7c-486a-a75c-1c3ae9c742bb"
          }}
          style={styles.ImageBackground_745_220}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b193e318-3127-475f-99b9-18024103908c"
          }}
          style={styles.ImageBackground_745_221}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4b76b84f-1d79-4f34-9e11-8ec0f4984b9c"
          }}
          style={styles.ImageBackground_745_222}
        />
        <View style={styles.View_745_223}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fffb9113-27db-4c5b-9f21-f11841c95783"
            }}
            style={styles.ImageBackground_745_224}
          />
          <View style={styles.View_745_225}>
            <View style={styles.View_745_226}>
              <Text style={styles.Text_745_226}>Market</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e4a343c8-a93e-4425-8b3f-069da1218f83"
              }}
              style={styles.ImageBackground_745_227}
            />
          </View>
          <View style={styles.View_745_228}>
            <View style={styles.View_745_229}>
              <Text style={styles.Text_745_229}>Reward</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f56dff03-b605-4407-833c-a8f92c054b1c"
              }}
              style={styles.ImageBackground_745_230}
            />
          </View>
          <View style={styles.View_745_231}>
            <View style={styles.View_745_232}>
              <Text style={styles.Text_745_232}>Card</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/216926c9-fc75-4bb1-a376-1c9d45c2a28b"
              }}
              style={styles.ImageBackground_745_233}
            />
          </View>
          <View style={styles.View_745_234}>
            <View style={styles.View_745_235}>
              <View style={styles.View_745_236}>
                <Text style={styles.Text_745_236}>Wallet</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_745_237}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/202cf8f5-4d3e-4e1f-902a-b84e34852d77"
              }}
              style={styles.ImageBackground_745_238}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f691c8c4-7b45-4e93-90eb-5e4bb2004610"
              }}
              style={styles.ImageBackground_745_239}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4efad76c-72a4-48e3-963c-6c4a2c5702cc"
          }}
          style={styles.ImageBackground_745_240}
        />
        <View style={styles.View_745_241}>
          <View style={styles.View_745_242}>
            <View style={styles.View_745_243} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5610dca7-eef5-43d2-beb7-fd15734eb60d"
            }}
            style={styles.ImageBackground_745_244}
          />
        </View>
        <View style={styles.View_745_248}>
          <View style={styles.View_745_249}>
            <View style={styles.View_745_250} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2e82a8c5-bfa1-4758-a3ff-7feb483f86bc"
            }}
            style={styles.ImageBackground_745_251}
          />
        </View>
        <View style={styles.View_745_252}>
          <View style={styles.View_745_253}>
            <View style={styles.View_745_254}>
              <View style={styles.View_745_255} />
              <View style={styles.View_745_256} />
            </View>
            <View style={styles.View_745_257}>
              <View style={styles.View_745_258} />
              <View style={styles.View_745_259}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bfd6d03b-eecd-4e76-826a-c125a04d7f90"
                  }}
                  style={styles.ImageBackground_745_260}
                />
                <View style={styles.View_745_261} />
                <View style={styles.View_745_262}>
                  <View style={styles.View_745_263}>
                    <Text style={styles.Text_745_263}>+13%</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0c5eb7c5-9056-4c35-a250-a6cfb411688a"
                    }}
                    style={styles.ImageBackground_745_264}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_745_265}>
              <Text style={styles.Text_745_265}>Balance</Text>
            </View>
            <View style={styles.View_745_266}>
              <Text style={styles.Text_745_266}>Monthly profit</Text>
            </View>
            <View style={styles.View_745_267}>
              <Text style={styles.Text_745_267}>$14,400</Text>
            </View>
            <View style={styles.View_745_268}>
              <Text style={styles.Text_745_268}>$105.40</Text>
            </View>
            <View style={styles.View_745_269}>
              <Text style={styles.Text_745_269}>USD</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/97447085-6ec8-4fe0-8e31-e24abd10b20c"
              }}
              style={styles.ImageBackground_745_270}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_745_271} />
      <View style={styles.View_745_272} />
      <View style={styles.View_745_273}>
        <Text style={styles.Text_745_273}>Receive Cryptocurrency</Text>
      </View>
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6d88a142-d609-44de-8a72-8ac674d643c9"
        }}
        style={styles.TouchableOpacity_745_274}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("565_780"))
        }
      />
      <View style={styles.View_745_284} />
      <View style={styles.View_745_285}>
        <Text style={styles.Text_745_285}>Cryptocurrency</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/878e8deb-b571-43ca-8b75-71f2ab5870d9"
        }}
        style={styles.ImageBackground_745_286}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/634d1cdc-cf1f-489b-bd77-0c0f19b352f3"
        }}
        style={styles.ImageBackground_745_289}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aff71075-73c4-4394-9631-4614968ebdb5"
        }}
        style={styles.ImageBackground_745_290}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b6d5fcc0-1078-4414-84bd-39793ad81ee3"
        }}
        style={styles.ImageBackground_745_291}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2bc1f2ea-74ef-43b5-bb2c-cfb57315a71a"
        }}
        style={styles.ImageBackground_745_292}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a25dd787-b2fe-406f-8f8b-3cba4aac9a9d"
        }}
        style={styles.ImageBackground_745_293}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/adb57eaa-e6aa-48e0-84f3-3ab8e789d972"
        }}
        style={styles.ImageBackground_745_294}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_764_158}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("746_310"))
        }
      >
        <View style={styles.View_745_277}>
          <Text style={styles.Text_745_277}>$43,114.57</Text>
        </View>
        <View style={styles.View_745_278}>
          <Text style={styles.Text_745_278}>$2882.41</Text>
        </View>
        <View style={styles.View_745_279}>
          <Text style={styles.Text_745_279}>$407.32</Text>
        </View>
        <View style={styles.View_745_280}>
          <Text style={styles.Text_745_280}>$1.000</Text>
        </View>
        <View style={styles.View_745_281}>
          <Text style={styles.Text_745_281}>$0.9551</Text>
        </View>
        <View style={styles.View_745_282}>
          <Text style={styles.Text_745_282}>$0.1319</Text>
        </View>
        <View style={styles.View_745_283}>
          <Text style={styles.Text_745_283}>$0.00002593</Text>
        </View>
        <View style={styles.View_745_295}>
          <View style={styles.View_745_296}>
            <Text style={styles.Text_745_296}>Bitcoin</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f62a30a3-6498-4a08-a18d-be4e47c13488"
            }}
            style={styles.ImageBackground_745_297}
          />
          <View style={styles.View_745_298}>
            <Text style={styles.Text_745_298}>Ethereum</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/66456b74-496e-4538-9abb-c75f1a7c2852"
            }}
            style={styles.ImageBackground_745_299}
          />
          <View style={styles.View_745_300}>
            <Text style={styles.Text_745_300}>BNB </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a9511b22-ce1c-45db-b509-98af44847ca8"
            }}
            style={styles.ImageBackground_745_301}
          />
          <View style={styles.View_745_302}>
            <Text style={styles.Text_745_302}>Tether</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c66f5ad7-4601-4a5d-91d3-f4259a68222d"
            }}
            style={styles.ImageBackground_745_303}
          />
          <View style={styles.View_745_304}>
            <Text style={styles.Text_745_304}>Cardano</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/79ea7fc2-6bbe-4b2c-8a30-091f9462ceb5"
            }}
            style={styles.ImageBackground_745_305}
          />
          <View style={styles.View_745_306}>
            <Text style={styles.Text_745_306}>Dogecoin</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2d4569a0-e5e2-43d4-9f25-dcb100cf1f99"
            }}
            style={styles.ImageBackground_745_307}
          />
          <View style={styles.View_745_308}>
            <Text style={styles.Text_745_308}>Shibu Inu</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5db7f6cd-e0cd-41b6-abed-5fdecb8beb30"
            }}
            style={styles.ImageBackground_745_309}
          />
        </View>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(245, 245, 245, 1)" },
  View_2: { height: hp("127%") },
  View_745_159: {
    width: wp("111%"),
    minWidth: wp("111%"),
    height: hp("146%"),
    minHeight: hp("146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-19%")
  },
  ImageBackground_745_160: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("135%")
  },
  View_745_161: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("81%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_745_162: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%")
  },
  ImageBackground_745_163: {
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
  View_745_167: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("22%")
  },
  View_745_168: {
    width: wp("7%"),
    minWidth: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_745_168: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_745_169: {
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
  View_745_170: {
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
  View_745_171: {
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
  ImageBackground_745_172: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("1%")
  },
  View_745_173: {
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
  ImageBackground_745_174: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  ImageBackground_745_175: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%")
  },
  ImageBackground_745_176: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%")
  },
  ImageBackground_745_177: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_745_178: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_745_179: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_745_180: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_745_181: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("28%"),
    justifyContent: "flex-start"
  },
  Text_745_181: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_745_182: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("74%"),
    justifyContent: "flex-start"
  },
  Text_745_182: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "none"
  },
  View_745_183: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("74%"),
    justifyContent: "flex-start"
  },
  Text_745_183: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "none"
  },
  View_745_184: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("74%"),
    justifyContent: "flex-start"
  },
  Text_745_184: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "none"
  },
  View_745_185: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("63%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_745_186: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("63%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_745_187: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  View_745_190: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("63%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_745_191: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_745_195: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("63%")
  },
  View_745_196: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_745_196: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "none"
  },
  View_745_197: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_745_198: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_745_199: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  View_745_200: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("92%"),
    justifyContent: "flex-start"
  },
  Text_745_200: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_745_201: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("83%"),
    justifyContent: "flex-start"
  },
  Text_745_201: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_745_202: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  View_745_205: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("100%")
  },
  View_745_206: {
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
  Text_745_206: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_745_207: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_745_207: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_745_208: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_745_209: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("110%"),
    justifyContent: "flex-start"
  },
  Text_745_209: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_745_210: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("110%"),
    justifyContent: "center"
  },
  Text_745_210: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_745_211: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("109%"),
    resizeMode: "cover"
  },
  View_745_212: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("127%")
  },
  View_745_213: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_745_213: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_745_214: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_745_214: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_745_215: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_745_216: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("119%"),
    justifyContent: "flex-start"
  },
  Text_745_216: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_745_217: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("119%"),
    justifyContent: "center"
  },
  Text_745_217: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_745_218: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("118%")
  },
  ImageBackground_745_219: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("107%")
  },
  ImageBackground_745_220: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("116%")
  },
  ImageBackground_745_221: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("125%")
  },
  ImageBackground_745_222: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("98%")
  },
  View_745_223: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("134%")
  },
  ImageBackground_745_224: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_745_225: {
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
  View_745_226: {
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
  Text_745_226: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_745_227: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_745_228: {
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
  View_745_229: {
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
  Text_745_229: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_745_230: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_745_231: {
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
  View_745_232: {
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
  Text_745_232: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_745_233: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_745_234: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("8%")
  },
  View_745_235: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_745_236: {
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
  Text_745_236: {
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_745_237: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("2%")
  },
  ImageBackground_745_238: {
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
  ImageBackground_745_239: {
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
  ImageBackground_745_240: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("139%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_745_241: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("28%")
  },
  View_745_242: {
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
  View_745_243: {
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
  ImageBackground_745_244: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_745_248: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("28%")
  },
  View_745_249: {
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
  View_745_250: {
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
  ImageBackground_745_251: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_745_252: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("35%")
  },
  View_745_253: {
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
  View_745_254: {
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
  View_745_255: {
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
  View_745_256: {
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
  View_745_257: {
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
  View_745_258: {
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
  View_745_259: {
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
  ImageBackground_745_260: {
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
  View_745_261: {
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
  View_745_262: {
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
  View_745_263: {
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
  Text_745_263: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_745_264: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_745_265: {
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
  Text_745_265: {
    color: "rgba(179, 180, 183, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_745_266: {
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
  Text_745_266: {
    color: "rgba(179, 180, 183, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_745_267: {
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
  Text_745_267: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_745_268: {
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
  Text_745_268: {
    color: "rgba(119, 126, 144, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_745_269: {
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
  Text_745_269: {
    color: "rgba(0, 0, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_745_270: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%")
  },
  View_745_271: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("127%"),
    minHeight: hp("127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(44, 44, 78, 1)"
  },
  View_745_272: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("42%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_745_273: {
    width: wp("58%"),
    minWidth: wp("58%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("44%"),
    justifyContent: "flex-start"
  },
  Text_745_273: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_745_274: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%")
  },
  View_745_284: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("50%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_745_285: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("53%"),
    justifyContent: "flex-start"
  },
  Text_745_285: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_745_286: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_745_289: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("69%")
  },
  ImageBackground_745_290: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("78%")
  },
  ImageBackground_745_291: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("87%")
  },
  ImageBackground_745_292: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("97%")
  },
  ImageBackground_745_293: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("107%")
  },
  ImageBackground_745_294: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("116%")
  },
  TouchableOpacity_764_158: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("63%"),
    minHeight: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("62%")
  },
  View_745_277: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_745_277: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_745_278: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_745_278: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_745_279: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("29%"),
    justifyContent: "center"
  },
  Text_745_279: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_745_280: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("19%"),
    justifyContent: "center"
  },
  Text_745_280: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_745_281: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("39%"),
    justifyContent: "center"
  },
  Text_745_281: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_745_282: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("48%"),
    justifyContent: "center"
  },
  Text_745_282: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_745_283: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("58%"),
    justifyContent: "center"
  },
  Text_745_283: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_745_295: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("63%"),
    minHeight: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_745_296: {
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
  Text_745_296: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_745_297: {
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
  View_745_298: {
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
  Text_745_298: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_745_299: {
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
  View_745_300: {
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
  Text_745_300: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_745_301: {
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
  View_745_302: {
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
  Text_745_302: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_745_303: {
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
  View_745_304: {
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
  Text_745_304: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_745_305: {
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
  View_745_306: {
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
  Text_745_306: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_745_307: {
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
  View_745_308: {
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
  Text_745_308: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_745_309: {
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
