import React, { useState, useEffect } from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';

const AboutContent = () => {

  const [activeKey, setActiveKey] = useState('education');

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath.includes('education')) {
      setActiveKey('education');
    } else if (currentPath.includes('academic-positions')) {
      setActiveKey('academic-positions');
    } else if (currentPath.includes('publications')) {
      setActiveKey('publications');
    } else if (currentPath.includes('research-interests')) {
      setActiveKey('research-interests');
    } else if (currentPath.includes('awards')) {
      setActiveKey('awards');
    }
  }, []);

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">About Saltuk Buğra Selçuklu</h2>
      <Tabs
        activeKey={activeKey}
        onSelect={(key) => setActiveKey(key)} 
        id="about-tabs"
        className="mb-3 justify-content-center"
      >
        <Tab eventKey="education" title="Education">
          <div>
            <p>
              <strong>Yıldız Technical University:</strong> Bachelor of Science, Economics (2002 - 2007)
            </p>
            <p>
              <strong>Yıldız Technical University:</strong> Bachelor of Science, Industrial Engineering (2002 - 2007)
            </p>
            <p>
              <strong>Colorado State University Pueblo:</strong> Master of Science (MS), Industrial and Systems Engineering (2007 - 2009)
            </p>
            <p>
              <strong>Rutgers University:</strong> Doctor of Philosophy (PhD), Industrial and Systems Engineering (2010 - 2015)
            </p>
          </div>
        </Tab>
        <Tab eventKey="academic-positions" title="Academic Positions">
          <div>
          <p>
              <strong>Associate Director</strong>, Erciyes University Energy Conversion Research and Application Center (Nov 2019 - Present)  
              <br />
              <em>Skills:</em> University Teaching, Communication, Teamwork, Administrative Support
            </p>
            <p>
              <strong>Division Chair</strong>, Energy Planning and Management Division of Energy Systems Engineering Department (Jul 2017 - Present)  
              <br />
              <em>Skills:</em> University Teaching, Academic Advising, Curriculum Development, Communication
            </p>
            <p>
              <strong>Assistant Professor</strong>, Erciyes University (Jan 2016 - Present)  
              <br />
              <em>Skills:</em> University Teaching, Research in Renewable Energy, Operations Research
            </p>
            <p>
              <strong>Research and Teaching Assistant</strong> (Aug 2009 - Jan 2016)  
              <br />
              Teaching programming, numerical analysis, and mechanical engineering labs while conducting renewable energy research.
            </p>
            <p>
              <strong>Teaching Assistant</strong>, Rutgers University (Aug 2014 - May 2015)  
              <br />
              Assisted with Engineering Economics courses.
            </p>
            <p>
              <strong>Graduate Assistant</strong>, Colorado State University Pueblo (Aug 2008 - Dec 2008)  
              <br />
              Mentored S-STEM scholars and guided university education processes.
            </p>
            <p>
              <strong>Intern</strong>, Harsco Corporation (Jun 2008 - Dec 2008)  
              <br />
              Performed optimization studies and proposed efficiency improvements.
            </p>
            <p>
              <strong>Graduate Assistant</strong>, Colorado State University Pueblo (Aug 2007 - May 2008)  
              <br />
              Worked on “Briquette Production from Fly Ash and Saw Dust” project.
            </p>
            <p>
              <strong>Intern</strong>, IGDAS (Jun 2005 - Sep 2005)  
              <br />
              Analyzed department relationships and resolved communication issues.
            </p>
            <p>
              <strong>Ergonomics Observer</strong>, Her-Sez (Jan 2005 - Apr 2005)  
              <br />
              Examined ergonomic conditions and suggested layout improvements.
            </p>
            <p>
              <strong>Intern</strong>, KARSU Tekstil (Jun 2004 - Sep 2004)  
              <br />
              Analyzed data processing systems.
            </p>
            <p>
              <strong>Work Study Controller</strong>, Satuk Bugra Han Machines (Mar 2004 - Apr 2004)  
              <br />
              Performed work studies and prepared conveyor improvement plans.
            </p>
            <p>
              <strong>Intern</strong>, Air Forces Command 2nd Air Supply and Maintenance Center (Jun 2003 - Sep 2003)  
              <br />
              Practiced machining and assembly line operations.
            </p>
          </div>
        </Tab>
        <Tab eventKey="research-interests" title="Research Interests">
          <div>
            <p>
            Electricity Markets, Machine Learning, Energy Systems, Energy Planning and Management, Operations Research, Simulation modeling, and Optimization under Uncertainty.
            </p>
            <p>
            <p>
              <strong>WoS Research Areas:</strong> Industrial Engineering, Engineering, Engineering Informatics and Technology (Eng), Energy and Fuels.
            </p>
            <p>
              <strong>Avesis Research Areas:</strong> Industrial Engineering, Optimization Theory and Methods, Multi-objective Optimization, Simulation, Simulation Optimization, Energy, Engineering and Technology.
            </p>

            </p>
          </div>
        </Tab>
        <Tab eventKey="publications" title="Publications">
        <div>
            <p>
              Published <strong>20+</strong> research papers in top journals and conferences.
            </p>
            <p><strong>METRICS</strong></p>

            <div className="metrics-table mt-5">
              <div className="row text-center" style={{ borderLeft: '1px solid lightgray' }}>
                <div className="col-3" style={{ borderRight: '1px solid lightgray', padding: '10px' }}>
                  <h4 style={{ marginBottom: '10px' }}>Publication</h4>
                  <p style={{ marginTop: '0' }}>26</p>
                </div>
                <div className="col-3" style={{ borderRight: '1px solid lightgray', padding: '10px' }}>
                  <h4 style={{ marginBottom: '10px' }}>Citation (WoS)</h4>
                  <p style={{ marginTop: '0' }}>43</p>
                </div>
                <div className="col-3" style={{ borderRight: '1px solid lightgray', padding: '10px' }}>
                  <h4 style={{ marginBottom: '10px' }}>H-Index (WoS)</h4>
                  <p style={{ marginTop: '0' }}>4</p>
                </div>
                <div className="col-3" style={{ padding: '10px' }}>
                  <h4 style={{ marginBottom: '10px' }}>Citation (Scopus)</h4>
                  <p style={{ marginTop: '0' }}>83</p>
                </div>
              </div>
              <div className="row text-center" style={{ borderLeft: '1px solid lightgray' }}>
                <div className="col-3" style={{ borderRight: '1px solid lightgray', padding: '10px' }}>
                  <h4 style={{ marginBottom: '10px' }}>H-Index (Scopus)</h4>
                  <p style={{ marginTop: '0' }}>5</p>
                </div>
                <div className="col-3" style={{ borderRight: '1px solid lightgray', padding: '10px' }}>
                  <h4 style={{ marginBottom: '10px' }}>Citation (Scholar)</h4>
                  <p style={{ marginTop: '0' }}>21</p>
                </div>
                <div className="col-3" style={{ borderRight: '1px solid lightgray', padding: '10px' }}>
                  <h4 style={{ marginBottom: '10px' }}>H-Index (Scholar)</h4>
                  <p style={{ marginTop: '0' }}>1</p>
                </div>
                <div className="col-3" style={{ padding: '10px' }}>
                  <h4 style={{ marginBottom: '10px' }}>Project</h4>
                  <p style={{ marginTop: '0' }}>8</p>
                </div>
              </div>
              <div className="row text-center" style={{ borderLeft: '1px solid lightgray' }}>
                <div className="col-3" style={{ borderRight: '1px solid lightgray', padding: '10px' }}>
                  <h4 style={{ marginBottom: '10px' }}>Thesis Advisory</h4>
                  <p style={{ marginTop: '0' }}>6</p>
                </div>
                <div className="col-3" style={{ padding: '10px' }}>
                  <h4 style={{ marginBottom: '10px' }}>Open Access</h4>
                  <p style={{ marginTop: '0' }}>
                    <span className="text-warning">
                      <i className="bi bi-unlock"></i>
                    </span>{' '}
                    13
                  </p>
                </div>
              </div>
            </div>
            <p>
              <a href="/publications" className="btn btn-link">
                Visit the Publications page for more.
              </a>
            </p>
          </div>
        </Tab>
       

      </Tabs>
    </Container>
  );
};

export default AboutContent;


