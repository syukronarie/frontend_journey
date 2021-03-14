import { useContext, useEffect } from "react";
import { GetAllDataImage } from "./api/imageApi";
import IMAGE_CONSTANT from "./utils/constants/imageConstant";
import { ImageContext } from "./utils/contexts/ProviderImageContext";

const FecthComponents = () => {
  const { dispatch, state } = useContext(ImageContext);

  // Handle First Paint
  useEffect(() => {
    (async () => {
      const dataImage = await GetAllDataImage();
      dispatch({
        type: IMAGE_CONSTANT.SET_DATA_IMAGE,
        payload: dataImage.data,
      });
      dispatch({
        type: IMAGE_CONSTANT.SET_IS_LOADING,
        payload: false,
      });
    })();
  }, [dispatch]);

  // Handle Re Render
  useEffect(() => {
    console.log(state);
  }, [state]);

  return <div></div>;
};

export default FecthComponents;
