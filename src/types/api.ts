export interface ApiResponse<T = unknown> {
  readonly success: boolean;
  readonly data?: T;
  readonly error?: string;
  readonly message?: string;
  readonly statusCode: number;
}

export interface ContactApiRequest {
  readonly name: string;
  readonly email: string;
  readonly company?: string;
  readonly phone?: string;
  readonly subject: string;
  readonly message: string;
  readonly honeypot?: string;
}

export interface ContactApiResponse {
  readonly sent: boolean;
  readonly timestamp: string;
}

export interface HealthApiResponse {
  readonly status: "healthy" | "degraded" | "unhealthy";
  readonly timestamp: string;
  readonly version: string;
  readonly uptime: number;
}
