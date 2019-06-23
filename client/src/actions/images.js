export const HOVER_CUSTOM_IMAGE = 'HOVER_CUSTOM_IMAGE';

export const hoverCustomImage = (imageUrl) => {
  return {
    type: HOVER_CUSTOM_IMAGE,
    payload: imageUrl
  };
};
