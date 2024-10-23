import { NextResponse } from "next/server";
import { join } from "path";
import { promises as fs } from "fs";

export async function GET() {
  const filePath = join(process.cwd(), "public", "demirdereliCV.pdf");

  try {
    const pdfFile = await fs.readFile(filePath);
    return new NextResponse(pdfFile, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=demirdereliCV.pdf",
      },
    });
  } catch (error) {
    console.error("Error sending PDF:", error);
    return new NextResponse("File not found", { status: 404 });
  }
}
