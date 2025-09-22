import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const MyCertificates = ({ user }) => {
  const certificates = user.certificates || []; // Sample, replace with real data

  const handleDownload = (certId) => {
    // Implement PDF download logic using jsPDF or similar
    alert(`Downloading certificate ${certId}`);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">My Certificates</h2>
      <div className="space-y-4">
        {certificates.map((cert, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{cert.name}</CardTitle>
              <CardDescription>Issued on {cert.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={() => handleDownload(cert.id)}>Download Certificate</Button>
            </CardContent>
          </Card>
        ))}
        {certificates.length === 0 && <p>No certificates yet.</p>}
      </div>
    </div>
  );
};

export default MyCertificates;
