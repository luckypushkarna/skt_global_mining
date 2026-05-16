import { NextResponse } from "next/server";
import type { HealthApiResponse } from "@/types/api";

export async function GET(): Promise<NextResponse<HealthApiResponse>> {
  return NextResponse.json(
    {
      status: "healthy",
      timestamp: new Date().toISOString(),
      version: "1.0.0",
      uptime: process.uptime(),
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    }
  );
}
