import { useState } from 'react';

function RawMaterial() {
    const [activeTab, setActiveTab] = useState('seafood');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <div className="tabs tabs-boxed p-6 flex r">
                <div className="gap-6 flex">
                    <a
                        className={`tab bg-white w-32 gap-2 ${activeTab === 'seafood' ? 'bg-[#ED7E46]' : ''}`}
                        onClick={() => handleTabClick('seafood')}
                    >
                       ทะเล
                    </a>

                    <a
                        className={`tab bg-white w-32 gap-2 ${activeTab === 'meat' ? 'bg-[#ED7E46]' : ''}`}
                        onClick={() => handleTabClick('meat')}
                    >
                        เนื้อสัตว์
                    </a>
                    <a
                        className={`tab bg-white w-32 gap-2 ${activeTab === 'vegetable' ? 'bg-[#ED7E46]' : ''}`}
                        onClick={() => handleTabClick('vegetable')}
                    >
                        ผัก
                    </a>
                    <a
                        className={`tab bg-white w-32 gap-2 ${activeTab === 'condiment' ? 'bg-[#ED7E46]' : ''}`}
                        onClick={() => handleTabClick('condiment')}
                    >
                        เครื่องปรุง
                    </a>
                    <a
                        className={`tab bg-white w-32 gap-2 ${activeTab === 'another' ? 'bg-[#ED7E46]' : ''}`}
                        onClick={() => handleTabClick('another')}
                    >
                        อื่นๆ
                    </a>
                </div>
            </div>
            <div className="tab-content">
                {activeTab === 'seafood' && <div>1</div>}
                {activeTab === 'meat' && <div>2</div>}
                {activeTab === 'vegetable' && <div>3</div>}
                {activeTab === 'condiment' && <div>4</div>}
                {activeTab === 'another' && <div>5</div>}
            </div>
        </div>
    );
}

export default RawMaterial;