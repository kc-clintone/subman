import React from "react";
import { Pressable, Text, View } from "react-native";

// TODO: Remember to change import to "react-native"
import { formatCurrency, formatStatusLabel, formatSubscriptionDateTime } from "@/lib/utils";
import { clsx } from "clsx";
import { Image } from "expo-image";

const SubCard = ({
  name,
  price,
  currency,
  billing,
  icon,
  color,
  category,
  plan,
  renewalDate,
  paymentMethod,
  startDate,
  onPress,
  expanded,
  status,
}: SubscriptionCardProps) => {
  return (
    // TODO: Use "sub-card" to replace the subscription card styles
    <Pressable
      onPress={onPress}
      className={clsx(
        "rounded-2xl border border-border p-4",
        expanded ? "sub-card-expanded" : "bg-card",
      )}
      style={!expanded && color ? { backgroundColor: color } : undefined}
    >
      {/* TODO: Use "sub-head" to replace the subscription head styles */}
      <View className="flex-row items-center py-2">
        {/* TODO: Use "sub-main" to replace the subscription main styles */}
        <View className="min-w-0 flex-1 flex-row items-center gap-3">
          {/* TODO: Use "sub-icon" to replace the subscription icon styles */}
          <Image source={icon} className="size-16 rounded-lg" />
          {/* TODO: Use "sub-copy" to replace the subscription copy styles */}
          <View className="min-w-0 flex-1">
            {/* TODO: Use "sub-title" to replace the subscription title styles */}
            <Text
              className="mb-1 text-lg font-sans-bold text-primary"
              numberOfLines={1}
            >
              {name}
            </Text>

            <Text numberOfLines={1} className="sub-meta" ellipsizeMode="tail">
              {category?.trim() ||
                plan?.trim() ||
                (renewalDate
                  ? formatSubscriptionDateTime(renewalDate)
                  : "No details")}
            </Text>
          </View>
        </View>

        {/* TODO: Use "sub-price-box" to replace the subscription price box styles */}
        <View className="ml-3 shrink-0 items-end">
          {/* TODO: Use "sub-price" to replace the subscription price styles */}
          <Text className="mb-1 text-lg font-sans-bold text-primary">
            {formatCurrency(price, currency)}
          </Text>
          {/* TODO: Use "sub-billing" to replace the subscription billing styles */}
          <Text className="text-sm font-sans-medium text-muted-foreground">
            {billing}
          </Text>
        </View>
      </View>

      {expanded && (
        <View className="sub-body">
          <View className="sub-details">
            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Payment:</Text>
                <Text
                  className="sub-value"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {paymentMethod?.trim()}
                </Text>
              </View>
            </View>

            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Category:</Text>
                <Text
                  className="sub-value"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {category?.trim() || plan?.trim() || "Nothing to show"}
                </Text>
              </View>
            </View>

            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Started:</Text>
                <Text
                  className="sub-value"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {startDate ? formatSubscriptionDateTime(startDate) : ""}
                </Text>
              </View>
            </View>

            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Renewal date:</Text>
                <Text
                  className="sub-value"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {renewalDate ? formatSubscriptionDateTime(renewalDate) : ""}
                </Text>
              </View>
            </View>

            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Status:</Text>
                <Text
                  className="sub-value"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {status ? formatStatusLabel(status) : ""}
                </Text>
              </View>
            </View>

          </View>
          <Text className="sub-expanded-tex">Sub details</Text>
        </View>
      )}
    </Pressable>
  );
};

export default SubCard;
