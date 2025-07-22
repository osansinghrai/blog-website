import { ConnectDB } from "@/lib/config/db";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import blogModel from "@/lib/models/blogModel";
import cloudinary from "@/lib/config/cloudinary";

const loadDB = async () => {
  await ConnectDB();
};
loadDB();

export async function GET(req: NextRequest) {
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

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const image = formData.get("image") as Blob;
  if (!image || !(image instanceof Blob)) {
    return NextResponse.json(
      { success: false, msg: "No valid image uploaded" },
      { status: 400 }
    );
  }

  const buffer = Buffer.from(await image.arrayBuffer());
  const imageBase64 = `data:${image.type};base64,${buffer.toString("base64")}`;

  const imageUpload = await cloudinary.uploader.upload(imageBase64, {
    folder: "blog_images",
  });

  const author_img = formData.get("author_img") as Blob;
  if (!author_img || !(author_img instanceof Blob)) {
    return NextResponse.json(
      { success: false, msg: "No valid author image uploaded" },
      { status: 400 }
    );
  }

  const authorBuffer = Buffer.from(await author_img.arrayBuffer());
  const authorBase64 = `data:${author_img.type};base64,${authorBuffer.toString(
    "base64"
  )}`;

  const authorUpload = await cloudinary.uploader.upload(authorBase64, {
    folder: "authors",
  });

  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
    image: imageUpload.secure_url,
    author: `${formData.get("author")}`,
    author_img: authorUpload.secure_url,
  };

  await blogModel.create(blogData);
  console.log("Blog saved");
  return NextResponse.json({ success: true, msg: "blog Added" });
}

export async function DELETE(req: NextRequest) {
  const id = new URL(req.url).searchParams.get("id");
  const blog = await blogModel.findById(id);

  if (!blog) {
    return NextResponse.json(
      { success: false, msg: "Blog not found" },
      { status: 404 }
    );
  }

  const getPublicId = (url: string) => {
    const parts = url.split("/");
    const fileName = parts[parts.length - 1]; // e.g., abc123.jpg
    const publicId = fileName.split(".")[0]; // e.g., abc123
    return parts.slice(-2, -1)[0] + "/" + publicId; // e.g., folder/abc123
  };

  const imagePublicId = getPublicId(blog.image);
  const authorImagePublicId = getPublicId(blog.author_img);

  // Delete from Cloudinary
  await cloudinary.uploader.destroy(imagePublicId);
  await cloudinary.uploader.destroy(authorImagePublicId);

  // Delete blog from DB
  await blogModel.findByIdAndDelete(id);

  return NextResponse.json({ success: true, msg: "Blog deleted" });
}
