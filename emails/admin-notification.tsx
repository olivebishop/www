import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
  Preview,
  Link,
  Row,
  Column,
} from "@react-email/components";

interface AdminNotificationEmailProps {
  name: string;
  email: string;
  project: string;
  projectType?: string;
  budget?: string;
}

export default function AdminNotificationEmail({
  name,
  email,
  project,
  projectType,
  budget,
}: AdminNotificationEmailProps) {
  const submittedAt = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Html>
      <Head />
      <Preview>🚀 New project enquiry from {name} — {projectType || "General"}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={headerSection}>
            <Text style={label}>NEW ENQUIRY</Text>
            <Heading style={heading}>Project Request from {name}</Heading>
            <Text style={timestamp}>Received on {submittedAt}</Text>
          </Section>

          <Hr style={hr} />

          {/* Quick glance cards */}
          <Section>
            <Row>
              <Column style={card}>
                <Text style={cardLabel}>PROJECT TYPE</Text>
                <Text style={cardValue}>{projectType || "Not specified"}</Text>
              </Column>
              <Column style={{ width: "16px" }} />
              <Column style={card}>
                <Text style={cardLabel}>BUDGET</Text>
                <Text style={cardValue}>{budget || "Not specified"}</Text>
              </Column>
            </Row>
          </Section>

          {/* Contact details */}
          <Section style={section}>
            <Text style={sectionTitle}>Contact</Text>
            <Container style={detailRow}>
              <Text style={detailLabel}>Name</Text>
              <Text style={detailValue}>{name}</Text>
            </Container>
            <Container style={detailRow}>
              <Text style={detailLabel}>Email</Text>
              <Link href={`mailto:${email}`} style={emailLink}>{email}</Link>
            </Container>
          </Section>

          {/* Project description */}
          <Section style={section}>
            <Text style={sectionTitle}>Project Description</Text>
            <Container style={descriptionBox}>
              <Text style={descriptionText}>{project}</Text>
            </Container>
          </Section>

          {/* Quick action */}
          <Section style={{ textAlign: "center" as const, margin: "28px 0" }}>
            <Link href={`mailto:${email}?subject=Re: Your Project Request&body=Hi ${name},%0D%0A%0D%0AThanks for reaching out! `} style={replyButton}>
              Reply to {name}
            </Link>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>
            Sent from the contact form at{" "}
            <Link href="https://olivebishop.com" style={footerLink}>
              olivebishop.com
            </Link>
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f0f0f0",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  padding: "20px 0",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  maxWidth: "600px",
  borderRadius: "0",
  overflow: "hidden" as const,
  border: "1px solid #e0e0e0",
};

const headerSection = {
  padding: "28px 36px 0",
};

const label = {
  fontSize: "11px",
  fontWeight: "700" as const,
  letterSpacing: "0.12em",
  color: "#888888",
  margin: "0 0 8px",
};

const heading = {
  fontSize: "22px",
  fontWeight: "700" as const,
  color: "#111111",
  lineHeight: "30px",
  margin: "0 0 6px",
};

const timestamp = {
  fontSize: "12px",
  color: "#999999",
  margin: "0",
};

const hr = {
  borderColor: "#eeeeee",
  margin: "24px 36px",
};

const card = {
  backgroundColor: "#f8f8f8",
  borderRadius: "0",
  padding: "16px 20px",
  border: "1px solid #e0e0e0",
};

const cardLabel = {
  fontSize: "10px",
  fontWeight: "700" as const,
  letterSpacing: "0.1em",
  color: "#999999",
  margin: "0 0 4px",
};

const cardValue = {
  fontSize: "15px",
  fontWeight: "600" as const,
  color: "#111111",
  margin: "0",
};

const section = {
  padding: "0 36px",
  marginBottom: "20px",
};

const sectionTitle = {
  fontSize: "13px",
  fontWeight: "700" as const,
  letterSpacing: "0.06em",
  color: "#333333",
  marginBottom: "12px",
  textTransform: "uppercase" as const,
};

const detailRow = {
  display: "flex" as const,
  marginBottom: "8px",
};

const detailLabel = {
  fontSize: "13px",
  color: "#888888",
  margin: "0 0 2px",
};

const detailValue = {
  fontSize: "14px",
  color: "#222222",
  fontWeight: "500" as const,
  margin: "0 0 12px",
};

const emailLink = {
  fontSize: "14px",
  color: "#000000",
  fontWeight: "500" as const,
  textDecoration: "underline",
};

const descriptionBox = {
  backgroundColor: "#fafafa",
  padding: "18px 20px",
  borderRadius: "0",
  border: "1px solid #e0e0e0",
};

const descriptionText = {
  fontSize: "14px",
  color: "#333333",
  lineHeight: "24px",
  whiteSpace: "pre-wrap" as const,
  margin: "0",
};

const replyButton = {
  display: "inline-block" as const,
  backgroundColor: "#000000",
  color: "#ffffff",
  fontSize: "13px",
  fontWeight: "600" as const,
  padding: "12px 28px",
  borderRadius: "0",
  textDecoration: "none",
  letterSpacing: "0.02em",
};

const footer = {
  fontSize: "11px",
  color: "#aaaaaa",
  textAlign: "center" as const,
  padding: "0 36px 28px",
  margin: "0",
};

const footerLink = {
  color: "#888888",
  textDecoration: "underline",
};
