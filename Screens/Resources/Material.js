import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeigth = Dimensions.get("window").height;

export function Week1() {
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text
          style={{
            fontSize: 22,
            textAlign: "center",
            fontWeight: "600",
            marginTop: 20,
            marginBottom: 40,
          }}
        >
          Day Trading
        </Text>
        {/* <Image
          style={{ marginLeft: 10, width: 350, height: 250, marginBottom: 30 }}
          source={require("../../data/week2.png")}
        ></Image> */}
        <View
          style={{
            // display: "flex",
            // flexDirection: "row",
            marginBottom: 10,
            justifyContent: "space-around",
          }}
        >
          <View style={{ marginRight: 25, marginLeft: 10 }}>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>Audience</Text>
              <Text
                style={{
                  color: "green",
                  fontSize: 15,
                  fontWeight: "500",
                  justifyContent: "flex-end",
                }}
              >
                Beginners
              </Text>
            </View>

            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle, {}]}>Company Size</Text>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>
                Mid & Small
              </Text>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>Risk/Profit</Text>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "500",
                }}
              >
                3.5 / 5
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text
            style={{
              marginVertical: 5,
              marginBottom: 15,
              fontWeight: "600",
              fontSize: 18,
              // color: "#808080",
            }}
          >
            Summary
          </Text>
          <Text
            style={{
              fontFamily: "Arial",
              fontWeight: "400",
              fontSize: 15,
              marginBottom: 30,
              color: "#505050",
            }}
          >
            Day trading is a strategy where stocks and securities are traded on
            a daily basis, where investors exploit the daily volatility to earn
            money. Less risk present in the market as the trading term is pretty
            short. Has a relatively lower risk compared to other strategies.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export function Week2({ navigation }) {
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text
          style={{
            fontSize: 22,
            textAlign: "center",
            fontWeight: "600",
            marginTop: 20,
            marginBottom: 40,
          }}
        >
          Position Trading
        </Text>

        <Image
          style={styles.image}
          source={require("../../data/Weeks/week2.png")}
        ></Image>

        <View
          style={{
            // display: "flex",
            // flexDirection: "row",
            marginBottom: 10,
            justifyContent: "space-around",
          }}
        >
          <View style={{ marginRight: 25, marginLeft: 10 }}>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>Audience</Text>
              <Text
                style={{
                  color: "green",
                  fontSize: 15,
                  fontWeight: "500",
                  justifyContent: "flex-end",
                }}
              >
                Beginners
              </Text>
            </View>

            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle, {}]}>Company Size</Text>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>Big</Text>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>Risk/Profit</Text>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "500",
                }}
              >
                2 / 5
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text
            style={{
              marginVertical: 5,
              marginBottom: 15,
              fontWeight: "600",
              fontSize: 18,
              // color: "#808080",
            }}
          >
            Summary
          </Text>
          <Text
            style={{
              fontFamily: "Arial",
              fontWeight: "400",
              fontSize: 15,
              marginBottom: 30,
              color: "#505050",
            }}
          >
            Position trading is a strategy where traders analyze the market
            trend over several weeks to look for continuous volatility. After
            identifying the “waves”, traders seek to buy on low points and sell
            on high points. Time consuming for the expense of ensured profit.
            People who wish to earn money safely at the expense of time
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export function Week3({ navigation }) {
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text
          style={{
            fontSize: 22,
            textAlign: "center",
            fontWeight: "600",
            marginTop: 20,
            marginBottom: 40,
          }}
        >
          Swing Trading
        </Text>
        <Image
          style={styles.image}
          source={require("../../data/Weeks/week3.png")}
        ></Image>
        <View
          style={{
            // display: "flex",
            // flexDirection: "row",
            marginBottom: 10,
            justifyContent: "space-around",
          }}
        >
          <View style={{ marginRight: 25, marginLeft: 10 }}>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>Audience</Text>
              <Text
                style={{
                  color: "#bf9c01",
                  fontSize: 15,
                  fontWeight: "600",
                  justifyContent: "flex-end",
                }}
              >
                Intermediate
              </Text>
            </View>

            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle, {}]}>Company Size</Text>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>
                Medium & big
              </Text>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>Risk/Profit</Text>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "500",
                }}
              >
                3.5 / 5
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text
            style={{
              marginVertical: 5,
              marginBottom: 15,
              fontWeight: "600",
              fontSize: 18,
              // color: "#808080",
            }}
          >
            Summary
          </Text>
          <Text
            style={{
              fontFamily: "Arial",
              fontWeight: "400",
              fontSize: 15,
              marginBottom: 30,
              color: "#505050",
            }}
          >
            Swing traders buy on lows and sell on highs, when there is high
            volatility. This strategy requires less time looking at the chart
            compared to other strategies, and has potentials for high profit.
            Unlike day trading, traders can trade even when the markets are
            closed.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export function Week4({ navigation }) {
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text
          style={{
            fontSize: 22,
            textAlign: "center",
            fontWeight: "600",
            marginTop: 20,
            marginBottom: 40,
          }}
        >
          Scalping
        </Text>
        <Image
          style={styles.image}
          source={require("../../data/Weeks/week4.png")}
        ></Image>
        <View
          style={{
            // display: "flex",
            // flexDirection: "row",
            marginBottom: 10,
            justifyContent: "space-around",
          }}
        >
          <View style={{ marginRight: 25, marginLeft: 10 }}>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>Audience</Text>
              <Text
                style={{
                  color: "green",
                  fontSize: 15,
                  fontWeight: "500",
                  justifyContent: "flex-end",
                }}
              >
                Beginners
              </Text>
            </View>

            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle, {}]}>Company Size</Text>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>
                Small & Medium
              </Text>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>Risk/Profit</Text>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "500",
                }}
              >
                4.5 / 5
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text
            style={{
              marginVertical: 5,
              marginBottom: 15,
              fontWeight: "600",
              fontSize: 18,
              // color: "#808080",
            }}
          >
            Summary
          </Text>
          <Text
            style={{
              fontFamily: "Arial",
              fontWeight: "400",
              fontSize: 15,
              marginBottom: 30,
              color: "#505050",
            }}
          >
            Scalping is one of the fastest methods of trading. Although scalping
            can be implemented in both volatile and less volatile markets, more
            volatile stocks are preferred for higher profit because scalpers
            profit off of price changes within a short period of time. However,
            because the changes are greatly unexpected, scalping inherently has
            a higher risk compared to other trading methods and requires more
            time commitment for the traders to constantly check the price.
            Although extensive knowledge is required, some experience is needed
            to identify entrance and exit points.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export function Week5({ navigation }) {
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text
          style={{
            fontSize: 22,
            textAlign: "center",
            fontWeight: "600",
            marginTop: 20,
            marginBottom: 40,
          }}
        >
          News Trading
        </Text>
        {/* <Image
          style={{ marginLeft: 10, width: 350, height: 250, marginBottom: 30 }}
          source={require("../../data/week2.png")}
        ></Image> */}
        <View
          style={{
            // display: "flex",
            // flexDirection: "row",
            marginBottom: 10,
            justifyContent: "space-around",
          }}
        >
          <View style={{ marginRight: 25, marginLeft: 10 }}>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>Audience</Text>
              <Text
                style={{
                  color: "green",
                  fontSize: 15,
                  fontWeight: "500",
                  justifyContent: "flex-end",
                }}
              >
                Beginner
              </Text>
              <Text> & </Text>
              <Text
                style={{
                  color: "#bf9c01",
                  fontSize: 15,
                  fontWeight: "600",
                  justifyContent: "flex-end",
                }}
              >
                Intermediate
              </Text>
            </View>

            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle, {}]}>Company Size</Text>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>All</Text>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>Risk/Profit</Text>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "500",
                }}
              >
                2 / 5
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text
            style={{
              marginVertical: 5,
              marginBottom: 15,
              fontWeight: "600",
              fontSize: 18,
              // color: "#808080",
            }}
          >
            Summary
          </Text>
          <Text
            style={{
              fontFamily: "Arial",
              fontWeight: "400",
              fontSize: 15,
              marginBottom: 30,
              color: "#505050",
            }}
          >
            Following news releases, traders quickly anticipate the impact on
            stocks and act upon the expectations. There is a clearly defined
            entry and exit point, which is when the news is released which
            allows constant standards for traders. There are also many trading
            opportunities as there are various news on companies from diverse
            fields.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export function Week6({ navigation }) {
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text
          style={{
            fontSize: 22,
            textAlign: "center",
            fontWeight: "600",
            marginTop: 20,
            marginBottom: 40,
          }}
        >
          End of day Trading
        </Text>
        <Image
          style={styles.image}
          source={require("../../data/Weeks/week6.png")}
        ></Image>
        <View
          style={{
            // display: "flex",
            // flexDirection: "row",
            marginBottom: 10,
            justifyContent: "space-around",
          }}
        >
          <View style={{ marginRight: 25, marginLeft: 10 }}>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>Audience</Text>
              <Text
                style={{
                  color: "#bf9c01",
                  fontSize: 15,
                  fontWeight: "500",
                  justifyContent: "flex-end",
                }}
              >
                Intermediate
              </Text>
              <Text> & </Text>
              <Text
                style={{
                  color: "red",
                  fontSize: 15,
                  fontWeight: "500",
                  justifyContent: "flex-end",
                }}
              >
                Advanced
              </Text>
            </View>

            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle, {}]}>Company Size</Text>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>Small</Text>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>Risk/Profit</Text>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "500",
                }}
              >
                3.5 / 5
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text
            style={{
              marginVertical: 5,
              marginBottom: 15,
              fontWeight: "600",
              fontSize: 18,
              // color: "#808080",
            }}
          >
            Summary
          </Text>
          <Text
            style={{
              fontFamily: "Arial",
              fontWeight: "400",
              fontSize: 15,
              marginBottom: 30,
              color: "#505050",
            }}
          >
            Traders enter when the market is about to close, and trade based on
            previous day’s data. End of day trading requires less time
            commitment compared to other strategies. Traders have to be aware of
            how the end of day market operates, as they operate very differently
            from normal day trading. For example, transactions take place every
            5 minutes only.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export function Week7({ navigation }) {
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text
          style={{
            fontSize: 22,
            textAlign: "center",
            fontWeight: "600",
            marginTop: 20,
            marginBottom: 40,
          }}
        >
          Breakout Trading
        </Text>
        <Image
          style={styles.image}
          source={require("../../data/Weeks/week7.png")}
        ></Image>
        <View
          style={{
            // display: "flex",
            // flexDirection: "row",
            marginBottom: 10,
            justifyContent: "space-around",
          }}
        >
          <View style={{ marginRight: 25, marginLeft: 10 }}>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>Audience</Text>
              <Text
                style={{
                  color: "#bf9c01",
                  fontSize: 15,
                  fontWeight: "500",
                  justifyContent: "flex-end",
                }}
              >
                Intermediate
              </Text>
              <Text> & </Text>
              <Text
                style={{
                  color: "red",
                  fontSize: 15,
                  fontWeight: "500",
                  justifyContent: "flex-end",
                }}
              >
                Advanced
              </Text>
            </View>

            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle, {}]}>Company Size</Text>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>Medium</Text>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>Risk/Profit</Text>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "500",
                }}
              >
                4 / 5
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text
            style={{
              marginVertical: 5,
              marginBottom: 15,
              fontWeight: "600",
              fontSize: 18,
              // color: "#808080",
            }}
          >
            Summary
          </Text>
          <Text
            style={{
              fontFamily: "Arial",
              fontWeight: "400",
              fontSize: 15,
              marginBottom: 30,
              color: "#505050",
            }}
          >
            Breakout trading is a type of day trading, and focuses on where
            support happens. When the price falls below the (what people
            conceive as minimum price), traders enter, assuming that the stocks
            will increase due to support. Support occurs when the price of the
            stock has dropped too much, and traders come in to exploit the price
            differences, but end up supporting the price.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
export function Week8({ navigation }) {
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text
          style={{
            fontSize: 22,
            textAlign: "center",
            fontWeight: "600",
            marginTop: 20,
            marginBottom: 40,
          }}
        >
          Pullback Trading
        </Text>
        <Image
          style={styles.image}
          source={require("../../data/Weeks/week8.png")}
        ></Image>
        <View
          style={{
            // display: "flex",
            // flexDirection: "row",
            marginBottom: 10,
            justifyContent: "space-around",
          }}
        >
          <View style={{ marginRight: 25, marginLeft: 10 }}>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>Audience</Text>
              <Text
                style={{
                  color: "#bf9c01",
                  fontSize: 15,
                  fontWeight: "500",
                  justifyContent: "flex-end",
                }}
              >
                Intermediate
              </Text>
            </View>

            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle, {}]}>Company Size</Text>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>Medium</Text>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>Risk/Profit</Text>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "500",
                }}
              >
                4 / 5
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text
            style={{
              marginVertical: 5,
              marginBottom: 15,
              fontWeight: "600",
              fontSize: 18,
              // color: "#808080",
            }}
          >
            Summary
          </Text>
          <Text
            style={{
              fontFamily: "Arial",
              fontWeight: "400",
              fontSize: 15,
              marginBottom: 30,
              color: "#505050",
            }}
          >
            Traders enter when they spot pullbacks, based on assumption that the
            stock will move to the opposite direction of the trend minorly. For
            example, the stock may experience minor/temporary upturn during a
            downward trend and vice versa. Pullback trading is different from
            breakout trading in that pullback trading relies on the past data of
            the stock to identify an entrance point where the stock decreases
            without a major reason.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export function Week9({ navigation }) {
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text
          style={{
            fontSize: 22,
            textAlign: "center",
            fontWeight: "600",
            marginTop: 20,
            marginBottom: 40,
          }}
        >
          Moving average trading
        </Text>
        <Image
          style={styles.image}
          source={require("../../data/Weeks/week9.jpg")}
        ></Image>
        <View
          style={{
            // display: "flex",
            // flexDirection: "row",
            marginBottom: 10,
            justifyContent: "space-around",
          }}
        >
          <View style={{ marginRight: 25, marginLeft: 10 }}>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>Audience</Text>
              <Text
                style={{
                  color: "green",
                  fontSize: 15,
                  fontWeight: "500",
                  justifyContent: "flex-end",
                }}
              >
                Beginners
              </Text>
            </View>

            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle, {}]}>Company Size</Text>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>Medium</Text>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>Risk/Profit</Text>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "500",
                }}
              >
                3 / 5
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text
            style={{
              marginVertical: 5,
              marginBottom: 15,
              fontWeight: "600",
              fontSize: 18,
              // color: "#808080",
            }}
          >
            Summary
          </Text>
          <Text
            style={{
              fontFamily: "Arial",
              fontWeight: "400",
              fontSize: 15,
              marginBottom: 30,
              color: "#505050",
            }}
          >
            Moving average trading is another type of day trading. Under the
            assumption that smaller moving averages follow price faster than
            larger moving averages, traders enter when a crossover occurs.
            Although these moving averages will not accurately depict the highs
            and lows, it is a good indicator of highs and lows of the stock
            prices. Therefore, traders will purchase when the price is below the
            average assuming that it will go back up because average value does
            not change drastically.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export function Week10({ navigation }) {
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text
          style={{
            fontSize: 22,
            textAlign: "center",
            fontWeight: "600",
            marginTop: 20,
            marginBottom: 40,
          }}
        >
          Momentum Trading
        </Text>
        <Image
          style={styles.image}
          source={require("../../data/Weeks/week10.png")}
        ></Image>
        <View
          style={{
            // display: "flex",
            // flexDirection: "row",
            marginBottom: 10,
            justifyContent: "space-around",
          }}
        >
          <View style={{ marginRight: 25, marginLeft: 10 }}>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>Audience</Text>
              <Text
                style={{
                  color: "#bf9c01",
                  fontSize: 15,
                  fontWeight: "600",
                  justifyContent: "flex-end",
                }}
              >
                Intermediate
              </Text>
            </View>

            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle, {}]}>Company Size</Text>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>Medium</Text>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>Risk/Profit</Text>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "500",
                }}
              >
                4
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text
            style={{
              marginVertical: 5,
              marginBottom: 15,
              fontWeight: "600",
              fontSize: 18,
              // color: "#808080",
            }}
          >
            Summary
          </Text>
          <Text
            style={{
              fontFamily: "Arial",
              fontWeight: "400",
              fontSize: 15,
              marginBottom: 30,
              color: "#505050",
            }}
          >
            Buying a stock and holding it until there is a reverse sign of a
            stock price direction, because stocks tend to continue their
            movement in price direction when all the conditions are constant.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
export function Week11({ navigation }) {
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text
          style={{
            fontSize: 22,
            textAlign: "center",
            fontWeight: "600",
            marginTop: 20,
            marginBottom: 40,
          }}
        >
          IPOs (Initial Public Offering)
        </Text>
        <Image
          style={styles.image}
          source={require("../../data/Weeks/week11.png")}
        ></Image>
        <View
          style={{
            // display: "flex",
            // flexDirection: "row",
            marginBottom: 10,
            justifyContent: "space-around",
          }}
        >
          <View style={{ marginRight: 25, marginLeft: 10 }}>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>Audience</Text>
              <Text
                style={{
                  color: "green",
                  fontSize: 15,
                  fontWeight: "500",
                  justifyContent: "flex-end",
                }}
              >
                Beginners
              </Text>
            </View>

            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle, {}]}>Company Size</Text>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>All</Text>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>Risk/Profit</Text>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "500",
                }}
              >
                2 / 5
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text
            style={{
              marginVertical: 5,
              marginBottom: 15,
              fontWeight: "600",
              fontSize: 18,
              // color: "#808080",
            }}
          >
            Summary
          </Text>
          <Text
            style={{
              fontFamily: "Arial",
              fontWeight: "400",
              fontSize: 15,
              marginBottom: 30,
              color: "#505050",
            }}
          >
            When the stock first enters the market, traders exploit the largely
            fluctuating price that occurs because of a sudden inflow of capital
            to the stock. There are two ways that the traders can exploit this
            fluctuation. Firstly, the traders can purchase the IPO assuming that
            the price will increase. Secondly, traders can wait for the
            fluctuation to decrease and purchase when the price becomes fairly
            low.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export function Week12({ navigation }) {
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text
          style={{
            fontSize: 22,
            textAlign: "center",
            fontWeight: "600",
            marginTop: 20,
            marginBottom: 40,
          }}
        >
          Short Selling
        </Text>
        <Image
          style={styles.image}
          source={require("../../data/Weeks/week12.png")}
        ></Image>
        <View
          style={{
            // display: "flex",
            // flexDirection: "row",
            marginBottom: 10,
            justifyContent: "space-around",
          }}
        >
          <View style={{ marginRight: 25, marginLeft: 10 }}>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>Audience</Text>
              <Text
                style={{
                  color: "red",
                  fontSize: 15,
                  fontWeight: "500",
                  justifyContent: "flex-end",
                }}
              >
                Advanced
              </Text>
            </View>

            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle, {}]}>Company Size</Text>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>All</Text>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>Risk/Profit</Text>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "500",
                }}
              >
                4.5 / 5
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text
            style={{
              marginVertical: 5,
              marginBottom: 15,
              fontWeight: "600",
              fontSize: 18,
              // color: "#808080",
            }}
          >
            Summary
          </Text>
          <Text
            style={{
              fontFamily: "Arial",
              fontWeight: "400",
              fontSize: 15,
              marginBottom: 30,
              color: "#505050",
            }}
          >
            Traders borrow a stock and sell the stock at a high point. Later,
            the trader purchases the stock at a lower price and pays back.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export function Week13({ navigation }) {
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text
          style={{
            fontSize: 22,
            textAlign: "center",
            fontWeight: "600",
            marginTop: 20,
            marginBottom: 40,
          }}
        >
          Margin Trading
        </Text>
        {/* <Image
          style={{ marginLeft: 10, width: 350, height: 250, marginBottom: 30 }}
          source={require("../../data/Weeks/week2.png")}
        ></Image> */}
        <View
          style={{
            // display: "flex",
            // flexDirection: "row",
            marginBottom: 10,
            justifyContent: "space-around",
          }}
        >
          <View style={{ marginRight: 25, marginLeft: 10 }}>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>Audience</Text>
              <Text
                style={{
                  color: "#bf9c01",
                  fontSize: 15,
                  fontWeight: "600",
                  justifyContent: "flex-end",
                }}
              >
                Intermediate
              </Text>
              <Text> & </Text>
              <Text
                style={{
                  color: "red",
                  fontSize: 15,
                  fontWeight: "500",
                  justifyContent: "flex-end",
                }}
              >
                Advanced
              </Text>
            </View>

            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle, {}]}>Company Size</Text>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>All</Text>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>Risk/Profit</Text>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "500",
                }}
              >
                4.5 / 5
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text
            style={{
              marginVertical: 5,
              marginBottom: 15,
              fontWeight: "600",
              fontSize: 18,
              // color: "#808080",
            }}
          >
            Summary
          </Text>
          <Text
            style={{
              fontFamily: "Arial",
              fontWeight: "400",
              fontSize: 15,
              marginBottom: 30,
              color: "#505050",
            }}
          >
            There is a separate account for margin trading. Traders increase
            their capital by borrowing. Although the increased amount of capital
            generates greater profit, it also provides greater chances of loss
            when the stock price declines. Margin trading is different from
            short selling in that short sellers borrow stocks whereas margin
            traders borrow funds.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export function Week14({ navigation }) {
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text
          style={{
            fontSize: 22,
            textAlign: "center",
            fontWeight: "600",
            marginTop: 20,
            marginBottom: 40,
          }}
        >
          Funds Trading
        </Text>
        <Image
          style={styles.image}
          source={require("../../data/Weeks/week14.png")}
        ></Image>
        <View
          style={{
            // display: "flex",
            // flexDirection: "row",
            marginBottom: 10,
            justifyContent: "space-around",
          }}
        >
          <View style={{ marginRight: 25, marginLeft: 10 }}>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>Audience</Text>
              <Text
                style={{
                  color: "green",
                  fontSize: 15,
                  fontWeight: "500",
                  justifyContent: "flex-end",
                }}
              >
                Beginners
              </Text>
            </View>

            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle, {}]}>Company Size</Text>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>N/A</Text>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>Risk/Profit</Text>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "500",
                }}
              >
                1 / 5
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text
            style={{
              marginVertical: 5,
              marginBottom: 15,
              fontWeight: "600",
              fontSize: 18,
              // color: "#808080",
            }}
          >
            Summary
          </Text>
          <Text
            style={{
              fontFamily: "Arial",
              fontWeight: "400",
              fontSize: 15,
              marginBottom: 30,
              color: "#505050",
            }}
          >
            Funds Trading is unique in that the traders do not analyze anything,
            but purchase funds that are simply available in the market. There
            are various funds such as ETFs and index funds. Funds are invested
            in multiple stocks and therefore have less risks as the capital is
            automatically diversified.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
export function Week15({ navigation }) {
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text
          style={{
            fontSize: 22,
            textAlign: "center",
            fontWeight: "600",
            marginTop: 20,
            marginBottom: 40,
          }}
        >
          Seasonal Trading
        </Text>
        <Image
          style={styles.image}
          source={require("../../data/Weeks/week15.png")}
        ></Image>
        <View
          style={{
            // display: "flex",
            // flexDirection: "row",
            marginBottom: 10,
            justifyContent: "space-around",
          }}
        >
          <View style={{ marginRight: 25, marginLeft: 10 }}>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>Audience</Text>
              <Text
                style={{
                  color: "green",
                  fontSize: 15,
                  fontWeight: "500",
                  justifyContent: "flex-end",
                }}
              >
                Beginners
              </Text>
            </View>

            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle, {}]}>Company Size</Text>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>Medium</Text>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>Risk/Profit</Text>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "500",
                }}
              >
                2.5 / 5
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text
            style={{
              marginVertical: 5,
              marginBottom: 15,
              fontWeight: "600",
              fontSize: 18,
              // color: "#808080",
            }}
          >
            Summary
          </Text>
          <Text
            style={{
              fontFamily: "Arial",
              fontWeight: "400",
              fontSize: 15,
              marginBottom: 30,
              color: "#505050",
            }}
          >
            There are companies that perform better during a specific season
            such as ski companies. Seasonal traders invest in these companies.
            They purchase stocks of these companies during off season when the
            stock price is relatively low and sell on season when the price is
            relatively higher.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 16,
    fontWeight: "600",
    flexGrow: 1,
    color: "#303030",
  },
  image: {
    marginLeft: "2.25%",
    width: screenWidth * 0.95,
    height: screenHeigth * 0.35,
    resizeMode: "contain",
  },
});
