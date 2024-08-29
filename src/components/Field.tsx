import {COLORS} from '@constants/colors';
import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {SvgProps} from 'react-native-svg';

type Props = {
  icon: React.FC<SvgProps>;
  placeholder?: string;
  value?: string;
  label?: string;
  multiline?: boolean;
  maxLength?: number;
  onChangeText?: (value: string) => void;
};

export const Field = ({
  icon: Icon,
  placeholder,
  label,
  value,
  multiline,
  maxLength,
  onChangeText,
}: Props) => {
  return (
    <View style={styles.root}>
      {!!label && <Text style={[styles.label]}>{label}</Text>}
      <View style={[styles.field, multiline && {alignItems: 'flex-start'}]}>
        <Icon color={COLORS.primaryColor} />
        <TextInput
          style={[styles.input]}
          placeholder={placeholder}
          placeholderTextColor={COLORS.whiteColor}
          value={value}
          multiline={multiline}
          cursorColor={COLORS.primaryColor}
          onChangeText={text => {
            if (maxLength && value && text.length > maxLength) {
              onChangeText && onChangeText(value);
              return;
            }
            onChangeText && onChangeText(text);
          }}
        />
      </View>
      {!!maxLength && (
        <Text style={[styles.label]}>
          {value?.length || 0}/{maxLength}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  field: {
    borderRadius: 20,
    backgroundColor: COLORS.cardColor,
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    shadowColor: COLORS.backgroundColor,
    shadowOffset: {
      width: 0,
      height: 14,
    },
    shadowOpacity: 0.24,
    shadowRadius: 15.38,
    elevation: 19,
  },
  input: {
    padding: 0,
    flex: 1,
    color: COLORS.whiteColor,
  },
  root: {
    gap: 4,
  },
  label: {
    fontSize: 16,
  },
});
