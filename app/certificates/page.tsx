import { MotionSection } from "@/components/motion-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CertificatesPage() {
  const certs = [
    { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2024" },
    { name: "Google Professional Cloud Developer", issuer: "Google Cloud", year: "2023" },
  ]
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 space-y-4">
      <MotionSection>
        <h1 className="text-2xl md:text-3xl font-semibold">🏆 Certificates</h1>
      </MotionSection>
      {certs.map((c) => (
        <MotionSection key={c.name}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{c.name}</span>
                <span className="text-sm font-normal text-muted-foreground">{c.year}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{c.issuer}</p>
            </CardContent>
          </Card>
        </MotionSection>
      ))}
    </div>
  )
}
