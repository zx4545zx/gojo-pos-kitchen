import { Link } from "react-router-dom"

function NavBar() {
  return (
    <>
      <div className="navbar bg-base-100 h-[10vh]">
        <div className="flex-none">
        </div>
        <div className="flex-1">
          <Link to="/" className="text-xl normal-case btn btn-ghost">daisyUI</Link>
        </div>
        <div className="flex-none">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center justify-center gap-2">
              <span className="badge badge-xs badge-warning"></span>
              กำลังทำ
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="badge badge-xs badge-success"></span>
              ทำเสร็จแล้ว
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="badge badge-xs badge-error"></span>
              มีปัญหา
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
