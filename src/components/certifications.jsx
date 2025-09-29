import {
  Award,
  ShieldCheck,
  Leaf,
  Globe,
  CheckCircle,
  Building2,
} from "lucide-react";

export default function Certifications() {
  const certs = [
    {
      title: "ISO 9001:2015 Certified",
      issuer: "International Organization for Standardization",
      year: "2023",
      icon: <Award className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Certified Trading Partner",
      issuer: "Philippine Trade Association",
      year: "2022",
      icon: <ShieldCheck className="h-10 w-10 text-green-600" />,
    },
    {
      title: "Environmental Compliance Certificate",
      issuer: "DENR Philippines",
      year: "2021",
      icon: <Leaf className="h-10 w-10 text-emerald-600" />,
    },
    {
      title: "Global Market Accreditation",
      issuer: "International Trade Council",
      year: "2023",
      icon: <Globe className="h-10 w-10 text-indigo-600" />,
    },
    {
      title: "Quality Excellence Award",
      issuer: "Philippine Business Bureau",
      year: "2022",
      icon: <CheckCircle className="h-10 w-10 text-yellow-600" />,
    },
    {
      title: "Trusted Industry Member",
      issuer: "Chamber of Commerce",
      year: "2021",
      icon: <Building2 className="h-10 w-10 text-gray-700" />,
    },
  ];

  return (
    <section
      id="certifications"
      className="relative bg-gradient-to-b from-white via-indigo-50 to-white py-20"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-10">
          Certifications
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Recognitions and certifications that showcase our dedication to
          quality, compliance, and sustainable business practices.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-10 text-left">
          {certs.map((cert, index) => (
            <div key={index} className="flex items-start gap-4">
              {cert.icon}
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {cert.title}
                </h4>
                <p className="text-sm text-gray-600">{cert.issuer}</p>
                <p className="text-xs text-gray-500">{cert.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
