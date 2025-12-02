import { Mail, Globe, Phone, Calendar, Users, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { Metadata } from "next";
import { generateMetadataFromSeo } from "../(main)/utils/seo";

const defaultSeo = {
  title: "Newsletter - November 2025 | Optimal Virtual Employee",
  robots: {
      index: false,
      follow: false,
  },
};

export default function NovemberNewsletter() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border overflow-hidden shadow-lg"
        >
          <div className="bg-gradient-to-r from-sky-700 via-indigo-700 to-violet-700 p-8 text-white">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-semibold">🚀 November 2025 Highlights</h1>
                <p className="mt-1 text-sm text-sky-100/90">Performance • Growth • Innovation</p>
              </div>
              <div className="text-right text-sm">
                <p className="font-medium">Optimal Virtual Employee</p>
                <p className="text-sky-100/80 mt-1">November 28, 2025</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8">
            <p className="text-slate-700">Dear Partners &amp; Stakeholders,</p>
            <p className="mt-3 text-slate-600 leading-relaxed">
              November marked another strong milestone for Optimal Virtual Employee, driven by rapid global
              expansion and accelerating demand for AI-powered solutions.
            </p>
          </div>
        </motion.header>

        {/* MAIN CONTENT */}
        <main className="mt-8 grid grid-cols-1 gap-6">
          {/* Cards row */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.05 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <article className="bg-white border rounded-2xl p-6 shadow">
              <h2 className="flex items-center gap-3 text-lg font-semibold text-slate-800">
                <Users className="w-5 h-5 text-sky-600" /> Global IT Staff Augmentation
              </h2>

              <ul className="mt-4 text-sm text-slate-600 space-y-2">
                <li>✅ <strong>120+</strong> developers deployed across full-stack, mobile, cloud, AI/ML, UI/UX &amp; DevOps</li>
                <li>🌍 Clients across <strong>8 countries</strong>: US, UK, UAE, Australia, Singapore, India, Canada &amp; Germany</li>
                <li>⏱ <strong>Average onboarding:</strong> 5–7 business days</li>
              </ul>
            </article>

            <article className="bg-white border rounded-2xl p-6 shadow">
              <h2 className="flex items-center gap-3 text-lg font-semibold text-slate-800">
                <Cpu className="w-5 h-5 text-amber-600" /> GenAI Division Expansion
              </h2>

              <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                Demand for AI-driven transformation surged globally. OVE scaled to support end-to-end GenAI
                capabilities including:
              </p>

              <ul className="mt-3 text-sm text-slate-600 space-y-2">
                <li>• AI workflow automation</li>
                <li>• LLM &amp; RAG integrations</li>
                <li>• AI copilots &amp; conversational agents</li>
                <li>• Data annotation &amp; fine-tuning pipelines</li>
              </ul>

              <p className="mt-3 text-sm text-slate-700 font-medium">Team strength: <span className="text-amber-600">35+</span> GenAI specialists</p>
            </article>
          </motion.section>

          {/* Portfolio Table */}
          <motion.section
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white border rounded-2xl shadow overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-lg font-semibold text-slate-800">🤖 GenAI Product Portfolio — November Progress</h3>

              <div className="mt-4 w-full overflow-auto border rounded-lg">
                <table className="w-full text-sm table-auto border border-slate-300 border-collapse rounded-lg overflow-hidden">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="text-left p-3 font-medium border border-slate-300">Product</th>
                      <th className="text-left p-3 font-medium border border-slate-300">Domain</th>
                      <th className="text-left p-3 font-medium border border-slate-300">What it Solves</th>
                      <th className="text-left p-3 font-medium border border-slate-300">November Update</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="bg-white">
                      <td className="p-3 border border-slate-300">Flybyhire</td>
                      <td className="p-3 border border-slate-300">HR &amp; Recruitment</td>
                      <td className="p-3 border border-slate-300">AI to automate candidate screening &amp; shortlisting</td>
                      <td className="p-3 border border-slate-300">Launched multi-role auto-ranking engine</td>
                    </tr>

                    <tr className="bg-gray-50">
                      <td className="p-3 border border-slate-300">ScoobiesAI</td>
                      <td className="p-3 border border-slate-300">EdTech / Toys</td>
                      <td className="p-3 border border-slate-300">AI-powered toys that teach through play</td>
                      <td className="p-3 border border-slate-300">Released voice-learning beta</td>
                    </tr>

                    <tr className="bg-white">
                      <td className="p-3 border border-slate-300">ApateAI</td>
                      <td className="p-3 border border-slate-300">Cybersecurity</td>
                      <td className="p-3 border border-slate-300">Scam prevention &amp; fraud disruption using AI bots</td>
                      <td className="p-3 border border-slate-300">Added multilingual decoy trap models</td>
                    </tr>

                    <tr className="bg-gray-50">
                      <td className="p-3 border border-slate-300">DataPartnersAI</td>
                      <td className="p-3 border border-slate-300">Retail</td>
                      <td className="p-3 border border-slate-300">GenAI for buyer insights, pricing &amp; automation</td>
                      <td className="p-3 border border-slate-300">Completed first enterprise rollout</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-slate-600">OVE builds and deploys AI — end to end: ideation, engineering, training, deployment, and data security.</p>
            </div>
          </motion.section>

          {/* Client Spotlight & Key Numbers */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.12 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="bg-white border rounded-2xl p-6 shadow">
              <h4 className="text-lg font-semibold text-slate-800">🔍 Client Spotlight</h4>
              <ul className="mt-3 text-sm text-slate-600 space-y-2">
                <li>• Silicon Valley SaaS startup — scaled from 4 to 16 remote developers in 6 weeks</li>
                <li>• UK fintech major — deployed AI-enabled compliance automation</li>
                <li>• Singapore retail group — GenAI for product analytics and forecasting</li>
              </ul>
              <p className="mt-3 text-sm text-slate-600">OVE continues to help companies scale faster, reduce hiring timelines, and accelerate product development — without compromising quality or cost control.</p>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow">
              <h4 className="text-lg font-semibold text-slate-800">📈 Key Numbers — November 2025</h4>
              <dl className="mt-3 grid grid-cols-1 gap-3 text-sm text-slate-700">
                <div className="flex justify-between">
                  <dt>Developer Retention</dt>
                  <dd className="font-semibold">92%</dd>
                </div>
                <div className="flex justify-between bg-slate-50 rounded py-2">
                  <dt>New Clients Onboarded</dt>
                  <dd className="font-semibold">35</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Developers Deployed</dt>
                  <dd className="font-semibold">120+ (full-time)</dd>
                </div>
                <div className="flex justify-between bg-slate-50 rounded py-2">
                  <dt>GenAI Enterprise Pilots</dt>
                  <dd className="font-semibold">4 running in parallel</dd>
                </div>
              </dl>
            </div>
          </motion.section>

          {/* Whats Next */}
          <motion.section className="bg-white border rounded-2xl p-6 shadow">
            <h4 className="text-lg font-semibold text-slate-800">🧭 What’s Next — December &amp; Q1 2026</h4>
            <ul className="mt-3 text-sm text-slate-600 space-y-2">
              <li>• Launching AI Copilot Deployment Support for enterprises</li>
              <li>• Introducing OVE Academy to upskill engineers in AI &amp; cloud</li>
              <li>• Expanding near-shore support for US &amp; EU territories</li>
              <li>• Strengthening SLA-backed delivery and communication frameworks</li>
            </ul>

            <p className="mt-4 text-sm text-slate-600">Our mission remains the same: to empower businesses worldwide with world-class remote tech teams and intelligent AI-powered solutions.</p>
          </motion.section>

          {/* Contact / Footer */}
          <motion.footer className="rounded-2xl overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h5 className="text-lg font-semibold">🌐 Contact Us</h5>
                <p className="text-sm mt-2">Optimal Virtual Employee</p>
                <p className="text-sm mt-1 flex items-center gap-2"><Globe className="w-4 h-4" /> www.optimalvirtualemployee.com</p>
                <p className="text-sm mt-1 flex items-center gap-2"><Mail className="w-4 h-4" /> info@optimalvirtualemployee.com</p>
                <p className="text-sm mt-1 flex items-center gap-2"><Phone className="w-4 h-4" /> Global Support | +91-xxx-xxx-xxxx / +1-xxx-xxx-xxxx</p>
              </div>

              <div className="text-sm text-slate-300">
                <p>From: Shantanu Dublish &lt;sdublish@optimalvirtualemployee.com&gt;</p>
                <p className="mt-1">Sent: Friday, November 28, 2025 11:08 AM</p>
              </div>
            </div>

            <div className="mt-6 text-xs text-slate-400 border-t border-slate-700 pt-4">© 2025 Optimal Virtual Employee. All rights reserved.</div>
          </motion.footer>
        </main>
      </div>
    </div>
  );
}
