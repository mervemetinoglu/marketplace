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
  backgroundColor: 'transparent',
  color: (theme) => theme.customColors.green100,
  border: (theme) => theme.customBorders.borderSolidGreen100,
  '&:hover': {
    backgroundColor: (theme) => theme.customColors.green50,
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
        disabled={isMinDisabled}
        onClick={onDecrement}
        sx={{
          ...counterButtonStyle,
          ...buttonProps?.sx,
        }}
      >
        <span>-</span>
      </Button>
      <Typography mx={2}>{productQuantity}</Typography>
      <Button
        disabled={isMaxDisabled}
        onClick={onIncrement}
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
