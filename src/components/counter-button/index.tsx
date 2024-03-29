import React from 'react';
import {
  Button,
  Stack,
  SxProps,
  Typography,
  Theme,
  ButtonProps,
  StackProps,
} from '@mui/material';
import {
  MIN_CART_QUANTITY,
  MAX_CART_QUANTITY,
} from '@/constants/product-quantity';

const counterButtonStyle: SxProps<Theme> = {
  p: 0,
  maxWidth: 40,
  minWidth: 40,
  fontWeight: 600,
  fontSize: '1.2rem',
  backgroundColor: (theme) => theme.customColors.counterButton.background,
  color: (theme) => theme.customColors.counterButton.color,
  border: (theme) => theme.customBorders.borderSolidGreen100,
  '&:hover': {
    backgroundColor: (theme) => theme.customColors.counterButton.hoverBg,
  },
};

export interface ICounterButtonProps extends StackProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  buttonProps?: ButtonProps;
}

export const CounterButton = (props: ICounterButtonProps) => {
  const {
    quantity: productQuantity = 1,
    onIncrement,
    onDecrement,
    buttonProps,
    ...rest
  } = props;
  const isMinDisabled = productQuantity === MIN_CART_QUANTITY;
  const isMaxDisabled = productQuantity === MAX_CART_QUANTITY;

  return (
    <Stack flexDirection="row" alignItems="center" {...rest}>
      <Button
        onClick={onDecrement}
        disabled={isMinDisabled}
        aria-label="decrement quantity"
        sx={{
          ...counterButtonStyle,
          ...buttonProps?.sx,
        }}
      >
        <span>-</span>
      </Button>
      <Typography
        mx={2}
        sx={{ color: (theme) => theme.customColors.counterButton.textColor }}
      >
        {productQuantity}
      </Typography>
      <Button
        onClick={onIncrement}
        disabled={isMaxDisabled}
        aria-label="increment quantity"
        sx={{
          ...counterButtonStyle,
          ...buttonProps?.sx,
        }}
      >
        <span>+</span>
      </Button>
    </Stack>
  );
};
