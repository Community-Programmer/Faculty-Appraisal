import React from 'react';
import { Mail, Phone, Facebook, Linkedin } from 'lucide-react';
import ph from "../../assets/anon.jpg";

interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  publisher?: string;
}

const profileData = {
  name: "DR. ANONYMOUS",
  email: "@bmsit.ac.in",
  role: "Assistant Professor Department of Computer Science and Engineering",
  institution: "BMS Institute of Technology and Management Bangalore",
};

const researchInterests = [
  'Machine Learning',
  'Medical Informatics',
  'Data Analytics',
  'WSN',
];

const stats = [
  { label: 'SCOPUS PUBLICATIONS', value: 13 },
  { label: 'SCHOLAR CITATIONS', value: 380 },
  { label: 'SCHOLAR H-INDEX', value: 7 },
  { label: 'SCHOLAR I10-INDEX', value: 5 },
];

const publications: Publication[] = [
  {
    title: "Smart Home Automation Using IoT",
    authors: "MSSKR Mrs Lakshmi B N, Dr. Ashwini N",
    journal: "Journal of Scholastic Engineering Science and Management 2 (3), 78-87",
    year: 2023
  },
  {
    title: "Automated Online Proctoring Using Artificial Intelligence",
    authors: "AKG Ashwini N , Aditya Rana , Lakshmi B N , Aditya Abrol , Vinutha K",
    journal: "JOURNAL OF PHARMACEUTICAL NEGATIVE RESULTS 14 (SPECIAL ISSUE 02), 2840–2847",
    year: 2023
  },
  {
    title: "Brain tumor image classification using brain tumor in the context of medical image processing",
    authors: "MP Lakshmi B N, V. Sumathi, S Ananthi",
    journal: "Bulletin of Environment, Pharmacology and Life Sciences 11 (5), 50-55",
    year: 2022
  },
  {
    title: "Assessment of Copyright Protection Using Watermarking and Cryptography for Online Text Information",
    authors: "BN Lakshmi, N Ashwini, A Abrol",
    journal: "BP International",
    year: 2021
  },
  {
    title: "DEEP NEURAL NETWORK APPLICATION FOR MEDICAL IMAGE PROCESSING",
    authors: "RKGANDDLBN HEMALATHA C1*, NELSON KENNEDY BABU C2",
    journal: "International journal of biology Pharmacy and allied sciences 10 (special",
    year: 2021
  },
  {
    title: "AUTO HYPERTENSION DETECTION AND HEALTH CLASSIFICATION USING BIO-INSPIRED MACHINE LEARNING ALGORITHMS",
    authors: "MSANDSPK LAKSHMI B N1*, SAKTHIVEL S2 , KARRA MAHESWARI3 , BALAKRISHNAN C4",
    journal: "International journal of biology Pharmacy and allied sciences 10 (special",
    year: 2021
  }
];

const Component: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white">
        <header className="shadow">
          <div className="container mx-auto px-4 py-2 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Mail className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-[#59BB83]">help@ResearchID.co</span>
              <Phone className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-[#59BB83]">WhatsApp</span>
              <Facebook className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-[#59BB83]">Facebook</span>
              <Linkedin className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-[#59BB83]">Linkedin</span>
            </div>
            <span className="text-sm text-[#59BB83]">ResearchID</span>
          </div>
        </header>
        <main className="text-center py-20 bg-gray-900 text-white">
          <h1 className="text-4xl font-bold mb-2">{profileData.name}</h1>
          <p className="text-xl mb-4">{profileData.email}</p>
          <p className="text-lg mb-2">{profileData.role}</p>
          <p className="text-lg">{profileData.institution}</p>
        </main>
      </div>

      <div className="bg-white flex justify-center gap-40 p-5 items-center">
        <img src={ph} alt="Profile" className="w-64 h-64" />
        <div className='flex flex-col ml-4'>
          <h2 className="text-2xl font-bold">EDUCATION</h2>
          <ul>
            <li className='text-xl'>BE (CSE)</li>
            <li className='text-xl'>M.Tech (CSE)</li>
            <li className='text-xl'>Ph.D</li>
          </ul>
        </div>
      </div>

      <div className="py-6 bg-white">
        <header className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">RESEARCH INTERESTS</h1>
          <p className="mt-1 text-lg text-gray-600">{researchInterests.join(', ')}</p>
        </header>
        <main className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="relative">
              <img className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white text-center">
  {stats.map((stat, index) => (
    <div
      key={index}
      className="p-6 border border-gray-500 rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out"
    >
      <div className="text-4xl font-bold">{stat.value}</div>
      <div className="text-sm mt-2">{stat.label}</div>
    </div>
  ))}
</div>

              </div>
            </div>
          </div>
        </main>
      </div>

      <div className="py-12 bg-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">RECENT SCHOLAR PUBLICATIONS</h1>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <ul className="divide-y divide-gray-200">
              {publications.map((pub, index) => (
                <li key={index} className="px-4 py-4 sm:px-6">
                  <div className="text-sm font-medium text-indigo-600">{pub.title}</div>
                  <div className="mt-1 text-sm text-gray-900">{pub.authors}</div>
                  <div className="mt-1 text-sm text-gray-500">{`${pub.journal} ${pub.year}`}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
