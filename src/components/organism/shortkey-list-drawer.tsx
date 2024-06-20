import { HomeSide } from "@/constant/home-side.enum";
import { useHomeSideStore } from "@/store/home-side";
import Drawer from "../atom/drawer";

export default function ShortkeyListDrawer() {
  const { side, open, setOpen, switchSide } = useHomeSideStore();

  const handleSwitchSide = (side: HomeSide) => {
    switchSide(side);
  };
  return (
    <div>
      <div>
        <Drawer
          open={open && side === HomeSide.shortkey}
          setOpen={setOpen}
          position="right"
        >
          <p>ShortkeyListDrawer</p>
          <div className="flex flex-row">
            <button className="btn btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="flex flex-row round rounded-lg bg-base-200">
              <button
                className="btn btn-circle btn-outline"
                onClick={() => handleSwitchSide(HomeSide.setting)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <button
                className="btn btn-circle btn-outline"
                onClick={() => handleSwitchSide(HomeSide.shortkey)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
}
