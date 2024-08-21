export default function Links() {
    return (
              <div className="flex flex-row gap-4">
        <a
          className="p-2 rounded-md w-32 bg-black border flex flex-col items-center justify-center gap-2 group"
          href="https://starknet.io/docs"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://pbs.twimg.com/profile_images/1656626805816565763/WyFDMG6u_400x400.png"
            className="object-contain w-12 h-12"
            alt="starknet-icon"
          />
          <p className="text-xs text-center">
            Starknet Docs
            <span className="group-hover:font-bold transition-all ml-1 group-hover:ml-2">
              {">"}
            </span>
          </p>
        </a>
        <a
          className="p-2 rounded-md w-32 bg-black border flex flex-col items-center justify-center gap-2 group"
          href="https://starknet-react.com/docs/getting-started"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"
            className="object-contain w-12 h-12"
            alt="react-icon"
          />
          <p className="text-xs text-center">
            Starknet React Docs
            <span className="group-hover:font-bold transition-all ml-1 group-hover:ml-2">
              {">"}
            </span>
          </p>
        </a>
      </div>
    )
}