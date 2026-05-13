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
      <Preview>New lead: {name} — {projectType || "Project enquiry"}</Preview>
      <Body style={main}>
        <Container style={shell}>
          <Section style={hero}>
            <Text style={heroBadge}>ACTION REQUIRED</Text>
            <Heading style={heroTitle}>New project enquiry</Heading>
            <Text style={heroLead}>
              <strong style={heroName}>{name}</strong> just submitted the contact form.
            </Text>
            <Text style={heroMeta}>{submittedAt}</Text>
          </Section>

          <Section style={body}>
            <Row style={statRow}>
              <Column style={statCell}>
                <Text style={statLabel}>Project type</Text>
                <Text style={statValue}>{projectType || "Not specified"}</Text>
              </Column>
              <Column style={statGap} />
              <Column style={statCell}>
                <Text style={statLabel}>Budget</Text>
                <Text style={statValue}>{budget || "Not specified"}</Text>
              </Column>
            </Row>

            <Text style={blockTitle}>Contact</Text>
            <Section style={contactCard}>
              <Text style={contactLine}>
                <span style={contactKey}>Name</span>
                <br />
                <span style={contactVal}>{name}</span>
              </Text>
              <Text style={contactLine}>
                <span style={contactKey}>Email</span>
                <br />
                <Link href={`mailto:${email}`} style={contactLink}>
                  {email}
                </Link>
              </Text>
            </Section>

            <Text style={blockTitle}>What they&apos;re looking for</Text>
            <Section style={projectHighlight}>
              <Text style={projectText}>{project}</Text>
            </Section>

            <Section style={ctaWrap}>
              <Link
                href={`mailto:${email}?subject=${encodeURIComponent(`Re: Your project request`)}&body=${encodeURIComponent(`Hi ${name},\n\nThanks for reaching out regarding your project. `)}`}
                style={ctaButton}
              >
                Reply to {name}
              </Link>
              <Text style={ctaHint}>Reply-To on this message is set to the lead&apos;s address.</Text>
            </Section>

            <Hr style={hr} />

            <Text style={footer}>
              Internal notification ·{" "}
              <Link href="https://olivebishop.com" style={footerLink}>
                olivebishop.com
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#e8e8ea",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  padding: "32px 16px",
};

const shell = {
  margin: "0 auto",
  maxWidth: "600px",
  backgroundColor: "#ffffff",
  border: "2px solid #0f0f0f",
  borderRadius: "0",
  overflow: "hidden" as const,
};

const hero = {
  backgroundColor: "#0f0f0f",
  padding: "32px 36px 28px",
};

const heroBadge = {
  margin: "0 0 12px",
  fontSize: "11px",
  fontWeight: "700" as const,
  letterSpacing: "0.2em",
  color: "#fbbf24",
  textTransform: "uppercase" as const,
};

const heroTitle = {
  margin: "0 0 10px",
  fontSize: "28px",
  fontWeight: "700" as const,
  lineHeight: "1.15",
  color: "#fafafa",
};

const heroLead = {
  margin: "0 0 8px",
  fontSize: "16px",
  lineHeight: "24px",
  color: "#d4d4d8",
};

const heroName = {
  color: "#ffffff",
  fontWeight: "700" as const,
};

const heroMeta = {
  margin: "0",
  fontSize: "12px",
  color: "#a1a1aa",
};

const body = {
  padding: "32px 36px 28px",
};

const statRow = {
  marginBottom: "28px",
};

const statGap = {
  width: "14px",
};

const statCell = {
  backgroundColor: "#f4f4f5",
  border: "1px solid #d4d4d8",
  borderRadius: "0",
  padding: "16px 18px",
  width: "50%",
};

const statLabel = {
  margin: "0 0 6px",
  fontSize: "10px",
  fontWeight: "700" as const,
  letterSpacing: "0.14em",
  color: "#71717a",
  textTransform: "uppercase" as const,
};

const statValue = {
  margin: "0",
  fontSize: "16px",
  fontWeight: "600" as const,
  color: "#18181b",
  lineHeight: "22px",
};

const blockTitle = {
  margin: "0 0 12px",
  fontSize: "12px",
  fontWeight: "700" as const,
  letterSpacing: "0.12em",
  color: "#52525b",
  textTransform: "uppercase" as const,
};

const contactCard = {
  backgroundColor: "#fafafa",
  border: "1px solid #e4e4e7",
  padding: "18px 20px",
  marginBottom: "24px",
};

const contactLine = {
  margin: "0 0 14px",
};

const contactKey = {
  fontSize: "11px",
  fontWeight: "600" as const,
  color: "#71717a",
  textTransform: "uppercase" as const,
  letterSpacing: "0.06em",
};

const contactVal = {
  fontSize: "16px",
  fontWeight: "600" as const,
  color: "#18181b",
};

const contactLink = {
  fontSize: "16px",
  fontWeight: "600" as const,
  color: "#0f0f0f",
  textDecoration: "underline",
};

const projectHighlight = {
  backgroundColor: "#fffbeb",
  border: "1px solid #fcd34d",
  padding: "20px 22px",
  marginBottom: "28px",
};

const projectText = {
  margin: "0",
  fontSize: "15px",
  lineHeight: "26px",
  color: "#27272a",
  whiteSpace: "pre-wrap" as const,
};

const ctaWrap = {
  textAlign: "center" as const,
  marginBottom: "8px",
};

const ctaButton = {
  display: "inline-block" as const,
  backgroundColor: "#0f0f0f",
  color: "#ffffff",
  fontSize: "15px",
  fontWeight: "700" as const,
  padding: "14px 36px",
  textDecoration: "none",
  letterSpacing: "0.02em",
  border: "2px solid #0f0f0f",
};

const ctaHint = {
  margin: "14px 0 0",
  fontSize: "12px",
  color: "#71717a",
  lineHeight: "18px",
};

const hr = {
  borderColor: "#e4e4e7",
  margin: "24px 0 20px",
};

const footer = {
  fontSize: "11px",
  color: "#a1a1aa",
  textAlign: "center" as const,
  margin: "0",
};

const footerLink = {
  color: "#52525b",
  textDecoration: "underline",
};
