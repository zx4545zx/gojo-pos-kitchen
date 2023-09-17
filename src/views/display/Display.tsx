import { useState } from 'react';
import Complete from './content/Complete';
import Inprogress from './content/Inprogress';
import Problem from './content/Problem';
function Display() {
  const [activeTab, setActiveTab] = useState('completed');
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div>
      <div className="tabs tabs-boxed p-6 flex justify-center">
        <div className="gap-6 flex">
          <a
            className={`tab bg-white w-32 gap-2 ${activeTab === 'completed' ? 'active' : ''}`}
            onClick={() => handleTabClick('completed')}
          >
            <span className="badge badge-xs badge-success"></span>ทำเสร็จแล้ว
          </a>
          <a
            className={`tab bg-white w-32 gap-2 ${activeTab === 'inProgress' ? 'active' : ''}`}
            onClick={() => handleTabClick('inProgress')}
          >
            <span className="badge badge-xs badge-warning"></span>กำลังทำ
          </a>
          <a
            className={`tab bg-white w-32 gap-2 ${activeTab === 'problem' ? 'active' : ''}`}
            onClick={() => handleTabClick('problem')}
          >
            <span className="badge badge-xs badge-error"></span>มีปัญหา
          </a>
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 'completed' && <div><Complete/></div>}
        {activeTab === 'inProgress' && <div><Inprogress/></div>}
        {activeTab === 'problem' && <div><Problem/></div>}
      </div>
    </div>
    </>
  )
}

export default Display
