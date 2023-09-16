
import { Order } from "../../models/order-model"
type OrderProps = {
  data: Order;
}
function CardTotalOrder(props: OrderProps) {
  const { data } = props;
  return (
    <>
         <table className="w-full bg-white rounded-xl">
          <tbody>
            {data.orderDetail != null &&
              data.orderDetail.map((v) => (
                <tr key={v.id}>
                  <td>
                    <input
                      type="checkbox"
                    />
                  </td>
                  <td className="text-[#ED7E46]">x{v.qty}</td>
                  <td>{v.priceList != null && v.priceList.food.name}</td>
                  <td>
                    {v.optionDetail.map((i) => (
                      <div
                        className="text-[#5F5F5F] "
                        key={i.optionDetail.name}
                      >
                        {i.optionDetail.name}
                      </div>
                    ))}
                  </td>
                  <td className="text-[#5F5F5F] ">
                    {v.priceList != null && v.priceList.name}
                  </td>
                    {data.table != null &&
                      data.table.map((tableItem) => (
                        <td
                          className="text-xs text-[#0198DD] "
                          key={tableItem.name}
                        >
                          {tableItem.name} - {tableItem.seat}
                        </td>
                      ))}
                </tr>
              ))}
          </tbody>
        </table>
    </>
  )
}

export default CardTotalOrder
