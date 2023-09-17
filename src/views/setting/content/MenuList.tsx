import { useState } from 'react';

function MenuList() {
    const [activeTab, setActiveTab] = useState('boiled');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <>
            <div>
                <div className="tabs tabs-boxed p-6 flex r">
                    <div className="gap-6 flex">
                        <a
                            className={`tab bg-white w-32 gap-2 ${
                                activeTab === 'boiled' ? 'bg-[#ED7E46]' : ''
                            }`}
                            onClick={() => handleTabClick('boiled')}
                        >
                           ต้ม/แกง
                        </a>
                        <a
                            className={`tab bg-white w-32 gap-2 ${
                                activeTab === 'fry' ? 'bg-[#ED7E46]' : ''
                            }`}
                            onClick={() => handleTabClick('fry')}
                        >
                            ผัด/ทอด
                        </a>
                        <a
                            className={`tab bg-white w-32 gap-2 ${
                                activeTab === 'yummy' ? 'bg-[#ED7E46]' : ''
                            }`}
                            onClick={() => handleTabClick('yummy')}
                        >
                            แซ๋บ
                        </a>
                        <a
                            className={`tab bg-white w-32 gap-2 ${
                                activeTab === 'appetizer' ? 'bg-[#ED7E46]' : ''
                            }`}
                            onClick={() => handleTabClick('appetizer')}
                        >
                            ทานเล่น
                        </a>
                        <a
                            className={`tab bg-white w-32 gap-2 ${
                                activeTab === 'another' ? 'bg-[#ED7E46]' : ''
                            }`}
                            onClick={() => handleTabClick('another')}
                        >
                            อื่นๆ
                        </a>
                    </div>
                </div>
                <div className="tab-content">
                    {activeTab === 'boiled' && <div>1</div>}
                    {activeTab === 'fry' && <div>2</div>}
                    {activeTab === 'yummy' && <div>3</div>}
                    {activeTab === 'appetizer' && <div>4</div>}
                    {activeTab === 'another' && <div>5</div>}
                </div>
            </div>
        </>
    );
}

export default MenuList;