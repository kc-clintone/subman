import "@/global.css";
import dayjs from "dayjs";
import { FlatList, Text, View } from "react-native";

// TODO: Remember to change import to "react-native"
import { Image } from "expo-image";

import ListHeading from "@/components/ListHeading";
import SubCard from "@/components/SubCard";
import UpcomingSubsCard from "@/components/UpcomingSubsCard";
import {
  HOME_BALANCE,
  HOME_SUBSCRIPTIONS,
  HOME_USER,
  UPCOMING_SUBSCRIPTIONS,
} from "@/constants/data";
import { icons } from "@/constants/icons";
import images from "@/constants/images";
import { formatCurrency } from "@/lib/utils";
import { styled } from "nativewind";
import { useState } from "react";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  const [expandedSubscriptionId, setExpandedSubscriptionId] = useState<
    string | null
  >(null);

  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <FlatList
        ListHeaderComponent={() => (
          <>
            {/* TODO: Use "home-header" to replace the header styles */}
            <View className="flex flex-row w-full justify-between items-center p-5">
              {/* TODO: Use "home-user" to replace the user styles */}
              <View className="flex flex-row items-center gap-3">
                <Image className="home-avatar" source={images.avatar} />
                {/* TODO: Use "home-user-name" to replace the user name styles */}
                <Text className="text-xl font-bold">{HOME_USER.name}</Text>
              </View>
              {/* TODO: Use "home-add-icon" to replace the add icon styles */}
              <Image
                className="w-10 h-10 border-2 rounded-full p-2"
                source={icons.add}
              />
            </View>

            {/* TODO: Remove this view and maintain the balance card */}
            <View className="px-4">
              {/* TODO: Use "home-balance-card" to replace the balance card styles */}
              <View className="my-2.5 min-h-50 justify-between gap-5 rounded-bl-4xl rounded-tr-4xl bg-accent p-6">
                {/* TODO: Use "home-balance-label" to replace the balance text styles */}
                <Text className="text-xl font-sans-semibold text-white/80">
                  Total Balance
                </Text>

                {/* TODO: Use "home-balance-row" to replace the balance row styles */}
                <View className="flex-row items-center justify-between">
                  {/* TODO: Use "home-balance-amount" to replace the balance amount styles */}
                  <Text className="text-4xl font-sans-extrabold text-white">
                    {formatCurrency(HOME_BALANCE.amount)}
                  </Text>
                  <Text className="text-xl font-sans-medium text-white">
                    {dayjs(HOME_BALANCE.nextRenewalDate).format("MM/DD")}
                  </Text>
                </View>
              </View>
            </View>

            {/* Remove the style here */}
            <View className="ml-4 mb-5">
              <ListHeading title="Upcoming" />
              <FlatList
                data={UPCOMING_SUBSCRIPTIONS}
                renderItem={({ item }) => <UpcomingSubsCard {...item} />}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={
                  <Text className="home-empty-state">
                    No upcoming renewals yet
                  </Text>
                }
              />
            </View>

            <ListHeading title="All Subscriptions" />
          </>
        )}
        data={HOME_SUBSCRIPTIONS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SubCard
            {...item}
            expanded={expandedSubscriptionId === item.id}
            onPress={() =>
              setExpandedSubscriptionId((currentId) =>
                currentId === item.id ? null : item.id,
              )
            }
          />
        )}
        extraData={expandedSubscriptionId}
        ItemSeparatorComponent={() => <View className="h-4" />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text className="home-empty-state">No subscriptions found</Text>
        }
        contentContainerClassName="pb-30"
      />
    </SafeAreaView>
  );
}
