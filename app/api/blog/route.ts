import { ConnectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import blogModel from "@/lib/models/blogModel";

const loadDB = async () => {
  await ConnectDB();
};
loadDB();

export async function GET(req: Request) {
  return NextResponse.json({ msg: "API working" });
}

export async function POST(req: Request) {
  const formData = await req.formData();
  const timeStamp = Date.now();

  const image = formData.get("image") as Blob;
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const path = `./public/${timeStamp}_${(image as File).name}`;
  await writeFile(path, buffer);
  const imgUrl = `/${timeStamp}_${(image as File).name}`;
  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
    image: `${imgUrl}`,
    author_img: `${formData.get("author_img")}`,
  };

  await blogModel.create(blogData);
  console.log("Blog saved");
  return NextResponse.json({ success: true, msg: "blog Added" });
}
