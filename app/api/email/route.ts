import { ConnectDB } from "@/lib/config/db";
import { NextRequest, NextResponse } from "next/server";
import EmailModel from "@/lib/models/emailModel";

const LoadDB = async () => {
  await ConnectDB();
};
LoadDB();

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const emailData = {
    email: `${formData.get("email")}`,
  };

  await EmailModel.create(emailData);
  return NextResponse.json({ success: true, msg: "Email subscribed" });
}
export async function GET(req: NextRequest) {
  const emails = await EmailModel.find({});
  return NextResponse.json({ emails });
}

export async function DELETE(req: NextRequest) {
  const id = new URL(req.url).searchParams.get("id");
  await EmailModel.findByIdAndDelete(id);
  return NextResponse.json({ success: true, msg: "Email deleted" });
}
