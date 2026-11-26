import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShieldAlert } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <ShieldAlert className="w-7 h-7 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Anti-Spam Policy
              </h1>
            </div>
            <p className="text-xl font-semibold text-primary">Zero Tolerance</p>
            <p className="mt-3 text-muted-foreground">
              <strong>Website:</strong> ProjectConsultantsUSA - Expert CRM Implementation
            </p>
          </div>

          <div className="space-y-8 text-foreground/90 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Zero-Tolerance Policy</h2>
              <p>
                Project Consultants USA enforces a strict zero-tolerance policy against spam and unsolicited messages.
                Under no circumstances may any individual, company, affiliate, marketing agency, third-party vendor,
                or other entity advertise, promote, or share information about this website through unsolicited communications.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Strictly Prohibited Activities</h2>
              <p className="mb-3">The following actions are strictly forbidden:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sending unsolicited commercial emails that contain links or references to projectconsultantsusa.com.</li>
                <li>Promoting this website via unsolicited SMS, WhatsApp messages, social media direct messages, or other electronic channels.</li>
                <li>Using purchased, harvested, scraped, or unauthorized contact lists to advertise this website.</li>
                <li>Using automated software or systems to send unsolicited promotional messages.</li>
                <li>Falsifying email headers, impersonating Project Consultants USA, or falsely claiming an affiliation with this website.</li>
                <li>Directly or indirectly hiring third parties to run unsolicited advertising campaigns on behalf of this website.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Unauthorized Advertising</h2>
              <p>
                Project Consultants USA does not permit any person or organization to market its website through unsolicited outreach.
                Anyone conducting such activities without permission will be held solely liable for their actions and any resulting legal consequences.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Severe Penalties and Legal Action</h2>
              <p className="mb-3">
                Any individual or organization found violating this policy may face the strictest legal action and maximum penalties allowed under applicable law.
                Project Consultants USA reserves the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pursue civil and criminal proceedings where legally applicable.</li>
                <li>Report violators to law enforcement and relevant regulatory agencies.</li>
                <li>Seek financial damages for reputational harm, business losses, and other related impacts.</li>
                <li>Permanently end any business, contractual, or affiliate relationship with the violator.</li>
                <li>Report abusive behavior to internet service providers, hosting companies, domain registrars, and email service providers.</li>
              </ul>
              <p className="mt-3">No violation of this policy will be knowingly overlooked.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Reporting Spam</h2>
              <p>
                If you receive any unsolicited communication promoting or mentioning projectconsultantsusa.com,
                please report it using the official contact channels listed on our website.
                Please include the original message, full email headers, and any relevant supporting evidence.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Final Statement</h2>
              <p>
                Project Consultants USA strongly condemns all types of spam and unsolicited marketing.
                Anyone found responsible for these activities will be pursued to the fullest extent allowed by law.
              </p>
            </section>

            <section className="rounded-lg border border-primary/30 bg-primary/5 p-6 text-center">
              <p className="text-lg font-bold text-primary">ZERO SPAM. ZERO TOLERANCE. NO EXCEPTIONS.</p>
              <p className="mt-4 font-medium text-foreground">ProjectConsultantsUSA - Expert CRM Implementation</p>
              <p className="text-muted-foreground">
                Professional CRM implementation and sales process optimization services in Phoenix, Arizona.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
