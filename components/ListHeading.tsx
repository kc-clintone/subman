import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ListHeading = ({title}: ListHeadingProps) => {
  return (
    // TODO: Use "list-head" to replace the list head styles
    <View className="my-5 flex-row items-center justify-between px-4">
      {/* TODO: Use "list-title" to replace the list title styles */}
      <Text className="text-2xl font-sans-bold text-primary">{title}</Text>

      {/* TODO: Use "list-action" to replace the list action styles */}
      <TouchableOpacity className="rounded-full border border-black/20 px-4 py-1">
        {/* TODO: Use "list-action-text" to replace the list action text styles */}
        <Text className="text-lg font-sans-semibold text-primary">
          View all
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default ListHeading