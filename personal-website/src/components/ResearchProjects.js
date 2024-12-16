import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './ResearchProjects.css';


const ResearchProjects = () => {
  const projects = [
    {
      yearRange: "2023 - 2025",
      title: "Agent-Based Simulation Model with Artificial Intelligence-Assisted Learning, Forecasting, and Optimization Algorithms for Electricity Markets and Market Analysis",
      description: "TUBITAK Project",
      fundingSource: "TUBITAK",
      team: "Selçuklu S. B. (Executive), Öztürk C., Muğaloğlu E., Arslan S., Bilgili F.",
      Link: "https://avesis.erciyes.edu.tr/proje/55a2d39b-44ca-4af9-95ff-5dff43a2f4d3/elektrik-piyasalari-icin-yapay-zeka-destekli-ogrenme-tahmin-ve-optimizasyon-algoritmalari-ile-etmen-temelli-benzetim-modeli-kurulmasi-ve-piyasa-incelemeleri", 
    },

    {
        yearRange: "2022 - 2024",
        title: "Assessing the Economic Energy and Environmental Impacts of Switching to Clean Fuel and Zero-Emission Vehicles",
        description: "YÖK Supported Project",
        fundingSource: "YÖK",
        team: "Selçuklu S. B. (Executive),  DİNÇ M. N.",
        Link: "https://avesis.erciyes.edu.tr/proje/6b30f8ba-44c9-458a-9320-01cbad2828cc/temiz-yakitli-ve-sifir-emisyonlu-araclara-gecisin-ekonomik-enerji-ve-cevresel-etkilerinin-degerlendirilmesi", 
      },


      {
        yearRange: "2021 - 2022",
        title: "Analyzing Different Market Structures with the Electricity Market Simulation Game",
        description: "YÖK Supported Project",
        fundingSource: "YÖK",
        team: "Selçuklu S. B. (Executive), KIRAÇ A., ERGÜN H. C., POLAT Ö.",
        Link: "https://avesis.erciyes.edu.tr/proje/399b7bac-21a7-45fb-aa57-f058bd365f1a/elektrik-piyasasi-simulasyon-oyunu-ile-farkli-piyasa-yapilarinin-incelenmesi", 
      },


      {
        yearRange: "2020 - 2022",
        title: "Multi-Objective Optimization of Priority Rankings of Energy Efficiency Measures and Applications in Erciyes University Campus",
        description: "AB IPA Project",
        fundingSource: "AB IPA",
        team: "Genç M. S. (Executive), Genç G., Akay B., Selçuklu S. B., Akarsu B., Azgın Ş. T., et al.",
        Link: "https://avesis.erciyes.edu.tr/proje/d583f8e1-76ba-4650-881e-fba892af7bc4/erciyes-universitesi-kampusunde-enerji-verimliligi-onlemlerinin-ve-uygulamalarinin-oncelik-siralamalarinin-cok-amacli-optimizasyonu", 
      },

      {
        yearRange: "2020 - 2022",
        title: "Hospital Energy Efficiency Feasibility Study",
        description: "AB IPA Project",
        fundingSource: "AB IPA",
        team: "Genç M. S. (Executive), Genç G., Selçuklu S. B., Azgın Ş. T., Akarsu B., Temirkaynak Ş., et al.",
        Link: "https://avesis.erciyes.edu.tr/proje/ad51ec1c-c604-4ba4-a8df-6a8916405f76/hastane-enerji-verimliligi-fizibilete-calismasi", 
      },



      {
        yearRange: "2010 - 2014",
        title: "Hydrogen Technology, Polymer Electrolyte Membrane Fuel Cell Research Project",
        description: "YÖK Supported Project",
        fundingSource: "YÖK",
        team: "YAPICI H. (Executive), ÖZIŞIK G., SELÇUKLU S. B., KAHRAMAN N., DALDABAN F., TÜRKOĞLU O., et al.",
        Link: "https://avesis.erciyes.edu.tr/proje/d332df17-314a-403f-a716-a5528a7bd467/hidrojen-teknolojisi-polimer-elektrolit-membranli-yakit-hucresi-arastirma-projesi", 
      },



    
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5">Research Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="project-card">
              <Card.Body>
                <Card.Title>
                  <a href={project.Link} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{project.yearRange}</Card.Subtitle>
                <Card.Text>{project.description}</Card.Text>
                <Card.Text>{project.team}</Card.Text>
              </Card.Body>

            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ResearchProjects;




