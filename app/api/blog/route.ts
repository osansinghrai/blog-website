import { ConnectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import blogModel from "@/lib/models/blogModel";

const loadDB = async () => {
  await ConnectDB();
};
loadDB();

export async function GET(req: Request, res: Response) {
  const blogId = new URL(req.url).searchParams.get("id");

  if (blogId) {
    const blog = await blogModel.findById(blogId);
    return NextResponse.json(blog);
  } else {
    const blogs = await blogModel.find({});
    return NextResponse.json({
      blogs,
    });
  }
}

export async function POST(req: Request, res: Response) {
  const formData = await req.formData();
  const timeStamp = Date.now();

  const image = formData.get("image") as Blob;
  if (!image || !(image instanceof Blob)) {
    return NextResponse.json(
      { success: false, msg: "No valid image uploaded" },
      { status: 400 }
    );
  }

  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const path = `./public/${timeStamp}_${(image as File).name}`;
  await writeFile(path, buffer);
  const imgUrl = `/${timeStamp}_${(image as File).name}`;

  const author_img = formData.get("author_img") as Blob;
  if (!author_img || !(author_img instanceof Blob)) {
    return NextResponse.json(
      { success: false, msg: "No valid author image uploaded" },
      { status: 400 }
    );
  }

  const authorImageByteData = await author_img.arrayBuffer();
  const authorBuffer = Buffer.from(authorImageByteData);
  const authorPath = `./public/${timeStamp}_author_${
    (author_img as File).name
  }`;
  await writeFile(authorPath, authorBuffer);
  const authorImgUrl = `/${timeStamp}_author_${(author_img as File).name}`;

  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
    image: `${imgUrl}`,
    author: `${formData.get("author")}`,
    author_img: `${authorImgUrl}`,
  };

  await blogModel.create(blogData);
  console.log("Blog saved");
  return NextResponse.json({ success: true, msg: "blog Added" });
}
