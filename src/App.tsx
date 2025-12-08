import { useState } from 'react';
import { Layout } from './components/Layout';
import { Screen1_Search } from './components/Screen1_Search';
import { Screen2_Loader } from './components/Screen2_Loader';
import { Screen3_Confirmation } from './components/Screen3_Confirmation';
import { Screen4_Vent } from './components/Screen4_Vent';
import { Screen5_Sliders } from './components/Screen5_Sliders';
import { Screen5b_Loader } from './components/Screen5b_Loader';
import { Screen6_Iceberg } from './components/Screen6_Iceberg';
import { Screen7_Gate } from './components/Screen7_Gate';
import { MethodologyModal } from './components/MethodologyModal';
import { CaseStudiesModal } from './components/CaseStudiesModal';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [step, setStep] = useState(1);
  const [companyData, setCompanyData] = useState<any>(null);
  const [activeModal, setActiveModal] = useState<null | 'methodology' | 'casestudies'>(null);

  const handleAnalyze = (domain: string) => {
    // Mock data decision logic based on brief
    const isPerfectMatch = domain.toLowerCase().includes('on.com') || domain.toLowerCase().includes('on-running.com');

    setCompanyData({
      name: isPerfectMatch ? 'On' : domain,
      logo: isPerfectMatch ? 'https://upload.wikimedia.org/wikipedia/commons/f/f6/On_logo.svg' : null,
      industry: isPerfectMatch ? 'Retail / Sportswear' : 'Unknown Industry',
      headcount: isPerfectMatch ? 1033 : 100,
      avgSalary: isPerfectMatch ? 110000 : 80000
    });
    setStep(2);
  };

  return (
    <Layout
      onOpenMethodology={() => setActiveModal('methodology')}
      onOpenCaseStudies={() => setActiveModal('casestudies')}
    >
      <AnimatePresence>
        {activeModal === 'methodology' && (
          <MethodologyModal isOpen={true} onClose={() => setActiveModal(null)} />
        )}
        {activeModal === 'casestudies' && (
          <CaseStudiesModal isOpen={true} onClose={() => setActiveModal(null)} />
        )}
      </AnimatePresence>

      {step === 1 && <Screen1_Search onAnalyze={handleAnalyze} />}
      {step === 2 && <Screen2_Loader onComplete={() => setStep(3)} />}
      {step === 3 && <Screen3_Confirmation data={companyData} onConfirm={() => setStep(4)} />}
      {step === 4 && <Screen4_Vent onNext={() => setStep(5)} />}
      {step === 5 && <Screen5_Sliders onNext={() => setStep(5.5)} />}
      {step === 5.5 && <Screen5b_Loader onComplete={() => setStep(6)} />}
      {step === 6 && <Screen6_Iceberg onNext={() => setStep(7)} />}
      {step === 7 && <Screen7_Gate onRestart={() => setStep(1)} />}
    </Layout>
  );
}

export default App;
