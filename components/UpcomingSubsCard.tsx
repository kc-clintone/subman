import { View, Text } from 'react-native'
import React from 'react'
// TODO: Use "react-native" to replace the image component
import { Image } from 'expo-image';
import { formatCurrency } from '@/lib/utils';

const UpcomingSubsCard = ({name, price, daysLeft, currency, icon}: UpcomingSubscription) => {
  return (
    // TODO: Use "upcoming-card" to replace the upcoming card styles
    <View className="mr-4 w-44 rounded-2xl border border-black/10 bg-background p-4">
      {/* TODO: Use "upcoming-row" to replace the upcoming row styles */}
      <View className="flex-row items-center gap-3">
        {/* TODO: Use "upcoming-icon" to replace the upcoming icon styles */}
        <Image className="size-14" source={icon} />
        <View>
          {/* TODO: Use "upcoming-price" to replace the upcoming name styles */}
          <Text className="text-lg font-sans-bold text-primary">
            {formatCurrency(price, currency)}
          </Text>
          {/* TODO: Use "upcoming-meta" to replace the upcoming days left styles */}
          <Text
            className="text-sm font-sans-semibold text-muted-foreground"
            numberOfLines={1}
          >
            {daysLeft > 1 ? `${daysLeft} days left` : "last day"}
          </Text>
        </View>
      </View>

      {/* TODO: Use "upcoming-name" to replace the upcoming name styles */}
      <Text
        className="mt-2 text-lg font-sans-bold text-primary"
        numberOfLines={1}
      >
        {name}
      </Text>
    </View>
  );
}

export default UpcomingSubsCard