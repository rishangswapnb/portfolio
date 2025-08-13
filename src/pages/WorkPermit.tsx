import React from 'react';
import './WorkPermit.css';

const workPermitData = [
  
  {
    country: 'United States',
    visaStatus: 'H1B (Open Work Permit)',
    expiryDate: 2028,
    summary: 'Open work permit for the United States'
  }
];
const WorkPermit: React.FC = () => {

  return (
    <div className="work-permit-container">
      <div className="work-permit-card">
        <h2 className="work-permit-headline">🎓 Work Permits</h2>
        {workPermitData.map((permit, index) => (
          <p key={index} className="work-permit-summary">
            I'm currently on a <strong>{permit.visaStatus}</strong> 🛂 in the {permit.country}!
            {permit.expiryDate && (
              <>
                {' '}My visa is valid until <strong>{permit.expiryDate}</strong> 📅.
              </>
            )}
          </p>
        ))}
        <p className="additional-info">Open to relocation and remote opportunities.</p>
      </div>
    </div>
  );
};

export default WorkPermit;
