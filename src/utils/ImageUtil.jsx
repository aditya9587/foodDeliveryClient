import { Cloudinary } from "@cloudinary/url-gen";
const cloudName = import.meta.env.VITE_CLOUD_NAME;
const cld = new Cloudinary({
  cloud: {
    cloudName: cloudName, // Replace with your Cloudinary cloud name
  },
});

export default cld;
