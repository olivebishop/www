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
} from "@react-email/components";

interface ClientConfirmationEmailProps {
  name: string;
  projectType?: string;
  budget?: string;
}

export default function ClientConfirmationEmail({
  name,
  projectType,
  budget,
}: ClientConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Thanks for reaching out, {name}! I&apos;ve received your project request.</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>Thanks for reaching out!</Heading>

          <Text style={text}>Hi {name},</Text>

          <Text style={text}>
            I&apos;ve received your project request and I&apos;m excited to learn more about what
            you&apos;re building. I&apos;ll review the details and get back to you within 24–48
            hours.
          </Text>

          <Section style={summaryBox}>
            <Text style={summaryTitle}>Here&apos;s a quick summary:</Text>
            <Text style={summaryText}>
              <strong>Project Type:</strong> {projectType || "Not specified"}
            </Text>
            <Text style={summaryText}>
              <strong>Budget Range:</strong> {budget || "Not specified"}
            </Text>
          </Section>

          <Text style={text}>
            In the meantime, feel free to check out some of my recent work at{" "}
            <Link href="https://olivebishop.com/work" style={link}>
              olivebishop.com/work
            </Link>
            .
          </Text>

          <Text style={text}>
            If you have any additional details or questions, don&apos;t hesitate to reply to this
            email.
          </Text>

          <Text style={signoff}>
            Best regards,
            <br />
            <strong>Olive Bishop</strong>
            <br />
            Software Engineer
          </Text>

          <Hr style={hr} />
          <Text style={footer}>
            This is an automated confirmation from{" "}
            <Link href="https://olivebishop.com" style={link}>
              olivebishop.com
            </Link>
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f6f6f6",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "40px auto",
  padding: "32px 40px",
  borderRadius: "8px",
  maxWidth: "600px",
  border: "1px solid #e5e5e5",
};

const heading = {
  fontSize: "24px",
  fontWeight: "600" as const,
  color: "#111111",
  marginBottom: "16px",
};

const text = {
  fontSize: "14px",
  color: "#333333",
  lineHeight: "24px",
  marginBottom: "16px",
};

const summaryBox = {
  backgroundColor: "#f9f9f9",
  padding: "20px 24px",
  borderRadius: "6px",
  borderLeft: "3px solid #000000",
  marginBottom: "20px",
};

const summaryTitle = {
  fontSize: "14px",
  fontWeight: "600" as const,
  color: "#111111",
  marginBottom: "8px",
};

const summaryText = {
  fontSize: "14px",
  color: "#555555",
  lineHeight: "22px",
  margin: "4px 0",
};

const link = {
  color: "#000000",
  textDecoration: "underline",
};

const signoff = {
  fontSize: "14px",
  color: "#333333",
  lineHeight: "24px",
  marginTop: "24px",
};

const hr = {
  borderColor: "#e5e5e5",
  margin: "24px 0",
};

const footer = {
  fontSize: "12px",
  color: "#999999",
  textAlign: "center" as const,
};
