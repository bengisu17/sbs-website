import React from 'react';

const Publications = () => {
  const categories = [
    {
      category: 'Published journal articles indexed by SCI, SSCI, and AHCI',
      publications: [
        {
          title: 'Machine learning applications on proton exchange membrane water electrolyzers: A component-level overview',
          authors: 'Albadwi A., SELÇUKLU S. B., KAYA M. F.',
          year: 2024,
          link: 'https://avesis.erciyes.edu.tr/yayin/0ee106ac-7bdb-4d9d-9a8c-4a08876362a4/machine-learning-applications-on-proton-exchange-membrane-water-electrolyzers-a-component-level-overview',
        },
        {
          title: 'Effects of tank heating on hydrogen release from metal hydride system in VoltaFCEV Fuel Cell Electric Vehicle',
          authors: 'Özdoğan E., Hüner B., Süzen Y. O., Eşiyok T., Uzgören İ. N., Kıstı M., et al.',
          year: 2023,
          link: 'https://avesis.erciyes.edu.tr/yayin/e13144bb-636b-4196-865b-dd5b61ae5d73/effects-of-tank-heating-on-hydrogen-release-from-metal-hydride-system-in-voltafcev-fuel-cell-electric-vehicle',
        },
        {
          title: 'Electricity generation portfolio planning and policy implications of Turkish power system considering cost, emission, and uncertainty',
          authors: 'SELÇUKLU S. B., Coit D., Felder F.',
          year: 2023,
          link: 'https://avesis.erciyes.edu.tr/yayin/6e517c2c-bb3f-40b3-bdb3-4fd128d12633/electricity-generation-portfolio-planning-and-policy-implications-of-turkish-power-system-considering-cost-emission-and-uncertainty',
        },
        {
          title: 'Economically and environmentally sustainable long-term power system expansion',
          authors: 'SELÇUKLU S. B., Rodgers M. D., Movlyanov A.',
          year: 2022,
          link: 'https://avesis.erciyes.edu.tr/yayin/dfa8e1a1-4747-4064-8312-8873b9759a3e/economically-and-environmentally-sustainable-long-term-power-system-expansion',
        },
        {
          title: 'Pareto uncertainty index for evaluating and comparing solutions for stochastic multiple objective problems',
          authors: 'SELÇUKLU S. B., Coit D. W., Felder F. A.',
          year: 2020,
          link: 'https://avesis.erciyes.edu.tr/yayin/b5cd7ed7-d2a5-48d4-b28b-d4d45414e325/pareto-uncertainty-index-for-evaluating-and-comparing-solutions-for-stochastic-multiple-objective-problems',
        },
        {
          title: 'Neutronic Analysis of LBE-Uranium Spallation Target Accelerator Driven System Loaded with Uranium Dioxide in TRISO Particles',
          authors: 'Bakir G., SELÇUKLU S. B., GENÇ G., YAPICI H.',
          year: 2016,
          link: 'https://avesis.erciyes.edu.tr/yayin/747cf990-54de-45fc-aede-72c7bc873f02/neutronic-analysis-of-lbe-uranium-spallation-target-accelerator-driven-system-loaded-with-uranium-dioxide-in-triso-particles',
        },
        {
          title: 'Neutron-Induced Medical Radioisotope Production in a Conceptual Accelerator-Driven System, Fueled with Uranium Carbide',
          authors: 'ARSLAN A., Bakir G., SELÇUKLU S. B., GENÇ G., YAPICI H.',
          year: 2016,
          link: 'https://avesis.erciyes.edu.tr/yayin/ed82e08b-651e-41f6-9ec0-9aa164e3265a/neutron-induced-medical-radioisotope-production-in-a-conceptual-accelerator-driven-system-fueled-with-uranium-carbide',
        },
        {
          title: 'Medical Radioisotope Production in a Power-Flattened ADS Fuelled with Uranium and Plutonium Dioxides',
          authors: 'Bakir G., SELÇUKLU S. B., YAPICI H.',
          year: 2016,
          link: 'https://avesis.erciyes.edu.tr/yayin/3012e525-fafa-4e51-85b5-8dac09ba5455/medical-radioisotope-production-in-a-power-flattened-ads-fuelled-with-uranium-and-plutonium-dioxides',
        },
      ],
    },
    {
      category: 'Articles Published in Other Journals',
      publications: [
        {
          title: 'Generation Expansion Planning Considering Competition and Market Power',
          authors: 'Selcuklu S. B., Elzein Elmahi A. I.',
          year: 2021,
          link: 'https://avesis.erciyes.edu.tr/publication/details/27853348-e33a-4013-aa35-e5615af86d60/generation-expansion-planning-considering-competition-and-market-power',
        },
        {
          title: 'Solar power plant generation forecasting using NARX neural network model: A case study',
          authors: 'NKURIYINGOMA O., SELÇUKLU S. B.',
          year: 2021,
          link: 'https://avesis.erciyes.edu.tr/publication/details/cabe1241-b6a8-46f5-a37b-f0def4ffb398/solar-power-plant-generation-forecasting-using-narx-neural-network-model-a-case-study',
        },
      ],
    },
    {
      category: 'Refereed Congress / Symposium Publications in Proceedings',
      publications: [
        {
          title: "Analysis of Türkiye's nuclear energy policies within the scope of combating climate change and emission targets",
          authors: 'Çelik E., SELÇUKLU S. B.',
          year: 2023,
          link: 'https://avesis.erciyes.edu.tr/publication/details/c7448543-61e5-433e-b9d2-de523908f1f6/iklim-degisikligi-ile-mucadele-ve-emisyon-hedefleri-kapsaminda-turkiyenin-nukleer-enerji-politikalari-analizi',
        },
        {
          title: 'MERIT ORDER EFFECT OF RENEWABLE ENERGY SOURCES IN TURKISH ELECTRICITY MARKET',
          authors: 'Kılıç E., MUĞALOĞLU E., KESKİN H., SELÇUKLU S. B.',
          year: 2023,
          link: 'https://avesis.erciyes.edu.tr/publication/details/7513e474-a616-4c97-a49c-122a38cbfcfb/merit-order-effect-of-renewable-energy-sources-in-turkish-electricity-market',
        },
        {
            title: 'Electricity Price Forecasting Using Automatic Programming Methods',
            authors: 'Dikbaş S., ARSLAN S., GÜL M. F., SELÇUKLU S. B.',
            year: 2023,
            link: 'https://avesis.erciyes.edu.tr/publication/details/b3950610-bfc1-4fc2-8560-cc43cb14d9a8/electricity-price-forecasting-using-automatic-programming-methods',
          },
          {
            title: 'ENERGY PLANNING AND OPTIMIZATION MODELING FOR CAMPUS BUILDINGS AND TRANSPORTATION',
            authors: 'SELÇUKLU S. B., MOVLYANOV A.',
            year: 2023,
            link: 'https://avesis.erciyes.edu.tr/publication/details/63bbd388-7aa5-4372-9390-171e111f2105/energy-planning-and-optimization-modeling-for-campus-buildings-and-transportation',
          },
          {
            title: 'Simulation and Assessment of Transition to Alternative Fueled-Buses for a Local Municipality',
            authors: 'Erbay B. N., DİNÇ M. N., SELÇUKLU S. B.',
            year: 2023,
            link: 'https://avesis.erciyes.edu.tr/publication/details/8da97033-2631-4d39-ad55-c9e4fcefaa14/simulation-and-assessment-of-transition-to-alternative-fueled-buses-for-a-local-municipality',
          },
          {
            title: 'SOLAR POWER PLANT PRODUCTION ESTIMATION WITH MACHINE LEARNING',
            authors: 'HALEF M., SELÇUKLU S. B.',
            year: 2022,
            link: 'https://avesis.erciyes.edu.tr/publication/details/1a8fe0e6-63fa-4862-bbf4-20d92ba106b8/makine-ogrenimi-ile-gunes-enerjisi-santrali-uretim-tahmini',
          },
          {
            title: 'OPTIMIZATION OF ELECTRICITY GENERATION EXPANSION CONSIDERING ECONOMIC DEVELOPMENT AND EMPLOYMENT',
            authors: 'Movlyanov A., Selçuklu S. B., Rodgers M.',
            year: 2021,
            link: 'https://avesis.erciyes.edu.tr/publication/details/f5f5c249-f93b-4c3c-99e3-6d15215de42b/optimization-of-electricity-generation-expansion-considering-economic-development-and-employment',
          },
          {
            title: 'A Unique Heat Exchanger Design for Most Efficient Hydrogen Release from Metal Hydride Hydrogen Storage Tank for VoltaCARH2 Hydrogen Electric Vehicle',
            authors: 'Özdoğan E., Süzen Y. O., Uysal S., Kıstı M., Uzgören İ. N., Hüner B., et al.',
            year: 2021,
            link: 'https://avesis.erciyes.edu.tr/publication/details/ce6ae2c1-ade2-4747-b403-b8fed041d06a/a-unique-heat-exchanger-design-for-most-efficient-hydrogen-release-from-metal-hydride-hydrogen-storage-tank-for-voltacarh2-hydrogen-electric-vehicle',
          },
          {
            title: 'Economic, Energy and Environmental Assessments of Transition to Hydrogen-Powered Buses',
            authors: 'Dinç M. N., Selçuklu S. B., Kıstı M., Kaya M. F.',
            year: 2021,
            link: 'https://avesis.erciyes.edu.tr/publication/details/d25a2abc-8be0-47e7-bacb-542c177b4f96/economic-energy-and-environmental-assessments-of-transition-to-hydrogen-powered-buses',
          },
          {
            title: 'Energy and Environmental Assessment of Transition to Hydrogen Vehicles',
            authors: 'Dinç M. N., Kıstı M., Selçuklu S. B., Kaya M. F.',
            year: 2021,
            link: 'https://avesis.erciyes.edu.tr/publication/details/4b492506-b2a8-40d4-9e2f-369929da8a12/energy-and-environmental-assessment-of-transition-to-hydrogen-vehicles',
          },
          {
            title: 'GENERATION EXPANSION PLANNING CONSIDERING COMPETITION AND MARKET POWER',
            authors: 'Elmahi A. I. E., SELÇUKLU S. B.',
            year: 2020,
            link: 'https://avesis.erciyes.edu.tr/publication/details/e563d382-9881-457d-8875-5c282ff26f2b/generation-expansion-planning-considering-competition-and-market-power',
          },
          {
            title: 'Stochastic Multiple Objective Electric Generation Expansion Planning',
            authors: 'Coit D. W., Selcuklu S. B., Chatwattanasiri N., Wattanapongsakorn N.',
            year: 2015,
            link: 'https://avesis.erciyes.edu.tr/publication/details/c80d2082-5bae-408a-9c93-b7ebf513ae3d/stochastic-multiple-objective-electric-generation-expansion-planning',
          },
          {
            title: 'Electric power generation expansion planning: Robust optimization considering climate change',
            authors: 'Li S., Coit D. W., Selcuklu S. B., Felder F. A.',
            year: 2014,
            link: 'https://avesis.erciyes.edu.tr/publication/details/39986a1d-f464-4c2f-8129-cedfba5c85ad/electric-power-generation-expansion-planning-robust-optimization-considering-climate-change',
          },
          {
            title: 'A New Methodology for Solving Multi-Objective Stochastic Optimization Problems with Independent Objective Functions',
            authors: 'Selcuklu S. B., Coit D. W., Felder F., Rodgers M., Wattanapongsakorn N.',
            year: 2013,
            link: 'https://avesis.erciyes.edu.tr/publication/details/02320270-b69f-4148-9f86-684f3885829b/a-new-methodology-for-solving-multi-objective-stochastic-optimization-problems-with-independent-objective-functions',
          },
        
      ],
    },
    {
      category: 'Books & Book Chapters',
      publications: [
        {
          title: 'Multi-objective Genetic Algorithms',
          authors: 'SELÇUKLU S. B.',
          year: 2023,
          link: 'https://avesis.erciyes.edu.tr/publication/details/72803777-52c5-422b-8bf5-a1d75271321a/multi-objective-genetic-algorithms',
        },
      ],
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className='text-center mb-5'>Publications</h2>
      {categories.map((category, index) => (
        <div key={index} className="mb-5">
          <h3>{category.category}</h3>
          <ul className="list-unstyled">
            {category.publications.map((pub, pubIndex) => (
              <li key={pubIndex} className="mb-4">
                <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-underline publication-link"
                >
                <strong>{pub.title}</strong>
                </a>

                <br />
                <span>{pub.authors}</span>
                <br />
                <span>Published: {pub.year}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Publications;


