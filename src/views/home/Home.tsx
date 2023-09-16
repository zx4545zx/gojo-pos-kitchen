import CardOrder from "../../components/home/CardOrder"

function Home() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="md:w-1/2 p-2 md:h-[90dvh] overflow-y-scroll">
          <div className="flex flex-wrap justify-center flex-grow-0 gap-4">
            <CardOrder />
            <CardOrder />
            <CardOrder />
            <CardOrder />
            <CardOrder />
            <CardOrder />
            <CardOrder />
            <CardOrder />
            <CardOrder />
            <CardOrder />
            <CardOrder />
          </div>
        </div>
        <div className="md:w-1/2 p-2 bg-red-600 min-h-auto md:min-h-[90dvh]">

          <div></div>
          <div></div>

        </div>
      </div>
    </>
  )
}

export default Home
