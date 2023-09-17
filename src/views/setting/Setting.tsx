import { useState } from 'react';
import RawMaterial from './content/RawMaterial';
import MenuList from './content/menuList';
function Setting() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };
  return (
    <>
     <div>
      <div className="tabs p-3">
        <a
          className={`tab text-[#000000] w-32 h-10 ${
            activeTab === 0 ? 'bg-white' : 'bg-[#E3E3E3]'
          }`}
          onClick={() => handleTabClick(0)}
        >
          รายการอาหาร
        </a>
        <a
          className={`tab text-[#000000] w-32 h-10 ${
            activeTab === 1 ? 'bg-white' : 'bg-[#E3E3E3]'
          }`}
          onClick={() => handleTabClick(1)}
        >
          วัตถุดิบ
        </a>
      </div>
      <div className="content p-3">
        {activeTab === 0 && <div><MenuList/></div>}
        {activeTab === 1 && <div><RawMaterial/></div>}
      </div>
    </div>
    </>
  )
}

export default Setting