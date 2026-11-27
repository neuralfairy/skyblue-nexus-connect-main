import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Scale } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Scale className="w-7 h-7 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Terms of Service
            </h1>
          </div>

          <div className="space-y-8 text-foreground/90 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
              <p>
                By using this website or any services offered by FreeLeadMagnets
                Solutions, you agree to these Terms of Service and applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Permitted Use</h2>
              <p>
                You may use this website only for lawful purposes and in a manner
                that does not interfere with or restrict other users' access.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. Service Information</h2>
              <p>
                Service descriptions, availability, and pricing may change. Any
                purchase or subscription is governed by the agreement presented
                when you obtain the applicable service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, FreeLeadMagnets Solutions
                is not liable for indirect, incidental, or consequential damages
                arising from use of this website or our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Contact</h2>
              <p>
                For questions about these terms, contact us at
                <a className="text-primary hover:underline ml-1" href="mailto:info@freeleadmagnets.com">
                  info@freeleadmagnets.com
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
