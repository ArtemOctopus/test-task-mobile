import React from 'react';
import { TouchableOpacity, SafeAreaView, View } from 'react-native';
import { styles } from './styles';
import TabLabel from './components/tab-label';
import TabIcon from './components/tab-icon';
import { AppRoute } from '../../constants/routes';

export default function BottomNavigator({
  state,
  descriptors,
  navigation,
}) {
  return (
    <SafeAreaView style={styles.bottomTabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        let label = '';
        if (options.tabBarLabel) {
          label = options.tabBarLabel;
        } else if (options.title) {
          label = options.title;
        } else {
          label = route.name;
        }
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            if (route.name === AppRoute.MAIN) {
              navigation.navigate(AppRoute.HOME);
            } else {
              navigation.navigate(route.name);
            }
          }
        };
        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            activeOpacity={1}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            style={styles.tabItem}>
            {/* {isFocused && <View
              style={styles.selected} />} */}
            <TabIcon label={label} isFocused={isFocused} />
            <TabLabel label={label} isFocused={isFocused} />
          </TouchableOpacity>
        );
      },
      )}
    </SafeAreaView>
  );
}
