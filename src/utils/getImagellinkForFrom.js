import axios from "axios";

const getImageIlinkForForm = async (file) => {
  const formData = new FormData();
  formData.append("image", file);
  const url = `https://api.imgbb.com/1/upload?expiration=600&key=${
    import.meta.env.VITE_IMAGE_HOSTING_KEY
  }`;
  const data = await axios.post(url, formData);
  return data.data.data.url;
};

export default getImageIlinkForForm;