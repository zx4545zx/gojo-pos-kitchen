import React, { useState, useEffect } from "react";
import CardOrder from "../../components/home/CardOrder"
import CardTotalOrder from "../../components/home/CardTotalOrder";
import { getOrder } from "../../api/getOrder";
import { Order } from "../../models/order-model";


function Home() {
  const [orders, setOrders] = useState<Order[] | undefined>([])


  const [selectedZone, setSelectedZone] = useState("");

  useEffect(() => {
    async function getAll() {
      try {
        const order = await getOrder();
        console.log(order);

        setOrders(order);
      } catch (error) {
        console.error(error);
      }
    }
    getAll();
  }, []);

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row ">
        <div className="md:w-1/2 p-2 md:h-[90dvh] overflow-y-scroll">
          <div className="text-2xl p-3 flex gap-32"><p>รายการอาหารใหม่ -บิล</p>
            <select
              className="w-48 rounded-xl text-xl "
              value={selectedZone}
              onChange={(e) => setSelectedZone(e.target.value)}
            >
              <option value="">ทั้งหมด</option>
              {orders && orders.length > 0 ? (
                Array.from(
                  new Set(
                    orders
                      .map((data) => data.table.map((v) => v.zoneId.name))
                      .flat()
                  )
                ).map((zoneName) => (
                  <option key={zoneName} value={zoneName}>
                    {zoneName}
                  </option>
                ))
              ) : (
                <option disabled>ไม่พบข้อมูล</option>
              )}
            </select></div>

          <div className="flex flex-wrap justify-center flex-grow-0 gap-4 py-6 ">

            {orders ? (
              orders
                .filter(
                  (data) =>
                    selectedZone === "" ||
                    (data.table &&
                      data.table.some((v) => v.zoneId.name === selectedZone))
                )
                .map((data) => (
                  <div key={data?.id}>{data && <CardOrder data={data} />}</div>
                ))
            ) : (
              <div>ไม่พบข้อมูล</div>
            )}
          </div>
        </div>

        {/* <div className="md:w-1/2 p-2 bg-red-600 min-h-auto md:min-h-[90dvh]">
          <div></div>
        </div> */}

        <div className="md:w-1/2 p-2 md:h-[90dvh] overflow-y-scroll bg-red-600">
          <div className="text-2xl p-3 "><p>รายการอาหารทั้งหมด loop ตารางตามบิลทำให้ ui เพี้ยนในบิลใหม่</p>
          </div>
          <div className="flex flex-wrap justify-center flex-grow-0 gap-4 py-6 ">
          {orders?.map((data) => (
            <CardTotalOrder key={data.id} data={data} />
          ))}

          </div>
        </div>

      </div>
    </>
  )
}

export default Home
