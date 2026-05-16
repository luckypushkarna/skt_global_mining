export interface NavItem {
  readonly label: string;
  readonly href: string;
  readonly external?: boolean;
  readonly children?: ReadonlyArray<NavItem>;
}

export interface Service {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
  readonly features: ReadonlyArray<string>;
  readonly category: ServiceCategory;
}

export type ServiceCategory =
  | "mining"
  | "processing"
  | "logistics"
  | "consulting"
  | "safety"
  | "environmental";

export interface Stat {
  readonly value: string;
  readonly label: string;
  readonly description?: string;
  readonly suffix?: string;
  readonly prefix?: string;
}

export interface TeamMember {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly bio: string;
  readonly linkedin?: string;
}

export interface Milestone {
  readonly year: string;
  readonly title: string;
  readonly description: string;
}

export interface ContactFormData {
  readonly name: string;
  readonly email: string;
  readonly company?: string;
  readonly phone?: string;
  readonly subject: string;
  readonly message: string;
}

export interface AnimationVariant {
  readonly initial: Record<string, unknown>;
  readonly animate: Record<string, unknown>;
  readonly exit?: Record<string, unknown>;
  readonly transition?: Record<string, unknown>;
}

export interface SectionProps {
  readonly className?: string;
  readonly id?: string;
}
