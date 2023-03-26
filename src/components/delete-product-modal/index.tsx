import React from 'react';
import Image from 'next/image';
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
import { IoClose } from 'react-icons/io5';
import { HiOutlineTrash, HiOutlineHeart } from 'react-icons/hi';

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
  borderRadius: 1,
  bgcolor: (theme) => theme.customColors.deleteProductModal.background,
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
          alignItems="center"
          flexDirection="row"
          justifyContent="space-between"
          sx={{
            color: (theme) => theme.customColors.deleteProductModal.color,
          }}
        >
          <Typography fontWeight={600}>
            Are you sure you want to delete this product?
          </Typography>
          <IconButton
            onClick={onClose}
            aria-label="delete-modal-close"
            sx={{
              p: {
                xs: 0,
                md: 1,
              },
              color: (theme) => theme.customColors.deleteProductModal.color,
            }}
          >
            <IoClose size="1.5rem" />
          </IconButton>
        </Stack>
        <Card
          sx={{
            px: 1,
            my: 2,
            display: 'flex',
            alignItems: 'center',
            bgcolor: (theme) =>
              theme.customColors.deleteProductModal.background,
            color: (theme) => theme.customColors.deleteProductModal.color,
            border: (theme) => theme.customBorders.borderSolid1,
          }}
        >
          <CardMedia>
            <Image
              priority
              width={50}
              height={50}
              alt={title}
              unoptimized
              src={thumbnail}
              objectFit="contain"
              loader={({ src: _src }) => _src}
            />
          </CardMedia>
          <CardContent sx={{ width: '100%' }}>
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
                maxWidth: {
                  xs: 250,
                  md: 430,
                },
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
            m: {
              xs: '0',
              md: '0 auto',
            },
            maxWidth: {
              xs: '100%',
              md: 430,
            },
            display: 'flex',
            justifyContent: 'space-evenly',
          }}
        >
          <Button
            aria-label="delete-modal-confirm"
            onClick={onClickConfirm}
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <HiOutlineTrash />
            <Typography sx={{ ml: 1 }}>Delete</Typography>
          </Button>
          <Button
            aria-label="delete-modal-delete-and-add-favorite"
            onClick={onClickDeleteAndAddFavorite}
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography sx={{ mr: 1 }}> Delete and Add to</Typography>
            <HiOutlineHeart />
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
