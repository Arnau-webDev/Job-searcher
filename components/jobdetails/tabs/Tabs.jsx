import { View, Text, TouchableOpacity, Flatlist } from 'react-native';

import styles from './tabs.style';

const TabButton = (name, activeTab, onHandleSearchType) => (
  <TouchableOpacity>
    <Text>{name}</Text>
  </TouchableOpacity>
)

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <Flatlist
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
      />
    </View>
  )
}

export default Tabs;