import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal, { ModalProps } from '@mui/material/Modal';
import { IProduct } from '@/models/products.model';
import {
  Card,
  Theme,
  Stack,
  SxProps,
  CardMedia,
  IconButton,
  CardContent,
} from '@mui/material';
import Image from 'next/image';

export interface IDeleteProductModalProps
  extends Omit<ModalProps, 'children' | 'open'> {
  onClose: () => void;
  productData: IProduct;
  onClickConfirm: () => void;
  onClickDeleteAndAddFavorite: () => void;
}

const deleteProductModalStyle: SxProps<Theme> = {
  p: 3,
  top: '50%',
  left: '50%',
  width: {
    xs: '100%',
    md: 600,
  },
  boxShadow: 24,
  bgcolor: 'background.paper',
  position: 'absolute' as const,
  transform: 'translate(-50%, -50%)',
};

export const DeleteProductModal = (props: IDeleteProductModalProps) => {
  const { productData, onClickConfirm, onClose, onClickDeleteAndAddFavorite } =
    props;

  const { title, description, thumbnail } = productData;

  return (
    <Modal
      open={true}
      aria-labelledby="delete-modal"
      aria-describedby="delete-product-modal"
    >
      <Box sx={deleteProductModalStyle}>
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography fontWeight={600}>
            Are you sure you want to delete this product?
          </Typography>
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              color: (theme) => theme.customColors.gray20,
            }}
          >
            X
          </IconButton>
        </Stack>
        <Card
          sx={{
            my: 2,
            display: 'flex',
            alignItems: 'center',
            px: 1,
          }}
        >
          <CardMedia>
            <Image
              priority
              alt={title}
              unoptimized
              width={50}
              height={50}
              src={thumbnail}
              objectFit="contain"
              loader={({ src: _src }) => _src}
            />
          </CardMedia>
          <CardContent
            sx={{
              width: '100%',
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 500,
                textTransform: 'capitalize',
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mt: 0.5,
                width: 250,
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
              }}
            >
              {description}
            </Typography>
          </CardContent>
        </Card>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Button onClick={onClickConfirm}>Delete</Button>
          <Button onClick={onClickDeleteAndAddFavorite}>
            Delete and Add to Favorites
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
