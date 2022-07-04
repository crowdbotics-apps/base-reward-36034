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
      <View style={styles.View_514_370}>
        <Text style={styles.Text_514_370}>Safe &amp; Secure</Text>
      </View>
      <View style={styles.View_514_371}>
        <Text style={styles.Text_514_371}>
          BUY, SELL crypto in few clicks. SEND and RECIEVE crypto for free.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_514_372}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("514_385"))
        }
      >
        <View style={styles.View_514_373} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/62420ef1-2c17-4376-97f7-75d5d06c0491"
          }}
          style={styles.ImageBackground_514_374}
        />
      </TouchableOpacity>
      <View style={styles.View_514_378}>
        <View style={styles.View_514_379} />
        <View style={styles.View_514_380} />
        <View style={styles.View_514_381} />
      </View>
      <View style={styles.View_641_1369}>
        <View style={styles.View_641_1370}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3dfbe958-8e9f-4d5a-b615-6ee268530d37"
            }}
            style={styles.ImageBackground_641_1371}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/be8a7dde-7573-4235-9ff5-39403dfb05b9"
            }}
            style={styles.ImageBackground_641_1372}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/557f5f01-8692-490e-93db-4f5f5ef3130d"
            }}
            style={styles.ImageBackground_641_1373}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/13b0cbc1-5541-4a06-ae9a-904745aad0df"
            }}
            style={styles.ImageBackground_641_1374}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f580b43e-e3b4-44c3-bba0-6cc997a0973e"
            }}
            style={styles.ImageBackground_641_1375}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/361cd011-ea0b-4a90-8268-2704d1011ab3"
            }}
            style={styles.ImageBackground_641_1376}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f5fe33eb-73b8-4a08-90af-0cd758f4985a"
            }}
            style={styles.ImageBackground_641_1377}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/181c662a-b55c-46b2-aa69-5fe3dbcbe145"
            }}
            style={styles.ImageBackground_641_1378}
          />
          <View style={styles.View_641_1379}>
            <View style={styles.View_641_1380}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b4c3ee90-5d39-42b4-9e4c-6cd31759847c"
                }}
                style={styles.ImageBackground_641_1381}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1456ea72-9bc1-4d6c-94b5-481e149e7545"
            }}
            style={styles.ImageBackground_641_1398}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1ada5b43-435f-45a8-b79f-20bbdf0b84d0"
            }}
            style={styles.ImageBackground_641_1399}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/849cde5d-83d9-4e1d-9f36-b027956ccba0"
            }}
            style={styles.ImageBackground_641_1400}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4d6b4052-4ffe-4bed-ac18-ce3619312bb6"
            }}
            style={styles.ImageBackground_641_1401}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/44d781a3-4ceb-45bb-88e9-038a30fc98c2"
            }}
            style={styles.ImageBackground_641_1402}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/60161525-b373-4099-9acf-daaf2bc8f44e"
            }}
            style={styles.ImageBackground_641_1403}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55e75554-8d5d-4ea8-ab27-3d19e5d61ea9"
            }}
            style={styles.ImageBackground_641_1404}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/32db1e36-be96-41f5-a5cb-64b491db90ef"
            }}
            style={styles.ImageBackground_641_1405}
          />
          <View style={styles.View_641_1406}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/256726b8-4ef5-4d3a-805e-6e86ff1e9f17"
              }}
              style={styles.ImageBackground_641_1407}
            />
          </View>
          <View style={styles.View_641_1409}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e4c2f26d-b95b-448d-9f88-b670400a0b0a"
              }}
              style={styles.ImageBackground_641_1410}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ad7920d1-7ea4-47d3-8057-3af3d327a5b1"
            }}
            style={styles.ImageBackground_641_1415}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/897fef66-d088-41f0-b0f7-4790e5bb00b8"
            }}
            style={styles.ImageBackground_641_1416}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7d07c16c-dc31-4748-8e84-d27e871da27f"
            }}
            style={styles.ImageBackground_641_1417}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/830278a7-4f5d-439e-ba04-29099d031a2b"
            }}
            style={styles.ImageBackground_641_1418}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f0c6ac21-8943-4e39-9059-ba81c103f05e"
            }}
            style={styles.ImageBackground_641_1419}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d6a973a9-950c-496c-a1ab-a03e1b840cb8"
            }}
            style={styles.ImageBackground_641_1420}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e242b0a3-9dc3-4835-81e2-d3e92e1b3920"
            }}
            style={styles.ImageBackground_641_1421}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/75cc64c0-cdd9-4c2a-8df8-131e9ff54e23"
            }}
            style={styles.ImageBackground_641_1424}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/78c4336e-9751-404c-8125-7e855ea60bf3"
            }}
            style={styles.ImageBackground_641_1426}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/194d59f5-1eff-46d5-acd7-347bac38d1d8"
            }}
            style={styles.ImageBackground_641_1427}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a58b470d-c3bf-4985-8d3b-80292e394d79"
            }}
            style={styles.ImageBackground_641_1428}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9330cde5-0c83-4c54-96c8-b787ae121a08"
            }}
            style={styles.ImageBackground_641_1429}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f4044d43-7d26-4024-b678-57184de77f82"
            }}
            style={styles.ImageBackground_641_1430}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f9745e32-571e-49b9-b4d3-940ca4765eaf"
            }}
            style={styles.ImageBackground_641_1431}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ab0f06b4-141c-4a16-a35e-84b24c6e7007"
            }}
            style={styles.ImageBackground_641_1432}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3dd6357f-91ff-4f7d-a5d1-70758b56ab31"
            }}
            style={styles.ImageBackground_641_1433}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eb211ac6-e938-4bc8-ba22-7abe86f18392"
            }}
            style={styles.ImageBackground_641_1441}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3a1afd45-f711-467b-b724-a18480fd99f7"
            }}
            style={styles.ImageBackground_641_1442}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/79c6d3a3-4831-4522-a9c4-12e4cbeeee10"
            }}
            style={styles.ImageBackground_641_1443}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b00a2462-baa1-4b91-b18d-551400ea5cdb"
            }}
            style={styles.ImageBackground_641_1444}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ac2343dc-d2db-4978-a44d-afc718ee2b84"
            }}
            style={styles.ImageBackground_641_1445}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/75dba329-cb91-468e-ab86-586fe7208ed3"
            }}
            style={styles.ImageBackground_641_1446}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ad5f0fad-6d06-4afd-a0c0-9e2da9dfd4ad"
            }}
            style={styles.ImageBackground_641_1447}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a9f26482-fbbb-418a-907a-2d55c45cfa52"
            }}
            style={styles.ImageBackground_641_1448}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f19fc8bc-732d-46c0-a4ec-9ebe88a56afc"
            }}
            style={styles.ImageBackground_641_1449}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/05c0f35f-d68e-474b-ad61-95dfb549464a"
            }}
            style={styles.ImageBackground_641_1450}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ccd28b64-d4bc-4d65-8649-1c236cd84fe1"
            }}
            style={styles.ImageBackground_641_1453}
          />
          <View style={styles.View_641_1455}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/366f5a16-0762-4ce9-a4ff-d835006f0b1c"
              }}
              style={styles.ImageBackground_641_1456}
            />
          </View>
          <View style={styles.View_641_1470}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c8095723-a684-40e2-900f-a75feaa354c7"
              }}
              style={styles.ImageBackground_641_1471}
            />
          </View>
          <View style={styles.View_641_1485}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f1c026b6-7842-4956-9a06-124e2287c1cf"
              }}
              style={styles.ImageBackground_641_1486}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_729_1441}>
        <View style={styles.View_729_1440} />
        <View style={styles.View_729_1312}>
          <View style={styles.View_729_1313}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/508dae3b-9d27-47bd-98db-0d2a867d5d6a"
              }}
              style={styles.ImageBackground_729_1314}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2772de4a-e008-4407-a3c1-13e5a25436ee"
              }}
              style={styles.ImageBackground_729_1315}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ce1319ae-4a4b-43e8-aa59-6d9eeb4a64e7"
              }}
              style={styles.ImageBackground_729_1316}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d38ff5f5-e4b4-47b5-95d3-8fecf78531d8"
              }}
              style={styles.ImageBackground_729_1317}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ecd8a384-a65c-4cd4-a356-14b415276b31"
              }}
              style={styles.ImageBackground_729_1318}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5073048d-3538-46cd-9962-7c979496a0cd"
              }}
              style={styles.ImageBackground_729_1319}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1265d8d8-f8d5-4df1-a47d-876f77d0e7a4"
              }}
              style={styles.ImageBackground_729_1320}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/35683b9c-c3b0-4646-9809-95ab62d2b4c2"
              }}
              style={styles.ImageBackground_729_1321}
            />
            <View style={styles.View_729_1322}>
              <View style={styles.View_729_1323}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3bf60e89-fa40-4516-b697-a621695fed23"
                  }}
                  style={styles.ImageBackground_729_1324}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f64fcbbe-57b2-4283-a85d-c5ca75cedb21"
              }}
              style={styles.ImageBackground_729_1341}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/384304ec-e7e9-442c-8a7c-4e3270ca4718"
              }}
              style={styles.ImageBackground_729_1342}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7513e4c0-f56f-4218-9032-42992b1a29f6"
              }}
              style={styles.ImageBackground_729_1343}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/be69e638-f54e-41dd-a67a-6f9b0e271097"
              }}
              style={styles.ImageBackground_729_1344}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/93fbda96-7516-41bf-b33f-d3fa78cebadc"
              }}
              style={styles.ImageBackground_729_1345}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/949bfaa1-5425-434d-8e5b-d9980cb6da88"
              }}
              style={styles.ImageBackground_729_1346}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01a75970-bd30-48b0-beae-7694b966ba1d"
              }}
              style={styles.ImageBackground_729_1347}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/743e996f-5d70-4f36-a851-e9c73549d422"
              }}
              style={styles.ImageBackground_729_1348}
            />
            <View style={styles.View_729_1349}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f2ab84cc-b961-4c8e-a692-d3bbb7e88094"
                }}
                style={styles.ImageBackground_729_1350}
              />
            </View>
            <View style={styles.View_729_1352}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e76b0771-c38d-4033-b2f1-872b59b80800"
                }}
                style={styles.ImageBackground_729_1353}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0bb9f9b5-f973-42e1-9262-5ec2641fb0ea"
              }}
              style={styles.ImageBackground_729_1358}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/93af8adb-4753-4c90-9f47-04bf563ade5e"
              }}
              style={styles.ImageBackground_729_1359}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2efc2b20-2f3f-4c27-b026-8b2361886635"
              }}
              style={styles.ImageBackground_729_1360}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/074e54e6-b235-499e-8d8c-13c3eb2278a8"
              }}
              style={styles.ImageBackground_729_1361}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8c9e8eee-83ed-4b9a-b758-ca985dce61d5"
              }}
              style={styles.ImageBackground_729_1362}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/50a24859-0bd4-4ea8-b05f-a787f824addf"
              }}
              style={styles.ImageBackground_729_1363}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7f145119-d7cd-44d3-beb0-99f0699d9dce"
              }}
              style={styles.ImageBackground_729_1364}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ca13e603-5c59-473a-a2d6-1d0a1535d5e0"
              }}
              style={styles.ImageBackground_729_1367}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e2e172b3-3151-44a8-8caf-40f6387d6f92"
              }}
              style={styles.ImageBackground_729_1369}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/97e466a5-5fc4-4001-be4c-9180a22c02a4"
              }}
              style={styles.ImageBackground_729_1370}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6a63ccd2-cfba-4fb3-8095-33fede669d0f"
              }}
              style={styles.ImageBackground_729_1371}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b39214b9-be25-454f-b10d-50ebe6110dfa"
              }}
              style={styles.ImageBackground_729_1372}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7fb0d9a2-a602-45a6-a661-89ab74ae7ac7"
              }}
              style={styles.ImageBackground_729_1373}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7a0de795-3a07-472f-a9e8-a471cb460bb4"
              }}
              style={styles.ImageBackground_729_1374}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4ae60cc1-5756-4095-9399-4093e7cccc81"
              }}
              style={styles.ImageBackground_729_1375}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9abe7951-aff2-4112-b925-32173419bfdf"
              }}
              style={styles.ImageBackground_729_1376}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2ca8b136-4cb6-4508-94f3-97e54906ee22"
              }}
              style={styles.ImageBackground_729_1384}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2234c2db-439a-492e-a210-e6f6b7b1bba4"
              }}
              style={styles.ImageBackground_729_1385}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/39f2234a-49f3-4b49-a682-9d66ade30226"
              }}
              style={styles.ImageBackground_729_1386}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2d8ddd3d-e62a-45e1-8a16-5fe1c6dd9e0a"
              }}
              style={styles.ImageBackground_729_1387}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a42609da-55e5-47c4-8dc6-b9298257d828"
              }}
              style={styles.ImageBackground_729_1388}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c4aa7fcf-8ec3-42d6-b99d-77b595f0c243"
              }}
              style={styles.ImageBackground_729_1389}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/83bc9b7b-0c09-4636-be89-a067cccd7bb3"
              }}
              style={styles.ImageBackground_729_1390}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/71b7af1f-ac65-40a4-a284-df24e50da62b"
              }}
              style={styles.ImageBackground_729_1391}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/be206d4b-2645-4c0e-a5ac-c1370745f3ae"
              }}
              style={styles.ImageBackground_729_1392}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe7a8e78-0d10-463d-983d-5eea6d0055d7"
              }}
              style={styles.ImageBackground_729_1393}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/31160f32-945b-4df5-b0b2-4d0d65e5beec"
              }}
              style={styles.ImageBackground_729_1396}
            />
            <View style={styles.View_729_1398}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f413c646-d3ab-4248-aa75-db4b3367f791"
                }}
                style={styles.ImageBackground_729_1399}
              />
            </View>
            <View style={styles.View_729_1413}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c561d4cd-e424-4586-ba1a-da1ecdb1383e"
                }}
                style={styles.ImageBackground_729_1414}
              />
            </View>
            <View style={styles.View_729_1428}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/213a5bb3-aefd-43ea-b65a-7cb41aa852b2"
                }}
                style={styles.ImageBackground_729_1429}
              />
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
  View_514_370: {
    width: wp("83%"),
    top: hp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_514_370: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_514_371: {
    width: wp("80%"),
    top: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_514_371: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.08,
    textTransform: "none"
  },
  TouchableOpacity_514_372: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("97%")
  },
  View_514_373: {
    width: wp("19%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_514_374: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_514_378: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("94%")
  },
  View_514_379: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(0, 0, 255, 1)"
  },
  View_514_380: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 255, 1)"
  },
  View_514_381: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(23, 116, 255, 1)"
  },
  View_641_1369: {
    width: wp("83%"),
    height: hp("38%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_641_1370: {
    width: wp("83%"),
    height: hp("38%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_641_1371: {
    width: wp("61%"),
    height: hp("18%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_641_1372: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  ImageBackground_641_1373: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_641_1374: {
    width: wp("61%"),
    height: hp("18%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_641_1375: {
    width: wp("55%"),
    height: hp("17%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_641_1376: {
    width: wp("9%"),
    height: hp("3%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_641_1377: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_641_1378: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  View_641_1379: {
    width: wp("12%"),
    height: hp("4%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  View_641_1380: {
    width: wp("12%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_641_1381: {
    width: wp("12%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_641_1398: {
    width: wp("22%"),
    height: hp("15%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_641_1399: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  ImageBackground_641_1400: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_641_1401: {
    width: wp("22%"),
    height: hp("15%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_641_1402: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  ImageBackground_641_1403: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_641_1404: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_641_1405: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  View_641_1406: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%")
  },
  ImageBackground_641_1407: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_641_1409: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_641_1410: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_641_1415: {
    width: wp("11%"),
    height: hp("10%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_641_1416: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_641_1417: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_641_1418: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_641_1419: {
    width: wp("14%"),
    height: hp("5%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_641_1420: {
    width: wp("14%"),
    height: hp("5%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_641_1421: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_641_1424: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_641_1426: {
    width: wp("15%"),
    height: hp("4%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_641_1427: {
    width: wp("17%"),
    height: hp("5%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_641_1428: {
    width: wp("5%"),
    height: hp("9%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_641_1429: {
    width: wp("5%"),
    height: hp("9%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_641_1430: {
    width: wp("9%"),
    height: hp("3%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_641_1431: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_641_1432: {
    width: wp("6%"),
    height: hp("10%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_641_1433: {
    width: wp("6%"),
    height: hp("10%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_641_1441: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_641_1442: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_641_1443: {
    width: wp("15%"),
    height: hp("4%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_641_1444: {
    width: wp("9%"),
    height: hp("3%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_641_1445: {
    width: wp("20%"),
    height: hp("12%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_641_1446: {
    width: wp("20%"),
    height: hp("15%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_641_1447: {
    width: wp("18%"),
    height: hp("15%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_641_1448: {
    width: wp("15%"),
    height: hp("12%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_641_1449: {
    width: wp("15%"),
    height: hp("13%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_641_1450: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_641_1453: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  View_641_1455: {
    width: wp("19%"),
    height: hp("8%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%")
  },
  ImageBackground_641_1456: {
    width: wp("19%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_641_1470: {
    width: wp("19%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_641_1471: {
    width: wp("19%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_641_1485: {
    width: wp("19%"),
    height: hp("8%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_641_1486: {
    width: wp("19%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_729_1441: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("61%")
  },
  View_729_1440: {
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
  View_729_1312: {
    width: wp("80%"),
    height: hp("41%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_729_1313: {
    width: wp("83%"),
    height: hp("38%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_729_1314: {
    width: wp("61%"),
    height: hp("18%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_729_1315: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  ImageBackground_729_1316: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_729_1317: {
    width: wp("61%"),
    height: hp("18%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_729_1318: {
    width: wp("55%"),
    height: hp("17%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_729_1319: {
    width: wp("9%"),
    height: hp("3%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_729_1320: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_729_1321: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  View_729_1322: {
    width: wp("12%"),
    height: hp("4%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  View_729_1323: {
    width: wp("12%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_729_1324: {
    width: wp("12%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_729_1341: {
    width: wp("22%"),
    height: hp("15%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_729_1342: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  ImageBackground_729_1343: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_729_1344: {
    width: wp("22%"),
    height: hp("15%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_729_1345: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  ImageBackground_729_1346: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_729_1347: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_729_1348: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  View_729_1349: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%")
  },
  ImageBackground_729_1350: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_729_1352: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_729_1353: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_729_1358: {
    width: wp("11%"),
    height: hp("10%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_729_1359: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_729_1360: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_729_1361: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_729_1362: {
    width: wp("14%"),
    height: hp("5%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_729_1363: {
    width: wp("14%"),
    height: hp("5%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_729_1364: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_729_1367: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_729_1369: {
    width: wp("15%"),
    height: hp("4%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_729_1370: {
    width: wp("17%"),
    height: hp("5%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_729_1371: {
    width: wp("5%"),
    height: hp("9%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_729_1372: {
    width: wp("5%"),
    height: hp("9%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_729_1373: {
    width: wp("9%"),
    height: hp("3%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_729_1374: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_729_1375: {
    width: wp("6%"),
    height: hp("10%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_729_1376: {
    width: wp("6%"),
    height: hp("10%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_729_1384: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_729_1385: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_729_1386: {
    width: wp("15%"),
    height: hp("4%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_729_1387: {
    width: wp("9%"),
    height: hp("3%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_729_1388: {
    width: wp("20%"),
    height: hp("12%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_729_1389: {
    width: wp("20%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_729_1390: {
    width: wp("18%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_729_1391: {
    width: wp("15%"),
    height: hp("12%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_729_1392: {
    width: wp("15%"),
    height: hp("13%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_729_1393: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_729_1396: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  View_729_1398: {
    width: wp("19%"),
    height: hp("8%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%")
  },
  ImageBackground_729_1399: {
    width: wp("19%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_729_1413: {
    width: wp("19%"),
    height: hp("8%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_729_1414: {
    width: wp("19%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_729_1428: {
    width: wp("19%"),
    height: hp("8%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_729_1429: {
    width: wp("19%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
