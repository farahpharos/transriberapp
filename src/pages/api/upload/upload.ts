// api router for user to upload an audio file
// a multi-part form will send the audio and POST to this api handler
// the audio file will be saved to the server and the file name will be saved to the database

// use nextjs 12 api route
import type { NextApiRequest, NextApiResponse } from "next";
import * as dotenv from "dotenv";
dotenv.config();
import multer from "multer";
// use cloudinary to upload audio file
import cloudinary from "cloudinary";

// multer config
const upload = multer({ dest: "uploads/" });

// cloudinary config
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// api handler
// upload request body data to cloudinary
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // check if request method is POST
  if (req.method !== "POST") {
    // if not POST, send error response
    res.status(405).json({ message: "Method not allowed" });
    return;
  }
  // check if request body is empty
  if (!req.body) {
    // if empty, send error response
    res.status(400).json({ message: "Request body is empty" });
    return;
  }

  // print request body
  console.log(`the following is the request body:\n ${req.body}`);

  // // get audio file from request body
  // const audioFile = req.body;
  // // upload audio file to cloudinary
  // const cloudinaryResponse = await cloudinary.v2.uploader.upload(audioFile, {
  //   resource_type: "video",
  //   public_id: `audio/${Date.now()}`,
  //   overwrite: true,
  //   invalidate: true,
  // });
  // // get audio file url from cloudinary response
  // const audioFileUrl = cloudinaryResponse.secure_url;
  // // send response
  res.status(200).json({ audioFileUrl });
}
